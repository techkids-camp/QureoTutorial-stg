### @flyoutOnly true


# QureoMinecraft

## エージェントをつかって、ブロックをはかしよう!

``||agent.エージェントに前をはかいさせる||``ブロックと``||agent.エージェントを前に1ブロックいどうさせる||``ブロックとくみあわせてエージェントにブロックをこわしてもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        hiragana_agent.destroy(FORWARD)
        hiragana_agent.move(FORWARD, 1)
    })
```

```template
    player.onChat("run", function () {})
```