### @flyoutOnly true


# QureoMinecraft

## エージェントをつかって、ブロックをはかいしよう！

エージェントをつかってブロックをはかいするには、
``||agent.エージェントに前をはかいさせる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        hiragana_agent.destroy(FORWARD)
    })
```

```template
    player.onChat("run", function () {})
```