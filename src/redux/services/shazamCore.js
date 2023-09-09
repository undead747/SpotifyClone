import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '0a0baa13demshd14ad00b42e7f18p1de629jsn40a5ac6f5932')

            return headers
        }
     }),
     endpoints: (builder) => ({
        getTopCharts: builder.query({query: () => '/charts/world'}),
        getSongDetails: builder.query({query: (songid) => `/tracks/details?track_id=${songid}`}),
        getSongRelated: builder.query({query: (songid) => `/tracks/related?track_id=${songid}`}),
        getSongsByCountry: builder.query({query: (country) => `/charts/country?country_code=${country}`}),
     })
})

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetSongsByCountryQuery } = shazamCoreApi;