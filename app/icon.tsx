import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f4f5f2',
          borderRadius: 14,
          fontSize: 52,
        }}
      >
        👨‍💻
      </div>
    ),
    size,
  )
}
