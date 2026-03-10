### @flyoutOnly true


# QureoMinecraft

## エージェントにブロックをはかいさせてみよう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.destroy(FORWARD)
    })
```

```template
    player.onChat("run", function () {

    })
```