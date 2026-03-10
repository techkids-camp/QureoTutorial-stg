### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("go", function () {
    while (true) {
        hiragana_agent.turn(LEFT_TURN)
    }
})
player.onChat("run", function () {
    hiragana_agent.move(UP, 1)
})

```