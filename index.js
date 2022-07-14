const palindromeChecker = str => {
    let strWithoutAccents = new Array();
    for (let i = 0; i < str.split('').length; i++) {
        'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'.indexOf(str.split('')[i]) != -1 ? strWithoutAccents[i] = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz'.substring('ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'.indexOf(str.split('')[i]), 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'.indexOf(str.split('')[i]) + 1) : strWithoutAccents[i] = str.split('')[i];
    }
    return strWithoutAccents.join('').replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"()*+,\-.\/:;<=>?\[\]_`{|}]|(?![*#0-9]+)[\p{Emoji}\p{Emoji_Modifier}\p{Emoji_Component}\p{Emoji_Modifier_Base}\p{Emoji_Presentation}]|Ⓐ|☭|✯|✙|ᛋ|卐|卍|࿕|࿖|࿗|࿘|ꖦ|☫|☤|❥|웃|유|☏|♚|▲|⚤|☒|♛|▼|♫|⌘|¡|♡|ღ|ツ|☼|❅|✎|✪|➳|✞|✿|✄|✫|★|\s+/gu, '').toLowerCase() == [...strWithoutAccents.join('').replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"()*+,\-.\/:;<=>?\[\]_`{|}]|(?![*#0-9]+)[\p{Emoji}\p{Emoji_Modifier}\p{Emoji_Component}\p{Emoji_Modifier_Base}\p{Emoji_Presentation}]|Ⓐ|☭|✯|✙|ᛋ|卐|卍|࿕|࿖|࿗|࿘|ꖦ|☫|☤|❥|웃|유|☏|♚|▲|⚤|☒|♛|▼|♫|⌘|¡|♡|ღ|ツ|☼|❅|✎|✪|➳|✞|✿|✄|✫|★|\s+/gu, '')].reverse().join``.toLowerCase();
};

module.exports = { palindromeChecker };
