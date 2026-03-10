### @flyoutOnly true


# QureoMinecraft

## エージェントをつかって、スイッチをおさせよう！

こんかいは``||loops.くりかえし||``ブロックをつかうよ！なにをなんかいくりかえせばいいかな？
``||agent.エージェントに前へおかせる||``ブロックもつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(FORWARD, 1)
        }
    })
```


```template
    player.onChat("run", function () {

    })
```