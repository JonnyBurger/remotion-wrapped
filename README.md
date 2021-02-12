# [Watch the video](https://example.com)
# [Watch the tutorial](https://www.youtube.com/watch?v=I-y_5H9-3gk)

# Spotify Wrapped in Remotion

<p align="center">
  <a href="https://github.com/JonnyBurger/remotion-logo">
    <img src="https://github.com/JonnyBurger/remotion-logo/raw/main/withtitle/element-0.png">
  </a>
</p>

Three scenes from Spotify Wrapped recreated in Remotion. The video is totally parametrizable, meaning you can override the text and images via command line flag!

## Commands

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Render video - parametrizable**

```console
npm run build -- --props='{"artists":["weeknd.jpg","maryjblige.jpg","roots.jpg","samsmith.jpg"],"topSongName":"All I Talk Is Money","topSongArtistName":"Albusta","topSongCover":"https://i.scdn.co/image/ab67616d00001e02d0108ee3b4a64bddfa7e6cc2","ranking":["Rap","Pop","Underground\nHip Hop","Alternative R&B","Neo Soul"]}'
```

**Server render demo**

```console
npm run server
```

See [docs for server-side rendering](https://www.remotion.dev/docs/ssr) here.

**Upgrade Remotion**

```console
npm run upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/JonnyBurger/remotion/issues/new).

## License

Notice that a company license is needed. Read [the terms here](https://github.com/JonnyBurger/remotion/blob/main/LICENSE.md).
