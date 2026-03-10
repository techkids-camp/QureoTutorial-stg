### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを〇に〇ブロックいどうさせる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("go", function () {
    while (true) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
    }
})
player.onChat("run", function () {

})
```

```ghost
player.onChat("go", function () {
    while (true) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
    }
})
player.onChat("run", function () {
    hiragana_agent.move(UP, 1)
})
```