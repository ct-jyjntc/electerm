import { TreeSelect } from 'antd'
import copy from 'json-deep-copy'
import { createTitleWithTag } from '../../common/create-title'
import { BookOutlined } from '@ant-design/icons'

const e = window.translate
const { SHOW_CHILD } = TreeSelect

function BookmarkSelect (props) {
  const {
    bookmarks,
    bookmarkGroups,
    onStartSessions,
    onChangeStartSessions
  } = props

  const buildData = () => {
    const cats = bookmarkGroups
    const tree = bookmarks
      .reduce((p, k) => {
        return {
          ...p,
          [k.id]: k
        }
      }, {})
    const btree = cats
      .reduce((p, k) => {
        return {
          ...p,
          [k.id]: k
        }
      }, {})
    function buildSubCats (id) {
      const x = btree[id]
      if (!x) {
        return ''
      }
      const y = {
        key: x.id,
        value: x.id,
        title: x.title
      }
      y.children = [
        ...(x.bookmarkGroupIds || []).map(buildSubCats),
        ...(x.bookmarkIds || []).map(buildLeaf)
      ].filter(d => d)
      if (y.children && !y.children.length) {
        delete y.children
      }
      return y
    }
    function buildLeaf (id) {
      const x = tree[id]
      if (!x) {
        return ''
      }
      return {
        value: x.id,
        key: x.id,
        title: createTitleWithTag(x)
      }
    }
    const level1 = cats.filter(d => d.level !== 2)
      .map(d => {
        const r = {
          title: d.title,
          value: d.id,
          key: d.id,
          children: [
            ...(d.bookmarkGroupIds || []).map(buildSubCats),
            ...(d.bookmarkIds || []).map(buildLeaf)
          ].filter(d => d)
        }
        return r
      }).filter(d => d)
    return level1
  }

  // onStartSessions is array for bookmarks
  const value = Array.isArray(onStartSessions) ? onStartSessions : []

  const rProps = {
    treeData: buildData(),
    value: copy(value),
    onChange: onChangeStartSessions,
    treeCheckable: true,
    showCheckedStrategy: SHOW_CHILD,
    placeholder: e('pleaseSelect'),
    style: {
      width: '100%'
    }
  }
  return (
    <TreeSelect {...rProps} />
  )
}

export default function StartSessionSelect (props) {
  const {
    onStartSessions,
    bookmarks,
    bookmarkGroups,
    onChangeStartSessions
  } = props

  return (
    <div>
      <div className='pd1b'>
        <BookOutlined /> {e('bookmarks')}
      </div>
      <BookmarkSelect
        bookmarks={bookmarks}
        bookmarkGroups={bookmarkGroups}
        onStartSessions={onStartSessions}
        onChangeStartSessions={onChangeStartSessions}
      />
    </div>
  )
}
