### @flyoutOnly true


# QureoMinecraft

## エージェントをつかって、スイッチをおさせよう！

こんかいは``||loops.くりかえし||``ブロックをつかうよ！なにをなんかいくりかえせばいいかな？

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {
            hiragana_agent.move(FORWARD, 1)
        }
    })
```


```template
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {
            
        }
    })
```