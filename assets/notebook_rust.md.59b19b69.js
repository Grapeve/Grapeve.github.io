import{_ as s,a as l,c as n,i as a}from"./app.bebd0fc1.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"一. Rust语言基础","slug":"一-rust语言基础","link":"#一-rust语言基础","children":[{"level":3,"title":"1. 三问：","slug":"_1-三问","link":"#_1-三问","children":[]},{"level":3,"title":"2. Rust是一门面向表达式的语言。","slug":"_2-rust是一门面向表达式的语言。","link":"#_2-rust是一门面向表达式的语言。","children":[]},{"level":3,"title":"3. Rust的编译期计算","slug":"_3-rust的编译期计算","link":"#_3-rust的编译期计算","children":[]},{"level":3,"title":"4. 从分类角度看rust变量绑定和引用","slug":"_4-从分类角度看rust变量绑定和引用","link":"#_4-从分类角度看rust变量绑定和引用","children":[]},{"level":3,"title":"5. Rust中的类型","slug":"_5-rust中的类型","link":"#_5-rust中的类型","children":[]},{"level":3,"title":"6. Rust中的行为","slug":"_6-rust中的行为","link":"#_6-rust中的行为","children":[]},{"level":3,"title":"7. 闭包与函数","slug":"_7-闭包与函数","link":"#_7-闭包与函数","children":[]},{"level":3,"title":"8. 模式匹配","slug":"_8-模式匹配","link":"#_8-模式匹配","children":[]}]},{"level":2,"title":"二. Rust核心概念","slug":"二-rust核心概念","link":"#二-rust核心概念","children":[]},{"level":2,"title":"三. Rust异步编程","slug":"三-rust异步编程","link":"#三-rust异步编程","children":[]}],"relativePath":"notebook/rust.md"}'),p={name:"notebook/rust.md"},o=a(`<h2 id="一-rust语言基础" tabindex="-1">一. Rust语言基础 <a class="header-anchor" href="#一-rust语言基础" aria-hidden="true">#</a></h2><h3 id="_1-三问" tabindex="-1">1. 三问： <a class="header-anchor" href="#_1-三问" aria-hidden="true">#</a></h3><ol><li><p>Rust语言有哪些特征？</p></li><li><p>Rust设计哲学是什么：Fast、safe、concurrent。</p></li><li><p>Rust社区和生态如何？</p></li></ol><p>在和已知知识建立联系的时候，要更多关注Rust提供了什么样的解决问题的思路和方法。</p><h3 id="_2-rust是一门面向表达式的语言。" tabindex="-1">2. Rust是一门面向表达式的语言。 <a class="header-anchor" href="#_2-rust是一门面向表达式的语言。" aria-hidden="true">#</a></h3><ul><li><p><code>; -&gt; ()</code>。</p></li><li><p><code>;</code>只有在块表达式<code>{}</code>最后一行才会进行求值，其他时候只作为<strong>连接符</strong>存在。</p></li><li><p><code>{}</code>块表达式的返回值：块内最后一行。</p></li></ul><p>除了最基础的声明语句外<code>eg:use std::collections::HashMap;</code>，其余基本都是表达式。</p><p>自行了解：rust中的表达式具体有哪些？操作符表达式的优先级列表？</p><h3 id="_3-rust的编译期计算" tabindex="-1">3. Rust的编译期计算 <a class="header-anchor" href="#_3-rust的编译期计算" aria-hidden="true">#</a></h3><p>编译期计算：编译期函数求值（CTFE），编译时执行的代码，必须知道其结果，才能继续执行。</p><p>rust支持的两种编译期计算方式：</p><ul><li><p>过程宏 + Build 脚本</p></li><li><p>类似于Cpp中的编译期常量表达式求值。</p></li></ul><p><strong>Rust CRFE</strong></p><ol><li>常量函数</li></ol><p><code>const X:T = ...;</code> <code>=</code>后面的表达式必须是可以在编译期间执行的代码（即常量表达式），<code>const</code>关键字创建了一个常量上下文。</p><p>常量上下文：</p><ul><li><p>常量值初始化位置</p></li><li><p>静态数组的长度表达式，<code>[T, N]</code>;</p></li><li><p>重复的长度表达式，类似于 <code>[0, N]</code>;</p></li><li><p>静态变量、枚举判别式的初始化位置。</p></li></ul><p>常量上下文可接受的常量表达式：</p><ul><li>const fn 函数</li><li>元组结构体</li><li>元组的值</li></ul><ol start="2"><li>常量泛型</li></ol><p>// snip</p><div class="language-rust"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 常量函数</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fib</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u128</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">helper</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u128</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u128</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u128</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u128</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u128</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> n</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">helper</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            b</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">helper</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> X</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">u128</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fib</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">);</span><span style="color:#A6ACCD;">        </span></span>
<span class="line"></span></code></pre></div><p>一些问题：<code>core::men:MayBeUninit</code>、<code>#[inline]</code> 、<code>#[feature(array_chunks)]</code></p><p>const-sha1库、 Vec的<code>new()</code>方法为什么是常量函数？<code>const-arrayvec</code></p><h3 id="_4-从分类角度看rust变量绑定和引用" tabindex="-1">4. 从分类角度看rust变量绑定和引用 <a class="header-anchor" href="#_4-从分类角度看rust变量绑定和引用" aria-hidden="true">#</a></h3><p>Rust语言没有GC却又可以安全且直观的方式来控制资源管理内存，首先依赖于Rust中表达式的两种分类：位置表达式和值表达式。位置表达式代表的是内存位置，而值表达式代表的是数据值本身。 …………</p><h3 id="_5-rust中的类型" tabindex="-1">5. Rust中的类型 <a class="header-anchor" href="#_5-rust中的类型" aria-hidden="true">#</a></h3><ol><li>基本数据类型</li></ol><p>数字（整数、浮点数）、数组（<code>[T,N]</code>）、字符(<code>char</code>)、字符串(<code>str、String ……</code>)、slice(<code>[T]</code>)、pointer(<code>*count T, *mut T</code>)、引用、元组、Unit、never、函数指针</p><p><strong>字符串为UFT-8编码的u8序列</strong></p><p>引用和指针的区别：</p><ul><li><p>引用不能为空。</p></li><li><p>拥有生命周期。</p></li><li><p>受借用检查器保护不会发生悬垂指针等问题。</p></li></ul><ol start="2"><li>自定义复合类型</li></ol><ul><li><p>结构体</p><p>当元组结构体只包含一个成员时，newType模式，扩展功能。</p><p>结构体内存布局：xxxxxx</p></li><li><p>枚举体</p></li><li><p>联合体</p></li></ul><ol start="3"><li>容器类型</li></ol><ul><li><p>可变容器( Rust默认不可变 )</p><ul><li><p>UnsafeCell</p></li><li><p>Cell （need impl Copy trait）</p></li><li><p>RefCell （need impl Move trait）</p></li></ul></li><li><p>集合容器</p><ul><li><p>Vec</p></li><li><p>HashMap</p></li></ul></li></ul><ol start="4"><li>泛型</li></ol><p>静态分发，零成本抽象</p><p>turbofish操作符，当编译期无法推断出类型时，手动为泛型指定具体类型。</p><ol start="5"><li>特定类型</li></ol><ul><li><p>PhantomData&lt; T &gt; ， 幻影类型</p></li><li><p>Pin&lt; T &gt;， 固定类型</p></li></ul><h3 id="_6-rust中的行为" tabindex="-1">6. Rust中的行为 <a class="header-anchor" href="#_6-rust中的行为" aria-hidden="true">#</a></h3><p>自行梳理Rust中的内置trait</p><div class="language-rust"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">i32</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(1,2)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parse</span><span style="color:#89DDFF;">::&lt;</span><span style="color:#FFCB6B;">Point</span><span style="color:#89DDFF;">&gt;();</span></span>
<span class="line"></span></code></pre></div><h3 id="_7-闭包与函数" tabindex="-1">7. 闭包与函数 <a class="header-anchor" href="#_7-闭包与函数" aria-hidden="true">#</a></h3><p><strong>1.常规函数</strong></p><p><strong>2.函数指针</strong></p><p><strong>3.闭包</strong></p><p>唯一不可变引用：编译器不允许你去使用被闭包捕获的引用。</p><p><span style="color:blue;"><strong>闭包实现Copy / Clone 的两条简单规则:</strong></span></p><p>1.若环境变量实现了Copy，闭包如果以<strong>可变借用方式</strong>捕获环境变量并对其进行修改，则闭包</p><p>自身不会实现Copy。</p><p>2.若环境变量自身是Move 语义，如果闭包内<strong>捕获环境变量的操作涉及修改环境变量或者消耗环境变量</strong>，则闭包自身不会实现Copy。</p><p><span style="color:blue;"><strong>闭包实现Sync / Send的三条简单规则：</strong></span></p><p>1.如果所有捕获变量均实现了Sync，则闭包女现Sync。</p><p>2.如果环境变量<strong>都不是唯一不可变引用方式捕获</strong>的，<strong>并且都实现了Sync</strong>，则闭包实现Send。</p><p>3.如果环境变量<strong>是以唯一不可变引用</strong>、<strong>可变引用</strong>、<strong>Copy或Move所有权捕获</strong>的，那闭包实现Send。</p><h3 id="_8-模式匹配" tabindex="-1">8. 模式匹配 <a class="header-anchor" href="#_8-模式匹配" aria-hidden="true">#</a></h3><p>两大类：不可辨驳模式与可辩驳模式</p><p>当一个引用值与非引用模式匹配时，编译器会自动填充ref或者ref mut来匹配引用或者是可变引用。</p><h2 id="二-rust核心概念" tabindex="-1">二. Rust核心概念 <a class="header-anchor" href="#二-rust核心概念" aria-hidden="true">#</a></h2><h2 id="三-rust异步编程" tabindex="-1">三. Rust异步编程 <a class="header-anchor" href="#三-rust异步编程" aria-hidden="true">#</a></h2>`,62),e=[o];function t(r,c,i,y,D,F){return l(),n("div",null,e)}const d=s(p,[["render",t]]);export{u as __pageData,d as default};
