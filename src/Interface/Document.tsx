
export interface DocumentInterface {
   id: number
   uuid: string
   title: string
   name: string
   key: string
   location: string
   location_cloudfront: string
   size: number
   extension: string
   is_s3_file: boolean
   custom_language: string
   language: string
   summary: string
   keypoints: string
   keywords: string
   segments: number
   segments_processed: number
   processed: boolean
   processed_at: string
   with_embeddings: boolean
   is_active: boolean
   created_at: string
   updated_at: string
}
