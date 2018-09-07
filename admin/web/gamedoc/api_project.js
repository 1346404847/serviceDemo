define({  "name": "问题反馈系统接口",  "version": "0.1.1",  "description": "问题反馈系统提供接口",  "title": "提供游戏接口",  "url": "https://apicustomer.topjoy.com/v1",  "footer": {    "title": "Token以及其他",    "content": "<p>##异常说明</p>\n<table>\n<thead>\n<tr>\n<th>错误码</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-32700</td>\n<td>Parse Error</td>\n</tr>\n<tr>\n<td>-32600</td>\n<td>Invalid Request</td>\n</tr>\n<tr>\n<td>-32601</td>\n<td>Method Not Found</td>\n</tr>\n<tr>\n<td>-32602</td>\n<td>Invalid Params</td>\n</tr>\n<tr>\n<td>-32603</td>\n<td>Internal Error</td>\n</tr>\n<tr>\n<td>-32001</td>\n<td>Invalid Signature Format</td>\n</tr>\n<tr>\n<td>-32002</td>\n<td>Signature Error</td>\n</tr>\n<tr>\n<td>-32003</td>\n<td>Invalid Uid</td>\n</tr>\n<tr>\n<td>-32004</td>\n<td>The method does not allow access</td>\n</tr>\n<tr>\n<td>-32005</td>\n<td>Invalid Username Password</td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>错误码</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-31005</td>\n<td>未配置答卷</td>\n</tr>\n<tr>\n<td>-31006</td>\n<td>答题未开始</td>\n</tr>\n<tr>\n<td>-31007</td>\n<td>答题已结束</td>\n</tr>\n</tbody>\n</table>\n<p>##签名算法</p>\n<pre><code class=\"language-php\">    //按顺序拼接参数,秘钥,日期, 采用MD5算法生成TOKEN\n    md5('SERVICE' .  $key . $headers['Date'])\n</code></pre>\n<p>##接口地址</p>\n<p>正式地址：http://apicustomer.topjoy.com</p>\n"  },  "template": {    "withCompare": true,    "withGenerator": true  },  "sampleUrl": false,  "defaultVersion": "0.0.0",  "apidoc": "0.3.0",  "generator": {    "name": "apidoc",    "time": "2018-03-26T08:01:19.906Z",    "url": "http://apidocjs.com",    "version": "0.17.6"  }});
