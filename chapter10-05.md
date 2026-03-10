### @flyoutOnly true


# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに〇をはかいさせる||``

``||agent.エージェントを〇に〇ブロックいどうさせる||``

``||agent.エージェントをじぶんのいちにもどす||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("go", function () {
    while (true) {

    }
})
player.onChat("run", function () {

})
```

```ghost
player.onChat("go", function () {
    while (true) {
        hiragana_agent.destroy(FORWARD)
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.destroy(UP)
    }
})
player.onChat("run", function () {
    hiragana_agent.teleportToPlayer()
})

```