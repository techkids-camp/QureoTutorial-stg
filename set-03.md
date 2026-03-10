### @flyoutOnly true


# QureoMinecraft

## エージェントをつかって、ブロックをおいてもらおう！

``||agent.エージェントに前へおかせる||``ブロックと``||agent.エージェントを前に1ブロックいどうさせる||``ブロックとくみあわせてエージェントにブロックをおいてもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(FORWARD, 1)
    })
```

```template
    player.onChat("run", function () {})
```