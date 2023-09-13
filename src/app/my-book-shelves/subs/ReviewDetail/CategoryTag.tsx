import React from 'react'

type Props = {}

const CategoryTag = ({ tag }: { tag: string }) => {
  return (
    <div style={{ backgroundColor: '#B6D7A8', borderRadius: 20, fontWeight: '600', fontSize: 14, paddingBlock: 6, paddingInline: 12 }}>
      {`# ${tag}`}
    </div>
  )
}

export default CategoryTag
