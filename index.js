
/**
██╗░░██╗░█████╗░███╗░░██╗░██████╗░█████╗░███╗░░░███╗░█████╗░██╗░░░░░░░░░░░███╗░░░███╗██████╗░
██║░░██║██╔══██╗████╗░██║██╔════╝██╔══██╗████╗░████║██╔══██╗██║░░░░░░░░░░░████╗░████║██╔══██╗
███████║███████║██╔██╗██║╚█████╗░███████║██╔████╔██║███████║██║░░░░░█████╗██╔████╔██║██║░░██║
██╔══██║██╔══██║██║╚████║░╚═══██╗██╔══██║██║╚██╔╝██║██╔══██║██║░░░░░╚════╝██║╚██╔╝██║██║░░██║
██║░░██║██║░░██║██║░╚███║██████╔╝██║░░██║██║░╚═╝░██║██║░░██║███████╗░░░░░░██║░╚═╝░██║██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚══════╝░░░░░░╚═╝░░░░░╚═╝╚═════╝░
🇲​​​​​🇦​​​​​🇩​​​​​🇪​​​​​ 🇧​​​​​🇾​​​​​ 🇮​​​​​🇲​​​​​🇦​​​​​🇱​​​​​🇰​​​​​🇦​​​​​ 🇭​​​​​🇦​​​​​🇳​​​​​🇸​​​​​🇦​​​​​🇲​​​​​🇦​​​​​🇱​​​​​*/






const _0x448b89=_0x200d;(function(_0x24aff5,_0x2f79ae){const _0x5ebcf4=_0x200d,_0x381c16=_0x24aff5();while(!![]){try{const _0x152504=-parseInt(_0x5ebcf4(0x24d))/0x1+parseInt(_0x5ebcf4(0x23a))/0x2+-parseInt(_0x5ebcf4(0x20e))/0x3*(parseInt(_0x5ebcf4(0x20a))/0x4)+-parseInt(_0x5ebcf4(0x219))/0x5*(-parseInt(_0x5ebcf4(0x284))/0x6)+-parseInt(_0x5ebcf4(0x248))/0x7+parseInt(_0x5ebcf4(0x261))/0x8*(-parseInt(_0x5ebcf4(0x20d))/0x9)+parseInt(_0x5ebcf4(0x236))/0xa;if(_0x152504===_0x2f79ae)break;else _0x381c16['push'](_0x381c16['shift']());}catch(_0x5f2ebb){_0x381c16['push'](_0x381c16['shift']());}}}(_0x62dc,0x660dc));function _0x200d(_0x290569,_0x58976e){const _0x62dc6=_0x62dc();return _0x200d=function(_0x200dfe,_0x91a926){_0x200dfe=_0x200dfe-0x1eb;let _0x7fcc4f=_0x62dc6[_0x200dfe];return _0x7fcc4f;},_0x200d(_0x290569,_0x58976e);}const {default:makeWASocket,useMultiFileAuthState,DisconnectReason,getDevice,fetchLatestBaileysVersion,jidNormalizedUser,getContentType}=require(_0x448b89(0x26c)),fs=require('fs'),P=require(_0x448b89(0x210)),config=require(_0x448b89(0x21f)),qrcode=require('qrcode-terminal'),NodeCache=require(_0x448b89(0x26e)),util=require(_0x448b89(0x238)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson,fetchBuffer,getFile}=require(_0x448b89(0x213)),{sms,downloadMediaMessage}=require(_0x448b89(0x20f)),axios=require(_0x448b89(0x25a)),{File}=require(_0x448b89(0x217)),path=require(_0x448b89(0x280)),msgRetryCounterCache=new NodeCache(),prefix='.',ownerNumber=config['OWNER_NUMBER'];var {updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get,updb,updfb}=require(_0x448b89(0x23d));if(!fs[_0x448b89(0x277)](__dirname+_0x448b89(0x250))){if(config[_0x448b89(0x212)]){const sessdata=config[_0x448b89(0x212)][_0x448b89(0x227)]('HANSAMAL-MD=',''),filer=File[_0x448b89(0x267)](_0x448b89(0x266)+sessdata);filer['download']((_0x2ec0b9,_0xf99b22)=>{const _0x6c90c6=_0x448b89;if(_0x2ec0b9)throw _0x2ec0b9;fs[_0x6c90c6(0x225)](__dirname+'/auth_info_baileys/creds.json',_0xf99b22,()=>{const _0x26094f=_0x6c90c6;console['log'](_0x26094f(0x207));});});}}const express=require(_0x448b89(0x25b)),app=express(),port=process[_0x448b89(0x229)]['PORT']||0x1f40;async function connectToWA(){const _0x16a0ca=_0x448b89,{version:_0xaf19fd,isLatest:_0x532deb}=await fetchLatestBaileysVersion();console[_0x16a0ca(0x25f)]('using\x20WA\x20v'+_0xaf19fd[_0x16a0ca(0x218)]('.')+_0x16a0ca(0x256)+_0x532deb);const {state:_0x2dd5fc,saveCreds:_0x4db4c6}=await useMultiFileAuthState(__dirname+_0x16a0ca(0x274)),_0x38631d=makeWASocket({'logger':P({'level':'fatal'})['child']({'level':_0x16a0ca(0x242)}),'printQRInTerminal':![],'generateHighQualityLinkPreview':!![],'auth':_0x2dd5fc,'defaultQueryTimeoutMs':undefined,'msgRetryCounterCache':msgRetryCounterCache});_0x38631d['ev']['on']('connection.update',async _0x5cd70a=>{const _0x22a18c=_0x16a0ca,{connection:_0x1c7b09,lastDisconnect:_0x5ef5c9}=_0x5cd70a;if(_0x1c7b09==='close')_0x5ef5c9[_0x22a18c(0x234)][_0x22a18c(0x1f4)]['statusCode']!==DisconnectReason['loggedOut']&&connectToWA();else _0x1c7b09===_0x22a18c(0x1ef)&&(await connectdb(),await updb(),console['log']('Softie\x20connected\x20✅'),fs[_0x22a18c(0x24a)]('./plugins/')['map'](_0x442113=>{const _0x2d9a95=_0x22a18c;path[_0x2d9a95(0x1fa)](_0x442113)[_0x2d9a95(0x233)]()=='.js'&&require(_0x2d9a95(0x206)+_0x442113);}),console[_0x22a18c(0x25f)](_0x22a18c(0x23b)),console['log']('Plugins\x20installed\x20✅'),await _0x38631d['sendMessage'](ownerNumber+_0x22a18c(0x294),{'image':{'url':'https://cdn.dribbble.com/users/15468/screenshots/2450252/logo.jpg'},'caption':_0x22a18c(0x223)}));}),_0x38631d['ev']['on'](_0x16a0ca(0x23e),_0x4db4c6),_0x38631d['ev']['on'](_0x16a0ca(0x254),async _0xa04029=>{const _0x18a6ba=_0x16a0ca;try{_0xa04029=_0xa04029[_0x18a6ba(0x260)][0x0];if(!_0xa04029[_0x18a6ba(0x28f)])return;_0xa04029[_0x18a6ba(0x28f)]=getContentType(_0xa04029[_0x18a6ba(0x28f)])==='ephemeralMessage'?_0xa04029['message']['ephemeralMessage'][_0x18a6ba(0x28f)]:_0xa04029[_0x18a6ba(0x28f)];config[_0x18a6ba(0x215)]==='true'&&(_0xa04029['key']&&_0xa04029[_0x18a6ba(0x208)][_0x18a6ba(0x275)]===_0x18a6ba(0x26f)&&await _0x38631d[_0x18a6ba(0x20b)]([_0xa04029[_0x18a6ba(0x208)]]));if(_0xa04029[_0x18a6ba(0x208)]&&_0xa04029[_0x18a6ba(0x208)][_0x18a6ba(0x275)]===_0x18a6ba(0x26f))return;config[_0x18a6ba(0x205)]==_0x18a6ba(0x249)?await _0x38631d[_0x18a6ba(0x269)]('available',_0xa04029[_0x18a6ba(0x208)][_0x18a6ba(0x275)]):await _0x38631d[_0x18a6ba(0x269)](_0x18a6ba(0x241),_0xa04029[_0x18a6ba(0x208)]['remoteJid']);config['AUTO_TYPING']==!![]&&_0x38631d[_0x18a6ba(0x269)](_0x18a6ba(0x231),_0xa04029[_0x18a6ba(0x208)][_0x18a6ba(0x275)]);config[_0x18a6ba(0x276)]==!![]&&_0x38631d[_0x18a6ba(0x269)](_0x18a6ba(0x28d),_0xa04029[_0x18a6ba(0x208)][_0x18a6ba(0x275)]);const _0xe285af=sms(_0x38631d,_0xa04029),_0x2ba213=getContentType(_0xa04029['message']),_0x37a11f=JSON['stringify'](_0xa04029['message']),_0x197a1c=_0xa04029['key'][_0x18a6ba(0x275)],_0xd11744=_0x2ba213==_0x18a6ba(0x232)&&_0xa04029['message']['extendedTextMessage']['contextInfo']!=null?_0xa04029['message']['extendedTextMessage'][_0x18a6ba(0x235)][_0x18a6ba(0x270)]||[]:[],_0x9e1437=_0x2ba213===_0x18a6ba(0x24f)?_0xa04029['message']['conversation']:_0xa04029['message']?.[_0x18a6ba(0x232)]?.[_0x18a6ba(0x235)]?.[_0x18a6ba(0x26d)]('quotedMessage')&&await isbtnID(_0xa04029[_0x18a6ba(0x28f)]?.[_0x18a6ba(0x232)]?.[_0x18a6ba(0x235)]?.['stanzaId'])&&getCmdForCmdId(await getCMDStore(_0xa04029[_0x18a6ba(0x28f)]?.[_0x18a6ba(0x232)]?.[_0x18a6ba(0x235)]?.['stanzaId']),_0xa04029?.[_0x18a6ba(0x28f)]?.['extendedTextMessage']?.[_0x18a6ba(0x228)])?getCmdForCmdId(await getCMDStore(_0xa04029[_0x18a6ba(0x28f)]?.[_0x18a6ba(0x232)]?.[_0x18a6ba(0x235)]?.[_0x18a6ba(0x237)]),_0xa04029?.[_0x18a6ba(0x28f)]?.[_0x18a6ba(0x232)]?.[_0x18a6ba(0x228)]):_0x2ba213===_0x18a6ba(0x232)?_0xa04029['message']['extendedTextMessage']['text']:_0x2ba213==_0x18a6ba(0x295)&&_0xa04029[_0x18a6ba(0x28f)]['imageMessage'][_0x18a6ba(0x243)]?_0xa04029['message']['imageMessage'][_0x18a6ba(0x243)]:_0x2ba213==_0x18a6ba(0x283)&&_0xa04029[_0x18a6ba(0x28f)][_0x18a6ba(0x283)][_0x18a6ba(0x243)]?_0xa04029[_0x18a6ba(0x28f)][_0x18a6ba(0x283)][_0x18a6ba(0x243)]:'',_0x286951=_0x9e1437['startsWith'](prefix),_0x5b056b=_0x286951?_0x9e1437[_0x18a6ba(0x290)](prefix['length'])[_0x18a6ba(0x253)]()[_0x18a6ba(0x255)]('\x20')[_0x18a6ba(0x226)]()[_0x18a6ba(0x233)]():'',_0x11b2c0=_0x9e1437[_0x18a6ba(0x253)]()[_0x18a6ba(0x255)](/ +/)['slice'](0x1),_0x581c46=_0x11b2c0[_0x18a6ba(0x218)]('\x20'),_0x2dd619=_0x197a1c[_0x18a6ba(0x222)](_0x18a6ba(0x1eb)),_0x42f728=_0xa04029[_0x18a6ba(0x208)]['fromMe']?_0x38631d['user']['id'][_0x18a6ba(0x255)](':')[0x0]+_0x18a6ba(0x294)||_0x38631d['user']['id']:_0xa04029[_0x18a6ba(0x208)]['participant']||_0xa04029[_0x18a6ba(0x208)][_0x18a6ba(0x275)],_0x3e1064=_0x42f728['split']('@')[0x0],_0x513bf3=_0x38631d['user']['id']['split'](':')[0x0],_0x1bb9c7=_0xa04029[_0x18a6ba(0x216)]||_0x18a6ba(0x23c),_0x4b379b=_0x18a6ba(0x291),_0x350947=_0x513bf3[_0x18a6ba(0x265)](_0x3e1064),_0x238f64=_0x4b379b[_0x18a6ba(0x265)](_0x3e1064),_0x3c6b0a=_0x350947?_0x350947:_0x238f64,_0x5852e7=ownerNumber['includes'](_0x3e1064)||_0x3c6b0a,_0x529b62=await jidNormalizedUser(_0x38631d[_0x18a6ba(0x279)]['id']),_0x389bbf=_0x2dd619?await _0x38631d[_0x18a6ba(0x1fe)](_0x197a1c)[_0x18a6ba(0x1ff)](_0xb42d91=>{}):'',_0x646555=_0x2dd619?_0x389bbf[_0x18a6ba(0x258)]:'',_0xbbfb38=_0x2dd619?await _0x389bbf['participants']:'',_0x1d926a=_0x2dd619?await getGroupAdmins(_0xbbfb38):'',_0x1a70a9=_0x2dd619?_0x1d926a['includes'](_0x529b62):![],_0x347684=_0xe285af[_0x18a6ba(0x28f)][_0x18a6ba(0x251)]?!![]:![],_0xf994b1=_0x2dd619?_0x1d926a[_0x18a6ba(0x265)](_0x42f728):![],_0x4894ce=_0x127500=>{const _0x2ea1b6=_0x18a6ba;let _0x30656c=_0x127500;for(let _0x1b2eae=0x0;_0x1b2eae<_0x30656c[_0x2ea1b6(0x26a)];_0x1b2eae++){if(_0x30656c[_0x1b2eae]===_0x197a1c)return!![];}return![];},_0x457fb2=async _0x5171fa=>{const _0x1f2fb3=_0x18a6ba;return await _0x38631d[_0x1f2fb3(0x1f3)](_0x197a1c,{'text':_0x5171fa},{'quoted':_0xa04029});},_0x8a5b96=!![];_0x38631d[_0x18a6ba(0x296)]=async(_0x14d7cb,_0x18ec7f,_0x39ba76)=>{const _0x380a9e=_0x18a6ba;if(!_0x8a5b96)await _0x38631d[_0x380a9e(0x1f3)](_0x14d7cb,_0x18ec7f);else{if(_0x8a5b96){let _0x12bee0='';const _0x543370=[];_0x18ec7f[_0x380a9e(0x286)][_0x380a9e(0x281)]((_0x59d642,_0x1388e8)=>{const _0x4c4b49=_0x380a9e,_0x1a278e=''+(_0x1388e8+0x1);_0x12bee0+='\x0a*'+_0x1a278e+'\x20|\x20'+_0x59d642[_0x4c4b49(0x22b)]['displayText']+'*\x0a',_0x543370[_0x4c4b49(0x297)]({'cmdId':_0x1a278e,'cmd':_0x59d642['buttonId']});});if(_0x18ec7f[_0x380a9e(0x22f)]===0x1){const _0x4b7710=(_0x18ec7f[_0x380a9e(0x228)]||_0x18ec7f[_0x380a9e(0x243)])+_0x380a9e(0x23f)+_0x12bee0+'\x0a\x0a'+_0x18ec7f[_0x380a9e(0x203)],_0xac9223=await _0x38631d[_0x380a9e(0x1f3)](_0x197a1c,{'text':_0x4b7710,'contextInfo':{'mentionedJid':[_0xe285af[_0x380a9e(0x1f5)]],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x380a9e(0x27d),'newsletterName':_0x380a9e(0x288),'serverMessageId':0x3e7}}},{'quoted':_0x39ba76||_0xa04029});await updateCMDStore(_0xac9223[_0x380a9e(0x208)]['id'],_0x543370);}else{if(_0x18ec7f[_0x380a9e(0x22f)]===0x4){const _0x1b15b7=_0x18ec7f[_0x380a9e(0x243)]+_0x380a9e(0x252)+_0x12bee0+'\x0a\x0a'+_0x18ec7f[_0x380a9e(0x203)],_0x34d27d=await _0x38631d[_0x380a9e(0x1f3)](_0x14d7cb,{'image':_0x18ec7f[_0x380a9e(0x1f7)],'caption':_0x1b15b7,'contextInfo':{'mentionedJid':[_0xe285af[_0x380a9e(0x1f5)]],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x380a9e(0x27d),'newsletterName':'❄𝙃𝘼𝙉𝙎𝘼𝙈𝘼𝙇-𝙈𝘿༒','serverMessageId':0x3e7}}},{'quoted':_0x39ba76||_0xa04029});await updateCMDStore(_0x34d27d['key']['id'],_0x543370);}}}}},_0x38631d[_0x18a6ba(0x272)]=async(_0x4fde5a,_0x246fb3,_0x1f4e52)=>{const _0x7aaf93=_0x18a6ba;if(!_0x8a5b96)await _0x38631d[_0x7aaf93(0x1f3)](_0x4fde5a,_0x246fb3);else{if(_0x8a5b96){let _0x2fe6c9='';const _0x33c1e5=[];_0x246fb3[_0x7aaf93(0x285)][_0x7aaf93(0x281)]((_0x1f4b55,_0x293d00)=>{const _0x4264a6=_0x7aaf93,_0x5bf2fd=''+(_0x293d00+0x1);_0x2fe6c9+='\x0a*['+_0x5bf2fd+']\x20'+_0x1f4b55[_0x4264a6(0x1f9)]+'*\x0a',_0x1f4b55[_0x4264a6(0x25e)][_0x4264a6(0x281)]((_0xf8d9e8,_0x3c0a61)=>{const _0x4f38a9=_0x4264a6,_0x391579=_0x5bf2fd+'.'+(_0x3c0a61+0x1),_0x5bdaad=_0x391579+_0x4f38a9(0x282)+_0xf8d9e8[_0x4f38a9(0x1f9)];_0x2fe6c9+=_0x5bdaad+'\x0a',_0xf8d9e8['description']&&(_0x2fe6c9+=_0xf8d9e8[_0x4f38a9(0x27b)]+'\x0a\x0a'),_0x33c1e5['push']({'cmdId':_0x391579,'cmd':_0xf8d9e8['rowId']});});});const _0x59faab=_0x246fb3[_0x7aaf93(0x1f7)]?_0x246fb3['image']:config[_0x7aaf93(0x278)],_0x2e727a=_0x246fb3['text']+'\x0a\x0a'+_0x246fb3['buttonText']+','+_0x2fe6c9+'\x0a\x0a╰────────────◉◉►\x0a\x0a'+_0x246fb3['footer'],_0x2ca891=await _0x38631d[_0x7aaf93(0x1f3)](_0x4fde5a,{'image':_0x59faab,'caption':_0x2e727a,'contextInfo':{'mentionedJid':[_0xe285af[_0x7aaf93(0x1f5)]],'forwardingScore':0x3e7,'isForwarded':!![],'forwardedNewsletterMessageInfo':{'newsletterJid':_0x7aaf93(0x27d),'newsletterName':'❄𝙃𝘼𝙉𝙎𝘼𝙈𝘼𝙇-𝙈𝘿༒','serverMessageId':0x3e7}}},{'quoted':_0x1f4e52||_0xa04029});await updateCMDStore(_0x2ca891[_0x7aaf93(0x208)]['id'],_0x33c1e5);}}},_0x38631d[_0x18a6ba(0x21d)]=async(_0xe504e2,_0x29d7c8)=>{const _0x2515e4=_0x18a6ba;await _0x38631d[_0x2515e4(0x246)](_0x197a1c,{'protocolMessage':{'key':_0xe504e2[_0x2515e4(0x208)],'type':0xe,'editedMessage':{'conversation':_0x29d7c8}}},{});},_0x38631d[_0x18a6ba(0x201)]=async(_0xa56280,_0xcba5b,_0x48817f,_0x2aa804,_0xc93597={})=>{const _0x203de2=_0x18a6ba;let _0x2d142e='',_0x54547d=await axios[_0x203de2(0x271)](_0xcba5b);_0x2d142e=_0x54547d['headers'][_0x203de2(0x221)];if(_0x2d142e['split']('/')[0x1]===_0x203de2(0x22d))return _0x38631d[_0x203de2(0x1f3)](_0xa56280,{'video':await getBuffer(_0xcba5b),'caption':_0x48817f,'gifPlayback':!![],..._0xc93597},{'quoted':_0x2aa804,..._0xc93597});let _0x392edb=_0x2d142e['split']('/')[0x0]+_0x203de2(0x204);if(_0x2d142e===_0x203de2(0x25d))return _0x38631d[_0x203de2(0x1f3)](_0xa56280,{'document':await getBuffer(_0xcba5b),'mimetype':'application/pdf','caption':_0x48817f,..._0xc93597},{'quoted':_0x2aa804,..._0xc93597});if(_0x2d142e[_0x203de2(0x255)]('/')[0x0]===_0x203de2(0x1f7))return _0x38631d['sendMessage'](_0xa56280,{'image':await getBuffer(_0xcba5b),'caption':_0x48817f,..._0xc93597},{'quoted':_0x2aa804,..._0xc93597});if(_0x2d142e[_0x203de2(0x255)]('/')[0x0]==='video')return _0x38631d['sendMessage'](_0xa56280,{'video':await getBuffer(_0xcba5b),'caption':_0x48817f,'mimetype':_0x203de2(0x21a),..._0xc93597},{'quoted':_0x2aa804,..._0xc93597});if(_0x2d142e[_0x203de2(0x255)]('/')[0x0]===_0x203de2(0x1ec))return _0x38631d['sendMessage'](_0xa56280,{'audio':await getBuffer(_0xcba5b),'caption':_0x48817f,'mimetype':_0x203de2(0x1f1),..._0xc93597},{'quoted':_0x2aa804,..._0xc93597});};if(config[_0x18a6ba(0x24b)]==_0x18a6ba(0x1fc)){if(!_0x2dd619&&_0x286951&&!isDev&&!_0x3c6b0a&&!_0x5852e7)return;}if(config[_0x18a6ba(0x24b)]==_0x18a6ba(0x21b)){if(_0x286951&&!isDev&&!_0x3c6b0a&&!_0x5852e7)return;}if(config[_0x18a6ba(0x24b)]=='inbox'){if(_0x2dd619&&!isDev&&!_0x3c6b0a&&!_0x5852e7)return;}_0x38631d['ev']['on']('call',async _0x14d65f=>{const _0x2592c4=_0x18a6ba;if(config['ANTI_CALL'])for(const _0x3da29d of _0x14d65f){_0x3da29d['status']==_0x2592c4(0x245)&&(_0x3da29d[_0x2592c4(0x220)]==![]?(await _0x38631d[_0x2592c4(0x1f3)](_0x3da29d[_0x2592c4(0x28b)],{'text':_0x2592c4(0x28c),'mentions':[_0x3da29d[_0x2592c4(0x28b)]]}),await _0x38631d[_0x2592c4(0x214)](_0x3da29d['id'],_0x3da29d[_0x2592c4(0x28b)])):await _0x38631d['rejectCall'](_0x3da29d['id'],_0x3da29d[_0x2592c4(0x28b)]));}});const _0x306b91=require(_0x18a6ba(0x26b)),_0x365c90=_0x286951?_0x9e1437[_0x18a6ba(0x290)](0x1)['trim']()['split']('\x20')[0x0][_0x18a6ba(0x233)]():![];if(_0x286951){const _0xd87581=_0x306b91[_0x18a6ba(0x240)][_0x18a6ba(0x200)](_0x5a23f3=>_0x5a23f3[_0x18a6ba(0x27c)]===_0x365c90)||_0x306b91[_0x18a6ba(0x240)][_0x18a6ba(0x200)](_0x3699cf=>_0x3699cf[_0x18a6ba(0x20c)]&&_0x3699cf[_0x18a6ba(0x20c)]['includes'](_0x365c90));if(_0xd87581){if(_0xd87581[_0x18a6ba(0x1f2)])_0x38631d[_0x18a6ba(0x1f3)](_0x197a1c,{'react':{'text':_0xd87581['react'],'key':_0xa04029['key']}});try{_0xd87581['function'](_0x38631d,_0xa04029,_0xe285af,{'from':_0x197a1c,'prefix':prefix,'quoted':_0xd11744,'body':_0x9e1437,'isCmd':_0x286951,'command':_0x5b056b,'args':_0x11b2c0,'q':_0x581c46,'isGroup':_0x2dd619,'sender':_0x42f728,'senderNumber':_0x3e1064,'botNumber2':_0x529b62,'botNumber':_0x513bf3,'pushname':_0x1bb9c7,'isMe':_0x3c6b0a,'isOwner':_0x5852e7,'groupMetadata':_0x389bbf,'groupName':_0x646555,'participants':_0xbbfb38,'groupAdmins':_0x1d926a,'isBotAdmins':_0x1a70a9,'isAdmins':_0xf994b1,'reply':_0x457fb2});}catch(_0x3f98aa){console[_0x18a6ba(0x234)]('[PLUGIN\x20ERROR]\x20',_0x3f98aa);}}}_0x306b91[_0x18a6ba(0x240)][_0x18a6ba(0x21e)](async _0x379034=>{const _0xa28ed5=_0x18a6ba;if(_0x9e1437&&_0x379034['on']===_0xa28ed5(0x1fd))_0x379034['function'](_0x38631d,_0xa04029,_0xe285af,{'from':_0x197a1c,'prefix':prefix,'quoted':_0xd11744,'body':_0x9e1437,'isCmd':_0x286951,'command':_0x379034,'args':_0x11b2c0,'q':_0x581c46,'isGroup':_0x2dd619,'sender':_0x42f728,'senderNumber':_0x3e1064,'botNumber2':_0x529b62,'botNumber':_0x513bf3,'pushname':_0x1bb9c7,'isMe':_0x3c6b0a,'isOwner':_0x5852e7,'groupMetadata':_0x389bbf,'groupName':_0x646555,'participants':_0xbbfb38,'groupAdmins':_0x1d926a,'isBotAdmins':_0x1a70a9,'isAdmins':_0xf994b1,'reply':_0x457fb2});else{if(_0xa04029['q']&&_0x379034['on']==='text')_0x379034[_0xa28ed5(0x22c)](_0x38631d,_0xa04029,_0xe285af,{'from':_0x197a1c,'quoted':_0xd11744,'body':_0x9e1437,'isCmd':_0x286951,'command':_0x379034,'args':_0x11b2c0,'q':_0x581c46,'isGroup':_0x2dd619,'sender':_0x42f728,'senderNumber':_0x3e1064,'botNumber2':_0x529b62,'botNumber':_0x513bf3,'pushname':_0x1bb9c7,'isMe':_0x3c6b0a,'isOwner':_0x5852e7,'groupMetadata':_0x389bbf,'groupName':_0x646555,'participants':_0xbbfb38,'groupAdmins':_0x1d926a,'isBotAdmins':_0x1a70a9,'isAdmins':_0xf994b1,'reply':_0x457fb2});else{if((_0x379034['on']==='image'||_0x379034['on']===_0xa28ed5(0x247))&&_0xa04029['type']===_0xa28ed5(0x295))_0x379034[_0xa28ed5(0x22c)](_0x38631d,_0xa04029,_0xe285af,{'from':_0x197a1c,'prefix':prefix,'quoted':_0xd11744,'body':_0x9e1437,'isCmd':_0x286951,'command':_0x379034,'args':_0x11b2c0,'q':_0x581c46,'isGroup':_0x2dd619,'sender':_0x42f728,'senderNumber':_0x3e1064,'botNumber2':_0x529b62,'botNumber':_0x513bf3,'pushname':_0x1bb9c7,'isMe':_0x3c6b0a,'isOwner':_0x5852e7,'groupMetadata':_0x389bbf,'groupName':_0x646555,'participants':_0xbbfb38,'groupAdmins':_0x1d926a,'isBotAdmins':_0x1a70a9,'isAdmins':_0xf994b1,'reply':_0x457fb2});else _0x379034['on']===_0xa28ed5(0x262)&&_0xa04029[_0xa28ed5(0x25c)]===_0xa28ed5(0x1ed)&&_0x379034[_0xa28ed5(0x22c)](_0x38631d,_0xa04029,_0xe285af,{'from':_0x197a1c,'prefix':prefix,'quoted':_0xd11744,'body':_0x9e1437,'isCmd':_0x286951,'command':_0x379034,'args':_0x11b2c0,'q':_0x581c46,'isGroup':_0x2dd619,'sender':_0x42f728,'senderNumber':_0x3e1064,'botNumber2':_0x529b62,'botNumber':_0x513bf3,'pushname':_0x1bb9c7,'isMe':_0x3c6b0a,'isOwner':_0x5852e7,'groupMetadata':_0x389bbf,'groupName':_0x646555,'participants':_0xbbfb38,'groupAdmins':_0x1d926a,'isBotAdmins':_0x1a70a9,'isAdmins':_0xf994b1,'reply':_0x457fb2});}}});const _0xac1fa1=[_0x18a6ba(0x22e),_0x18a6ba(0x1f8),_0x18a6ba(0x202),_0x18a6ba(0x292),'ewanna','danna',_0x18a6ba(0x257),'evpn','ewano'];for(let _0x4fe6b0 of _0xac1fa1){if(_0x9e1437[_0x18a6ba(0x233)]()[_0x18a6ba(0x265)](_0x4fe6b0)){if(!_0x9e1437[_0x18a6ba(0x265)](_0x18a6ba(0x1fb))&&!_0x9e1437[_0x18a6ba(0x265)](_0x18a6ba(0x259))&&!_0x9e1437[_0x18a6ba(0x265)](_0x18a6ba(0x264))){let _0xb66c74=await _0xd11744['download']();if(_0xd11744[_0x18a6ba(0x295)])await _0x38631d[_0x18a6ba(0x1f3)](_0x197a1c,{'image':_0xb66c74},{'quoted':_0xa04029});else _0xd11744[_0x18a6ba(0x283)]?await _0x38631d[_0x18a6ba(0x1f3)](_0x197a1c,{'video':_0xb66c74},{'quoted':_0xa04029}):console[_0x18a6ba(0x25f)](_0x18a6ba(0x273),_0xb66c74['mimetype']);break;}}}var _0x313d6d=await fetchJson(_0x18a6ba(0x209));if(_0x4894ce(config[_0x18a6ba(0x27a)])&&_0x1a70a9){if(!_0xf994b1)for(any in _0x313d6d){if(_0x9e1437[_0x18a6ba(0x233)]()[_0x18a6ba(0x265)](_0x313d6d[any])){if(!_0x9e1437[_0x18a6ba(0x265)](_0x18a6ba(0x1fb))){if(!_0x9e1437[_0x18a6ba(0x265)](_0x18a6ba(0x259))){if(!_0x9e1437[_0x18a6ba(0x265)](_0x18a6ba(0x293))){if(_0x1d926a[_0x18a6ba(0x265)](_0x42f728))return;if(_0xa04029[_0x18a6ba(0x208)][_0x18a6ba(0x21c)])return;await _0x38631d[_0x18a6ba(0x1f3)](_0x197a1c,{'delete':_0xa04029[_0x18a6ba(0x208)]}),await _0x38631d[_0x18a6ba(0x1f3)](_0x197a1c,{'text':'*Bad\x20word\x20detected\x20!*'}),await _0x38631d[_0x18a6ba(0x27f)](_0x197a1c,[_0x42f728],_0x18a6ba(0x211));}}}}}}var _0x2e93c6=_0x5af82f=>{const _0x5005d6=_0x18a6ba;var _0x3c99dc={'is_bot':![],'device':_0x5af82f[_0x5005d6(0x26a)]>0x15?_0x5005d6(0x28a):_0x5af82f[_0x5005d6(0x239)](0x0,0x2)==='3A'?_0x5005d6(0x287):_0x5005d6(0x27e)};return _0x5af82f[_0x5005d6(0x1f0)](_0x5005d6(0x224))&&(_0x3c99dc['is_bot']=!![],_0x3c99dc[_0x5005d6(0x24c)]=_0x5005d6(0x1f6)),/amdi|queen|black|amda|achiya|achintha/gi['test'](_0x5af82f)&&(_0x3c99dc[_0x5005d6(0x268)]=!![],_0x3c99dc['bot_name']=_0x5005d6(0x1ee)),_0x3c99dc;};async function _0x10c31d(_0x35e960,_0x31d1a2){const _0xdb9245=_0x18a6ba;if(_0x4894ce(config[_0xdb9245(0x289)]))return;if(_0xf994b1)return;if(!_0x1a70a9)return;if(_0x5852e7)return;if(_0x2dd619){var _0x4ad1b1=_0x2e93c6(_0xa04029['key']['id']);if(_0x4ad1b1[_0xdb9245(0x268)])try{return await _0x38631d[_0xdb9245(0x1f3)](_0x197a1c,{'text':'*Other\x20bots\x20are\x20not\x20allowed\x20here\x20!!*'}),await _0x38631d[_0xdb9245(0x27f)](_0x197a1c,[_0x42f728],'remove');}catch{}}}try{await _0x10c31d(_0x38631d,_0xa04029);}catch{}switch(_0x5b056b){case'jid':_0x457fb2(_0x197a1c);break;case _0x18a6ba(0x263):{let _0x22a258=getDevice(_0xa04029[_0x18a6ba(0x28f)][_0x18a6ba(0x232)][_0x18a6ba(0x235)][_0x18a6ba(0x237)]);_0x457fb2(_0x18a6ba(0x22a)+_0x22a258+_0x18a6ba(0x244));}break;default:}}catch(_0x5d44fa){const _0x51a1bf=String(_0x5d44fa);console[_0x18a6ba(0x25f)](_0x51a1bf);}});}function _0x62dc(){const _0x4e786a=['https://mega.nz/file/','fromURL','is_bot','sendPresenceUpdate','length','./command','@whiskeysockets/baileys','hasOwnProperty','node-cache','status@broadcast','quotedMessage','head','listMessage','Unsupported\x20media\x20type:','/auth_info_baileys/','remoteJid','AUTO_RECORDING','existsSync','LOGO','user','ANTI_BAD','description','pattern','120363315854895558@newsletter','web','groupParticipantsUpdate','path','forEach','\x20•\x20','videoMessage','141444DJJyrD','sections','buttons','ios','❄𝙃𝘼𝙉𝙎𝘼𝙈𝘼𝙇-𝙈𝘿༒','ANTI_BOT','android','from','🚩\x20Sorry\x20at\x20this\x20time,\x20I\x20cannot\x20accept\x20calls','recording','📟\x20HANSAMAL\x20Working\x20successfully!','message','slice','94762898541','ewhahn','http','@s.whatsapp.net','imageMessage','buttonMessage','push','@g.us','audio','stickerMessage','amdi','open','startsWith','audio/mpeg','react','sendMessage','output','sender','bailyes','image','dapan','title','extname','tent','only_group','body','groupMetadata','catch','find','sendFileUrl','dapn','footer','Message','ALWAYS_ONLINE','./plugins/','Session\x20download\x20completed\x20!!','key','https://raw.githubusercontent.com/naughtybinu2004/lpl_menia/main/badwords.json','8276lerMDY','readMessages','alias','2985561MMTJOQ','159AsEuFR','./lib/msg','pino','remove','SESSION_ID','./lib/functions','rejectCall','STATUS_VIEW','pushName','megajs','join','35NTqQBr','video/mp4','private','fromMe','edit','map','./config','isGroup','content-type','endsWith','Successfully\x20Bot\x20connected\x0a\x0a>\x20Enjoy\x20HANSAMAL-MD\x20𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙾\x20𝙱𝙾𝚃.\x0a>\x20Dont\x20use\x20wrong\x20things\x0a\x0a\x0aJoin\x20Our\x20Whatsapp\x20Channel\x20:-\x20https://www.whatsapp.com/channel/0029VajrLTH30LKXN5O5Zj04','BAE5','writeFile','shift','replace','text','env','*He\x20Is\x20Using*\x20_*Whatsapp\x20','buttonText','function','gif','send','headerType','listen','composing','extendedTextMessage','toLowerCase','error','contextInfo','12020470RHcMqV','stanzaId','util','substring','345036bdrKoo','Installing\x20plugins\x20🔌...\x20','IMALKA\x20HANSAMAL','./lib/database','creds.update','\x0a\x0a\x0a⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━❉\x0a\x20◊\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20◊\x20ֻ❉\x20\x20ʀᴇᴘʟʏ\x20ʙᴇʟᴏᴡ\x20ɴᴜᴍʙᴇʀ༆֓\x0a\x20◊\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━❉','commands','unavailable','fatal','caption','\x20version*_','offer','relayMessage','photo','490273EjFXwn','true','readdirSync','WORK_TYPE','bot_name','278417hZCuVZ','IMALKA\x20HANSAMAL\x20BOT\x20PROT\x20http://localhost:','conversation','/auth_info_baileys/creds.json','reactionMessage','\x0a\x0a\x0a⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━❉\x0a\x20◊\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20◊\x20ֻ❉\x20\x20ʀᴇᴘʟʏ\x20ʙᴇʟᴏᴡ\x20ɴᴜᴍʙᴇʀ༆֓\x0a\x20◊\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━❉\x0a\x0a','trim','messages.upsert','split',',\x20isLatest:\x20','evano','subject','docu','axios','express','type','application/pdf','rows','log','messages','16ayWiOT','sticker','device','https','includes'];_0x62dc=function(){return _0x4e786a;};return _0x62dc();}app['get']('/',(_0xf6a01f,_0x221ca3)=>{const _0x4d7471=_0x448b89;_0x221ca3['send'](_0x4d7471(0x28e));}),app[_0x448b89(0x230)](port,()=>console[_0x448b89(0x25f)](_0x448b89(0x24e)+port)),setTimeout(async()=>{await connectToWA();},0x3e8);
