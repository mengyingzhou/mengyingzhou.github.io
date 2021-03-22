#### 1. {Zhang_Flash_MobiSys19} Tao Zhang, Donald E. Porter, Aviad Zuck, and Dan Tsafrir. "Apps can quickly destroy your mobile’s flash – Why they don’t, and how to keep it that way." Proc. of MobiSys, 535–536. 2019.
- problem：
    - 在智能手机上，闪存容易被消耗完，导致手机无法使用。一个简单，无特权的恶意应用程序可能会在几周内使智能手机无法启动（“变砖”），而不会向用户发出警告信号。
- contribution：
 	1. 一系列手机上闪存存储寿命的经验评估
 	2. 各种良性智能手机应用程序的写入I / O行为的表征（below 200 KiB/s)
 	3. 关于为什么良性应用程序在实践中不会磨损智能手机闪存的经验性解释。
 	4. 提供一种抵御该攻击的算法
- 实现了一个简单的攻击应用程序，称为WAPP。
    - 攻击方式： WAPP会连续重写应用程序专用存储区域中的100MiB文件，该文件默认情况下分配给该应用程序。该应用程序使用大型顺序I / O重写数据，以实现设备支持的最大吞吐量Bmax。
    - 恶意隐藏：首先，Android会监控能耗，但仅在使用电池时。因此，我们可以通过仅在手机充电时运行I / O密集型工作来避免通过电源监视进行检测。其次，我们在后台运行WAPP。大由于大多数电话在禁用屏幕的情况下大部分时间都是在充电，因此WAPP通过在屏幕打开时暂停其恶意I / O活动，可以有效地逃避监视。
    - 权限要求，WAPP基本上可以发起有效的耗损攻击，除了通常授予任何应用程序的权限外，没有其他权限。
- 二分类界限明显：
        - 测量大量的应用程序，根据之前的损耗规则，目前正常程序的写入规则，即使是高密集型的写入吞吐量也是不足以损害设备的。因此能根据吞吐量，很好地分辨是否是恶意攻击或者bug，而不会影响到用户正常的APP使用。
- Defence：
    - 现有系统无法防止应用程序发布破坏性的写操作。 介绍并评估一种策略，该策略可防止发生可能损害设备的不太可能发生的写入事件。通过计算剩余的可使用量。用户每天的根据假设使用定量，分每天和每个小时进行写入总I/O的限制。
    - 判断方式：当前应用和所有应用消耗的缓存是不是超过了限制条件。
- 放大效应（不足）
    - 不幸的是，大多数移动设备不会直接报告物理写入。必须推断出写入放大率，使用他们的WAPP证明了该攻击的可能性。
    takeaways：
    - 有点像安全的文章，做了一个攻击系统，证明了他们的攻击有效性。同时提出了一个defence策略，证明了该策略的可行性。
    - 有些问题的defence策略很简单，但要经过大量测量证明策略的可行性。


#### 2. {Liu_DNS_IMC19} Chaoyi Lu, Baojun Liu, Zhou Li, et al. "An End-to-End , Large-Scale Measurement of DNS-over-Encryption : How Far Have We Come ?" Proc. of IMC. 2019.
- 为了避免明文 DNS 受到攻击以及隐私方面的问题，人们提出了多种加密的 DNS 协议(DNS-over-Encryption, DoE)，其中 DNS-over-TLS(DoT) 和 DNS-over-HTTPS(DoH) 是目前较广泛使用的两个协议，它们分别在 TLS 和 HTTPS 上进行 DNS 通信。论文从客户端的角度对这两种 DNS 协议进行系统分析。
- 扫描发现 DoE 服务器：通过遍历 IP 地址进行 853 端口扫描寻找 DoT 服务器；通过遍历搜索 URL 数据集中的域名寻找 DoH 服务器。
- 对发现的服务器进行分析：
    + DoT 服务器中 1/4 使用无效的 SSL 证书
    + DoT 服务器 IP 大多来自大型 DNS 服务提供商
    + 只有一个 IP 的 DoT 小型服务提供商占比超过 70%
    + DoH 找到 17 个解析服务器
- 从客户端测量 DNS 服务器可访问性和查询时间：
    + 方法：使用 SOCKS 代理网络实现从不同地点访问服务器
    + 可访问性：超过 99% 的用户能正常访问 DoE 服务器，只有 1% 的客户端因为 IP 冲突、审查和 TLS 监听无法完成查询。
    + 查询时间：对代理节点的明文 DNS 和 DoE 查询时间的比较发现使用连接复用的 DoE 因为加密带来的性能 overhead 是可以接受的。但是如果没有连接复用，会因为建立连接带来较大的时间开销。
- 当今 Internet 中 DoE 流量分析：
    * 方法：ISP 路由器记录中通过匹配 DoT 服务器 IP，以及 853 端口寻找 DoT 流量；通过 DoH 服务器的域名 DNS 查询数量间接测量 DoH 流量（DNS 缓存会导致低估 DoH 流量）。
    * DoT 流量相比明文 DNS 流量仍然很小，但是在不断增长
    * 17 个 DoH 解析服务器中，只有四个域名(dns.google.com, mozilla.cloudflare-dns.com, doh.cleanbrowsing.org, doh.crypto.sx)有超过 1 万的 DNS 查询，其它解析服务器的流量并不明显。其中 Google 域名查询数量最多，高出其它服务器几个数量级，其次是 CloudFlare（为火狐浏览器提供 DoH 查询支持）。


#### 3. {Ray_Vantage_SIGCOMM19} Devdeep Ray, Jack Kosaian, K. V. Rashmi, and Srinivasan Seshan. "Vantage: Optimizing video upload for time-shifted viewing of social live streams." Proc. of SIGCOMM, 380–393. 2019.
- 背景：
    - Social live video streaming（SLVS)的应用日益广泛，主要是各类直播软件，由于移动网络环境不稳定（尤其指直播上传方），并且不同用户对网络延迟的需求不同，如何提高所有观众的用户体验QoE（让用户可以观看到流畅且清晰度尽可能高的直播）。
- 传统技术的缺点：
    - 无法提供不同时延的直播服务，无法利用不同时延来提供更好的清晰度，例如对高时延的需求，可以进行重传来获得更高的清晰度。
    - 针对传统技术的不足，文章设计了Vantage系统，来有效解决上述问题，进而提高各类用户的QoE，Vantage的设计思路如下：
    - 传输实时桢后剩余的带宽进行选择性质量增强重传，并优化编码来平衡可用带宽的分配；Vantage系统的输入有带宽估计、帧的统计信息，输出实时帧的比特率、增强帧及其比特率；
    - Vantage系统的核心时调度程序，用来决定哪些帧要调度重传，以及如何设定它的比特率。重传帧主要通过优先级队列决定，并限制队列的长度；对于重传帧的比特率，通过可用带宽与SSIM-比特率的关系，及相应的参数来计算数值。
- Vantage的优势：
    - 实验验证了Vantage利用延时可以有效缓解带宽不稳带来的卡顿，提高各用户在不同观看时延下的QoE；通过减少上传路径的变化，同时提高了实时观看的质量与延迟观看的质量。

#### 4. {Ren_Optimise_INFOCOM17} Jie Ren, Ling Gao, Hai Wang, and Zheng Wang. "Optimise web browsing on heterogeneous mobile platforms: A machine learning based approach." Proc. of INFOCOM. 2017.
- 这篇论文介绍了一种AI的方法，以手机网页的web contents为输入，得到处理器的调度方式作为输出，从而达到减少render load time、或energy consumption、或两者折中的目的。相比于其他降低渲染时间的相关工作，该方法的亮点在于使用了每个网站网页的properties作为输入的feature，然后借助于AI方法进行求解。
- 详细要点如下：
    - 首先作者介绍了问题背景。手机网页渲染作为一个重要的话题，存在渲染速度慢、电池能耗高的问题。如今ARM big.LITTLE 多核架构可以将渲染任务分散在高性能或低性能的处理器上进行，也可以改变处理器的频率。而Linux自带的调度器Linux Heterogeneous Multi-Processing (HMP)仅能在OS的层面上对渲染任务进行调度，不会考虑每个网站网页的elements和properties；
    - 于是，作者设计了一个AI的方法，把每个网站网页的properties作为输入，把最优的处理器调度方式（包括处理器频率）作为输出，解决速度慢、能耗高的问题；
    - 该方法使用的是SVM classifier，通过leave-one-out cross-validation进行训练。训练集来自于Alexa上top400 websites的properties，这些properties包括DOM tree的节点数、深度、tag等70多个features。训练的目标有三种，分别是load time、energy consumption、EDP（前两者的折中），因此其实是三个分类器来解决目标不同的三种任务。这个SVM classifier 进行off-line training，训练好的模型以chrome 插件的形式放入到浏览器中，在新的网页输入时，提取feature，输入模型得到调度策略；
    - 作者将该AI方法与2017年当时最好的WS方法、以及Linux自带的Linux Heterogeneous Multi-Processing (HMP)方法进行实验比较。发现AI方法在Load time、energy consumption以及EDP上都能达到最佳的效果。此外，作者也分析了实验结果的比例分布、各个网页feature对于结果的影响比重，再次详细论证了AI方法的有效性。
- 感想：整体而言，网页browsing包括两个procedure：1. networking 2. rendering。这篇论文的工作是在第二个rendering阶段使用AI的方法进行提速，而我们当下AI-protocol做的工作是用AI的方法在第一个阶段networking进行提速，可以参考这篇论文的工作增加模型输入的features。例如，除了RTT、带宽这些输入feature外，还可以模仿这篇论文，加入网页的properties（DOM nodes、tags等）作为feature，可能会带来更好的效果。

#### 5. {Jiao_Diversion_Mobihoc19} Lei Jiao, Ruiting Zhou, Xiaojun Lin, and Xu Chen. Online scheduling of trafic diversion and cloud scrubbing with uncertainty in current inputs. 2019. Proc. of MobiHoc, 271–280.
- [资源调度]
- 这篇解决的问题是：什么样的scrubbing center资源调度可以获得最小的成本。
- challenges：
  - 成本的形式化表达。重定向和调度过程中涉及到的因素和变量过多，如何全面、精准的定义这种变量，是一个挑战
  - 不确定输入。在成本的定义中有涉及到不确定因素，例如恶意流的占比等，如何在最优化求解的过程中消除这个不确定因素是一个难点
- 本文主要是一个理论优化问题。


#### 6. {Yan_Puffer_NSDI20} Francis Y. Yan, Hudson Ayers, Chenzhi Zhu, et al. "Learning in situ: a randomized experiment in video streaming." Proc. of NSDI. 2019.
- Summary：
​	这篇论文，最主要的贡献是部署了一套自己的视频系统，并在该系统上收集了超过十万用户的观看数据，总的数据跨度超过两年。研究了视频流中不同方法在QoE中的表现，说明了传统方法ABR模型在实际表现中比之前的仿真预测结果要好。这篇文章的baseline选择都是很强的文章，比如今年的SIGCOMM论文，能说明他们的可拓展性差，也是一个很大的贡献。文章同时提出了自己的Fugu方法，在预测时使用了每日重训练的有监督学习，在QoE中表现好。
- Contributions：
    1. 建立了Puffer数据集，收集了超过10万用户，视频浏览总时长超过40年。
    2. 测量和研究表明，之前baseline工作的鲁棒性并没有小数据集和仿真环境效果那么好。
    3. 测量和研究表明，最简单的ABR工作，在该数据集的表现比baseline工作并未逊色太多，baseline工作的可拓展性有待商榷。
    4. 他们使用简单的DNN代替了baseline方法中的决策树，在保证实时预测情况下，获得较好的QoE测量指标。
    5. 每天重新训练新模型，在一年的时间跨度里，验证了DNN方法一定程度上的鲁棒性，以及该方法一定程度上的可靠性。
    6. 公开了Puffer数据集，并提供了大量实用的接口。
- Takeaways：
    - 这篇文章属于偏系统化测量的视频流相关的工作。文章的最大贡献在于实现了Puffer，收集了大量数据并将其公开。在之后的研究中，新构建系统挑战太大，但可以考虑使用该公开数据集进行视频流数据的分析。（2020年发表的文章，对于该数据集的使用应该还不算太多）。
    - 对于SSIM和Stall以置信区间的方式分析QoE指标，考察对于不同用户跨度和时间维度的表现趋势，也是未来如果将视频流应用到我们工作上，可以参考考量的指标和分析方式。
    - 对于之前的baseline工作，如果能证明在不同数据集它们的方法没那么好，可拓展性不佳，也是一个可思考方向。

#### 7. {Naseer_disruption-free_SIGCOMM20} Usama Naseer, Luca Niccolini, Alan Frindell, and Theophilus A Benson. Zero Downtime Release : Disruption-free Load Balancing of a Multi-Billion User Website. Proc. of SIGCOMM, 529–541. 2020.
- 本文提出了几个独立的方案来避免服务器重启影响用户体验。改进主要涉及中间层负载均衡服务器 proxygen 的重启和处理短连接请求的应用服务器的重启。
- 传统的升级方法是服务器先进入 draining 阶段（只处理当前已连接的请求，不处理新的连接），draining 阶段结束后关闭服务器并启动更新后的服务器。这种方式会导致未处理完的连接和超过 draining 阶段长度的长连接被中断，同时在 draining 阶段会影响服务器集群处理请求的容量。而以下方案对这些不足做出了改进：
    * Sockeat Takeover：在原 proxygen 服务器处于 draining 阶段的同时启动已更新的新服务器，通过传递文件描述符让新服务器继承原有连接并处理新建立连接的请求，同时将属于老服务器的 UDP 数据转发给老服务器
    * Downstream Connection Reuse：中间层的 proxygen 转发长连接的 MQTT，当它需要更新时通知下游服务器并让下游服务器转移连接到其它的上游服务器上从而保持 MQTT 连接
    * Partial Post Replay：在重启应用服务器时，将该服务器上已接收但未完成的 POST 请求发回下游负载均衡服务器，并由它重新发送完整 POST 请求到其它应用服务器上。从而避免响应 500 状态码给客户端（影响 QoE）
- 第一种方案将重启的影响限制在当前服务器上，后两种方案通过下游负载均衡来屏蔽对用户的打扰。
- 提出一个方法使得系统在做更新时，不会终端服务，不会影响终端用户
  - **Zero Downtime Release is a collection of mechanisms** used at Facebook to shield the end-users from any disruptions
  - **preserve the cluster capacity** and robustness of the infrastructure when updates are released globally.
  - leverage different components of the end-to-end networking infrastructure to prevent or mask any disruptions in face of releases.
  - challenges
    - a large amount of protocols
    - seamlessly migrate
    - energy reasons
- The process of connection-restart incurs a number of handshakes (e.g., TLS and TCP) which we show (in Section 2.5) consumes as much as 20% of the OSP’s CPU.

#### 8. {Zhang_E2E_SIGCOMM19} Xu Zhang, Siddhartha Sen, Daniar Kurniawan, Haryadi Gunawi, and Junchen Jiang. "E2E: Embracing user heterogeneity to improve quality of experience on theweb." Proc. of SIGCOMM: 289–302. 2019.
- 用户体验一个重要的指标就是网络延迟，从运营商的角度考虑，用最少的成本提高用户体验是十分必要的。网络延迟=服务器延迟+外部延迟，传统的思路是提高服务器资源来减少服务器延迟。本文从一个新的角度来提升QoE，考虑到不同的外部延迟对于服务器延迟的敏感程度是不同的，例如1s和2s的服务器延迟对于10s的外部延迟来说，影响不大；但对于0.5s的外部延迟来说，就会有接近1倍的总延迟。考虑到这一点，对不同的外部延迟的请求，对其重新分配服务器资源（即服务器延迟重新分配）使得总的QoE值尽可能高，就是这个E2E系统的目的。
- 服务器延迟调度策略：
    - 将决策分为两级，底层找到给定决策的最佳请求映射，将所有可能的映射列出；
    - 然后顶层用爬山搜索，找到最佳的调度策略。
- 调整服务器资源分配在具体应用上的调度过程：
    - 分布式系统Cassandra：将对时间敏感的请求分配更多的服务器资源
    - 消息队列RabbitMQ：将资源请求队列从先进先出的调度方式改为时间敏感度的优先级队列
- 实验验证：
    - 将E2E运用在两个web服务Cassandra与RabbitMQ，用emulab搭建仿真环境，来研究E2E调度后QoE对比未使用E2E的情况，QoE提高了15.4%。
- 优缺点与展望：
    - 缺点，可能产生相对应的新的网络攻击；
    - 优点，可行性高，大规模部署后将有效提高用户QoE。

#### 9. {Li_Bridging_SIGCOMM19} Yuanjie Li, Kyu Han Kim, Christina Vlachou, and Junqing Xie. "Bridging the data charging gap in the cellular edge." Proc. of SIGCOMM: 15–28. 2019.
- 随着移动网络技术的发展，越来越多的设备使用蜂窝网络实现低延迟无线接入。它们接入到蜂窝网的边缘，需要使用蜂窝网的流量，并向运营商缴费。这个蜂窝边缘的流量统计是否精准？答案时否定的，由于数据间隙的存在，蜂窝运营商和边缘应用供应商在数据费用上并不总是达成一致的。
- 为什么有这个数据间隙，原因就在于数据丢失（用户发送文件时丢包）和selfish charging的存在。
- 针对上述情况，文章提出了TLC算法：Trusted,Loss-tolerant Charging算法，原理就是让数据丢失和selfish charging相互抵消。大体的思路就是应用商实际所用通常大于它所宣称的使用量，运营商反之。例如，应用商实际发送流量10M，运营商实际发送流量5M，但真实收取流量费用应该统一为8M，但双方开始并没有达到一致，应用商想尽可能的少交，但该算法限制应用商提出的费用必须大于运营商实际发送流量，故他可以发送5-8M之间的请求，运营商同理，他可以申请8-10M的请求；如果双方没有统一请求，便进入下一轮请求，此时范围从5-10M收缩至8m附近，继续进行收敛，直至统一，最终获得实际流量使用情况。
- 文章后面又用实验验证了该方法可以有效的统一实际流量消耗。
- 总结：为了处理运营商和应用商流量计费不统一问题，作者添加了两个条件让一个复杂、难处理的问题变得可解；在分析算法过程中，推导过程很严谨。

#### 10. {Xue_deepfussion_MobiHoc19} Hongfei Xue, Wenjun Jiang, Chenglin Miao, Ye Yuan, Fenglong Ma, Xin Ma, Yijiang Wang, Shuochao Yao, Wenyao Xu, Aidong Zhang, and Lu Su. “Deepfusion: A deep learning framework for the fusion of heterogeneous sensory data.” In Proc. of MobiHoc, 151–160.2019
- 更像是一篇人机交互的文章，有两个cite都是来自UbiComp的
- 作者EE的背景+data mining ability
- 用mutil-view sensors data 来检测人的Activity
    - sensors representation moudle：CNN，通过不同的kernel来解决不同sensor数据异构的问题
    - Weighted combination：一种attention机制，考虑到了不同sensor在不同的场景中的contribution不同
    - Cross-sensors correlation：考虑到了不同sensor之间的相关性，最后的实验也证明了相关性高的行为，准确度越高。

#### 11. {Li_Anomaly_MobiHoc19} Zhijing Li, Zhujun Xiao, Bolun Wang, Ben Y. Zhao, and Haitao Zheng. "Scaling deep learning models for spectrum anomaly detection." Proc. of MobiHoc: 291–300. 2019.
- 使用DNN，捕获IoT上LTE网络的物理频谱数据进行分析，通过频谱的信道噪声来预测是否有网络异常、错误使用、攻击等行为的发生
- 挑战性和主要的contribution来自于可拓展性，对于不同的cell和band上，对某个数据集训练的模型，而直接给其他数据集使用是争取率低的。而分别训练模型，开销巨大难以承受。
- 数据形式广，有固定的基站强信号，也有移动弱信号（比如行人、公交车），general模型用LSTM，通过[t-tp,t]时刻的测量数据，预测 [t,t+tq]时刻的频谱。
- 评价指标为频谱上的RMSE等，最后归一化为信道噪声db。
- 本文提出一个general的transfer learning模型，只需要本地短时间的数据，与teacher模型的dense层重新拟合，就能把信道噪声大大降低。
- 实验做了很多对比，包括但不限于本地模型、跨信道模型、迁移学习模型的比较，不同的频段，本地数据的时间长度，固定基站数据和移动测量数据，预测正确率与错误报警率等。显示了本文运用transfer learning的general模型，在做到实时的高效性上，保证了正确性几乎不下降，兼顾了实用性和可靠性
- Takeaways：
    - 比较少见的在信号频谱领域运用了DNN，第一个大规模网络的general模型，同时异常检测正确性较好。
    - 构建transfer learning模型，虽然简单但是高效，能做到实时检测，结合了实际的需求，同时保证了可靠性。


#### 12. {Zhou_Slim_NSDI19} Danyang Zhuo, Kaiyuan Zhang, Yibo Zhu, et al. "SlIM: OS kernel support for a low-overhead container overlay network." Proc. of NSDI: 331–344. 2019.
- 这篇文章是NSDI19的一篇文章，针对的是分布式容器基础架构下网络系统的加速，是贴近工业界需求的研究项目。
- 文章的思路很正常，首先回顾了当前容器中网络的几种模式，bridge, host，macvlan，overlay, 指出其中的优劣，例如bridge针对local machine，host会遇到端口映射的麻烦，macvlan会遇到容器迁移的问题，overlay是目前最为成熟的方案。然后列出了overlay的实现，接着指出了overlay相对host mode带来的performance overheads，通过研究overlay的实现得出是两次经过host 网络内核栈带来的性能开销，于是作者提出了SlimOS来进行优化。
- 首先文章对overlay网络的performance进行了分析，分几个部分，首先是无优化的，然后是通过fine tuning的方式做优化之后的，最后是利用网络工具更细粒度的确定了性能的瓶颈在多次经过内核栈。
- 于是作者提出来SlimOS系统，由三个部分组成，SlimSocket，SlimRouter, SlimKernelModule.第一个是为了使用户态（container中的应用）无感知设计的和POSIX socket完全一致的API，他会拦截socket调用，并通过IPC转发到SlimRounter，第二个部分Rounter是跑在host上的，将会在host上得到拦截到的guest调用，处理网络包，并且转发给其他的host，重要的是一旦连接建立，会使用dup2讲host和guest的套接字复制粘贴，TCP之后的传输就会在host中进行，这就是性能提升的原因。
- 至于SlimKernelModule这是一个可选项，他需要嵌入到linux内核中去，会调用linux系统cgroup和traffic control的模块在数据面进行QoS的控制，在控制面可以做到access control list的实现。
- 最后文章在不同类型的workload上测量，获得了throughput和CPU cycle的优化。
- 其中文章也指出了不足之处，不支持动态容器迁移，会花费更长的启动时间。


#### 13. {Perino_Experience_MobiCom20} Diego Perino, Xiaoyuan Yang, Joan Serra, Andra Lutu, and Ilias Leontiadis. "Experience: Advanced network operations in (Un)-connected remote communities." Proc. of MobiCom, 204–213. 2020.
1. 这篇论文主要是介绍提供基础网络通信服务的公司 Internet Para Todos 的运营经验。该公司主要为拉丁美洲的偏远地区提供网络基础设施。为了在有限的成本范围内提供移动互联网服务，该公司主要使用蜂窝网络来提供网络服务，各地的站点硬件配置都根据当地条件进行合理设置。
2. 在各地都有与该公司合作的本地网络服务提供商，这些提供商使用公司提供的网络基础设施来为用户提供网络。并且提供商与公司之间共享用户利润。
3. 论文的重点部分在于公司的网络监控平台。该平台收集各地站点发来的网络设备警报，而这些数据又为机器学习和决策制定提供了输入数据。平台内部采用模块化设计，各模块之间使用 REST API 通信。
4. 各种设备警报经过正则表达式提取有用信息，并进行数据清洗后被保存到数据库中。这些警报根据异常情况分为不同等级，其中 故障 是最严重的。而故障又根据故障持续时间分为临时故障和永久性故障，对于无法自动恢复的永久性故障需要派遣人员到实地进行设备维修。
5. 由于地处偏远，维修需要的人力物力较大。通过训练模型可以结合过去警告数据以及当地的天气状况等条件，预测某次故障是否为永久性故障，永久性故障的原因以及所需维修配件。并且对于大量的维修需求，可以合理分配不同维修小队的维修路线解决沿途上的各种故障。通过以上这些策略可以大幅减少网络维修所需的成本。


#### 14. {Gu_tiresias_NSDI19} Juncheng Gu, Mosharaf Chowdhury, Kang G. Shin, et al. "Tiresias: A GPU cluster manager for distributed deep learning." Proc. of NSDI, 485–500. 2019.
- 目前GPU集群调度管理器的两个shortcomings：
    - 第一个挑战是深度学习工作无法预估训练时间。因为很多的实验会在一开始，由于一系列的原因被中断。
    - 第二个挑战是深度学习工作的过度整合。深度学习中有很多的参数需要共享。
- 作者提出了Tiresias
    - Tiresias是第一个对于信息不可知的GPU资源管理，也是第一个考虑了两个维度(时间和空间)以及优先级离散化的调度
    - Tiresias使用一个简单的，外部可观察的，模型特殊的标准来判别什么时候放松worker的GPU合并的约束
    - 该设计有实用性和易部署性，并且性能显著提高。相比现有的产业方法最高提高了5X的JCT
- details
    - CH1：一个深度学习任务执行的时间通常是不可预知的，该文章提出两种调度算法，基于局部信息的离散化二维Gittins索引(Discretized Two Dimensional Gittins index)以及离散化二维LAS。
    - CH2：使用模型结构来尽可能地松弛化合并放置的约束，我们发现只有某些确定类型的DL模型是对是否合并是敏感的，敏感度是由于其张量大小分布的偏差。我们利用这种直觉将任务分成两类。


#### 15. {Hu_CableMon_NSDI20} Jiyao Hu, Zhenyu Zhou, Xiaowei Yang, Jacob Malone, Jonathan W Williams, Chapel Hill, Implementation Nsdi, and Jacob Malone. “CableMon : Improving the Reliability of Cable Broadband Networks via Proactive Network Maintenance.” In Proc. of NSDI.2020.	
- Details：	
​	这篇文章，帮助网络服务商ISP处理有限拨号网络(broadband)的不稳定检测问题，提高检测成功率并确保能实时检测的运行效率要求。	

​	对于用户提供的ticket数据，根据类别去除噪声点。而对于PNM数据，对每一个feature都用相同的算法，以Ticket Prediction Rate作为评价指标，找到对于statistic算法处理的数据后的最好的threshold。类似扫描线方式的探测方式，枚举快速处理所有的threshold，认为threshold之下的点为网络错误的点。选取五个Ticket Prediction Rate最大的feature，合并这五个feature来预测，认为只要有一个feature预测结果为网络错误，就认为该数据点网络错误。	

​	没有标签的数据，通过和用户提交的ticket的时间上的对比，找到对训练集最优的feature和对应的thresholds.	

​	对预测结果，提出实时有效的Sliding Window方法，帮助ISP使用预测结果，有很强的运用性。同时，对比实验显示，几乎在所有的方面，该方法都比ISP使用的现有方法更优，也比几种传统机器学习的分类结果优。 有很重要的应用前景。	

- Takeaway	
1. 对于实际在使用中的处理方式，提出一种保障效率前提下，准确率更高的预测方法，有很强的现实意义。	
2. 对于给定预测结果，提出实际有效的应用方案，方便实际应用对象可以真正有效实验结果提高服务质量，落地前景好。	
3. 对于没有标签的数据，找到可以类比的结果，映射到相同的时间序列上，通过对每个时间节点的对比来判别，预测和训练。	

#### 16. {Mackenzie_email_refind_www19} Mackenzie J, Gupta K, Qiao F, et al. Exploring User Behavior in Email Re-Finding Tasks[C]//The World Wide Web Conference. ACM, 2019: 1245-1255.	
- 本论文研究的是电子邮件中用户重新查找邮件时的行为，首先提出了一个框架在众包的环境下通过模拟用户查找邮件任务获得了真实的邮件数据和用户行为，然后分析不同的邮件排名方法、邮件属性和搜索质量中的用户行为。	
- 发现：	
    - 基于相关性的排名方法的MRR明显高于按时间的排名方法，但两种方法对用户行为的影响并不大。按时间的排名方法在查找旧邮件时比较困难，用户在决定什么时候放弃SERP会做得更好。混合的排名方法中，有些用户会忽略或浏览目标邮件之外的内容。	
    - 用户重新修改查询内容的规律与web搜索类似，但是修改策略会有差别。	
    - 重要的电子邮件更容易被找到，成功的时间更少，搜索次数更低。人工还是机器生成的邮件不会影响被找到的成功率。	
    - 用户行为与搜索结果的质量密切相关，质量降低，用户成功的时间就越长，搜索更频繁，并且更频繁地放弃每个SERP。	


#### 17. {Dukic_flow_size_NSDI19} Vojislav Ðukić, Zurich Sangeetha, Abdu Jyothi, Bojan Karlaš, Muhsen Owaida, Ce Zhang, Ankit Singla, Eth Zurich, Vojislav Ðuki´cðuki´c, and Sangeetha Abdu Jyothi. “Is advance knowledge of flow sizes a plausible assumption?” In Proc. of NSDI, 565–580.2019	
- 相对来说，这是一篇analysis文章，而不是一篇system structure的文章。	
- contribution：提供了一整套用于评估non-clairvoyant scheduling的pipline，提供了一些测量标准，也就是对于之后要进行ML预测flow size的研究，需要利用这个framework进行测量。	
- 因为相比于传统的ML tasks，对于flow size预测需要考虑实际因素比较多，因此本文对此依次进行了测试。包括：	
    - feature contributions	
    - how far the predicted future is	
    - fast-enough, deployable learning	
    - 网络嘈杂环境的coflow对于accuracy的影响	
- findings：	
    - advanced knowledge对于预测有效	
    - 但是**有效的**knowledge很难获取	
    - 同时对于某些系统/系统（eg. Sincronia），增加knowledge反倒降低效果	
    - 要根据payoff来调整advance knowledge的比例	


#### 18. {Liu_edge_MobiCom19} Luyang Liu, Hongyu Li, and Marco Gruteser. “Edge assisted real-time object detection for mobile augmented reality.” In Proc. of MobiCom.2019	
本文主要工作主要是专注于解决AR MR设备端到端延时和物体探测准确率，来获得良好的用户沉浸式体验。 主要做了以下几个工作：	
1. 将整个Pipeline分解，分析准确率偏低和延时高的问题所在；	
2. 为降低网络压力和计算量，对图像进行适合AR，MR场景的动态编码推流；	
3. 适应型策略：根据网络状况和任务情况决定哪些需要offload，哪些不需要；	
4. 为降低时延将图片切割传输，流推送和模型推测并行进行；	
5. 采用轻量化的目标追踪技术，在准确率和时延之间做一个tradeoff 通过以上工作，顺利将帧之间的时延控制在20ms以内，不仅获得了60FPS下的良好的性能，还提高了资源利用率。	

通过一些测试，我们发现，在一些高像素的手机进行高准确度的物品检测是很困难的。我们发现，一些benchmark，基准算法，例如ResNet，其实都是在一些低分辨率的场景进行。当放在当前的商用高分辨率的移动设备上的时候，我们测量得到这个模型结果需要100ms。所以，当我们甚至进行一些更加精准的物品检测的，我们需要更加复杂的模型，因此需要的时间也就越长。	

考虑到边缘计算的发展，其实我们可以将这一任务转移到边缘设备中，利用其强大的云资源进行计算。	

我们可以将AR设备捕捉的图像发送到edge cloud中，进行计算后再传回结果，再讲器覆盖在当前的视野上。但是这种问题带来了另一个高延迟的问题，也平均需要80ms。那么当我们传回结果时候，很有可能当前视野的图像已经进行了变化。	

因此本文提出了一种系统来解决这种传输延时，从80ms降低到15ms。同时还提出了一些快速移动物体轨迹追踪技术，使得延迟又从15ms降低到2.24ms。这个延迟已经远远低于人类的感知潜伏期的延迟。	

同时提出了自适应卸载技术，从而减少资源消耗，使得可以在每秒60帧的高像素的移动设备上运行。	

在这里介绍我们的一些关键技术。我们首要需要的目的是减少传输时间。最简单也是最直观的方法就是减少传输的帧，例如低分辨率，或者是压缩过的图片。但是这两种方法都会降低检测准确度。 	

第一个是叫做动态兴趣编码（dynamic region of interest coding）。这个component的主要思想是，希望对那些高信息量的区域上提供更高的编码，而那些无用的regions可以降低图片质量。因此我们基于上一个image，对那些有objective Detection的region构建一个mask。再对其余部分进行低质量编码。通过这种方法，我们发现可以大大降低传输的帧大小，但是同时又保留了最重要的信息。	

我们第二个key idea是提出一种类似并行流的功能。在从数据传输通道中，传统的方法是以FIFO的顺序读取方法对传输数据进行解码，	

而我们是将整个图像分成几个切分，在从单独的通道中进行传输。因此这样每个帧都可以立刻传输到edge cloud进行分析。整个时间基本是原来传统方法的一半。这种方法带来了一个挑战，切分方法将图像切割成了几个部分，物体识别在部分图像的识别效果不佳。	

因此我们提出了一种依赖关系推理方法，其基本思想是在下一个切片进行分析的时候，需要加上上个及其之前所有的信息。这样的话仍然将整个图像作为一个整体输入到模型中。	

我们提出了一种快速对象路径追踪技术，可以大幅度减少追踪延时。这个的核心思想是找到一个motion vector，将上一个分析结果进行平移。	

对于以上的这些key improvement，我们简单做了一个实验评估。我们分别在10个video公开数据集以及2个物体识别数据集上进行了测试。结果表明我们的效果是最佳的。	

同时我们还实现了一个AR应用程序，可以在手上生成一个小球。之前的基准模型由于延时不能很好的进行放置，但是同时我们的系统就很好的进行构建。	

#### 19. {Mao_Decima_SIGCOMM19} Hongzi Mao, Malte Schwarzkopf, Shaileshh Bojja Venkatakrishnan, Zili Meng ⋆ , Mohammad Alizadeh. Learning Scheduling Algorithms for Data Processing Clusters. SIGCOMM'19	
本文针对目前分布式系统的schedule算法低效问题，设计了一套寄去学习系统Decima，通过学习日志和目前系统状态，发出调度指令最小化任务运行时间。结果显示Decima能够很好胜任这项任务。	

本文主要有以下几点贡献：	

1. 设计了一套网络模型能够有效处理任意的形状和规模的DAG输入，并对于每个DAG输出高效的并行度结果；	
2. 通过一些训练方法，第一次将RL用于schedule任务，特别是这种连续任务（continuous stochastic job arrivals)	
3. 基于RL的Decima实现，无需人为介入。评估结果显示非常好。	

本文对DAG任务做了很好的抽象和embedding；challenge在于如何有效训练RL模型。论文内容翔实，比较清晰。	

#### 20. {Kalia_eRPC_NSDI19} Anuj Kalia, Michael Kaminsky, Intel Labs, David Andersen, Implementation Nsdi, and David G Andersen. “Datacenter RPCs can be General and Fast This paper is included in the Proceedings of the.” In Proc. of NSDI.2019	
* 这是NSDI 19的best paper, 简⽽而⾔言之是在讲如何在通⽤用硬件上（相⽐比过去RDMA，SmartNIC，FPGA 等⽅方式）实现⾼高性能的RPC框架。（如标题的，既general⼜又fast）	
* 这边⽂章⾸先提出了datacenter中⽹络的⼀些特点，	
    * Small messages	
    * Short duration RPC handlers	
    * Congestion-free networks	
    * 然后对此提出了RPC的性能优化给出了相应的⽅案：	
* 整体设计	
    * 多thread 充分利⽤多核的思想（这⾥具体没有提到核绑定的细节），然后分dispatch thread和working thread，异步接受消息。（这对performance的测量是⼀个trick），对每⼀个RPCfunction，有eventloop， RX， TX（packet I/O）	
* 优化细节	
    * disptach和working thread谁处理消息， tradeoff是inter-thread communcation overhead和blocking的overhead，针对⻓短RPC有不同的solution。	
    * session structure的信息由CPU分管的memory存储（类似正常写程序），代替原来RDMA中专⻔的硬件，因为这种硬件的cache本质上PCIE，相当于main memory，速度⽐SRAM中的慢。	
    * session meta data也是设计成了连续的数据结构，⼀次DMA read可以读完，同时也在软件上实现了zero copy的transmission，但是需要保证ownership防⽌data race，这在retransmit的情况下由性	
* 能损耗	
    * 对于wire protocol，引⼊request-for-response (RFR) packet，来保证client-based，（减少server端的cpu cycles）	
    * 对于拥塞控制，有 Timely or DCQCN ，但是由于硬件限制，选择Timely，但作者认为鉴于数据中⼼的本质，这个选项是configurable的， 之后实验证明bypass之后，性能显著提升	
* Takeaway	
    * 1.反思之前⾼性能⽹络的发展⽅向，是不是更贵的硬件意味着更⾼的性能？ 在datacenter的context下就⼀定需要牺牲通⽤性么（例如对OS的修改，对原来RPC application的改动）	
    * 2.⼯作很solid， 有很多engineering work。 from scratch分析了在software stack上有哪些细节可以优化来压榨性能（当然是在datacenter的context下）	
    * 3.⽂章开源了代码， https://github.com/efficient/eRPC，也有专⻔的⽂档，是⼀个很完整的⼯作	
* Doubt	
    * 1.为什么只测试了基于raft的⼀些应⽤场景，是因为其他场景没有相应的performance？	
    * 2.datacenter congestion-free的设定是否够强？（⽂章说的是buffer >> BDP	


#### 21. {Wang_flash_coNEXT19} Peng Wang,Hong Xu,Xin Jin,Tao Wang "Flash: efficient dynamic routing for offchain networks" CoNEXT '19	

这篇文章总体来说提出了一种用于 Offchain Network 的路由算法 Flash，同时在最后设计实现了一个简单的 Offchain 路由协议。Flash 路由算法从实际的 Offchain Network 交易数据中总结出两个交易的特点：	
1. 交易金额是重尾分布的	
2. 如果两人之间有交易，那么这种交易一般都是是经常性重复性地发生的	
由以上特点，作者将所有交易划分为两类交易：一类交易金额高，但数量少；一类交易金额少，而数量多。并对这两类交易使用不同的路由策略：	
* 对于大额交易，为尽量使其能交易成功，使用改进的最大流算法得到最多 k 条路径，并通过计算最小化路径所需花费	
* 对于小额交易，使用路由表记录每个接收者的 top-m 条最短路径。	
在模拟测试中，对总体交易数据的参数和路由算法的参数对路由结果的影响分别进行评估。	
交易数据参数包括：拓扑图中边的容量大小，交易数量	
路由算法参数有：是否最小化路径花费，大额与小额交易的划分阈值，参数 m 大小	
结果性能评估指标有：交易数量上的成功率，总的成功交易金额，网络探测消息的开销以及交易处理延迟	

在思考如何在性能和效果之间作出权衡的时候，我们可以尝试分析数据的分布特点，看看如果将数据分为两类，使用不同的方法处理它们是否能够达到更好的权衡。	

#### 22. {Kim_FreeFlow_NSDI19} Daehyeok Kim, Tianlong Yu, Hongqiang Harry Liu, Yibo Zhu, Jitu Padhye, Shachar Raindel, Chuanxiong Guo, Vyas Sekar, and Srinivasan Seshan. “Freeflow: Software-based virtual RDMA networking for containerized clouds.” In Proc. of NSDI, 113–125.2019	
NSDI 19 FreeFlow 这篇文章主要讲了如何在container的场景下enable RDMA。主要提到了四点：	

隔离：每个容器都应该有其专用的网络命名空间（包括端口空间、路由表、接口等），以消除与同一主机上其他容器的冲突。	

可移植性：容器应该使用虚拟网络与其他容器通信，并且与它的虚拟IP保持关联，而不管它被调度到哪个主机上或迁移到哪个主机上。	

可控性：编排器可以容易地执行控制平面策略(例如，准入控制、路由)和数据平面策略(例如，QoS、计费)。此属性在(多租户)云环境中尤其需要	

性能：如何能够达到Native RDMA的延迟和吞吐？	

问题的解决主要分成两部分，隔离是容器本身利用linux决定的，可移植性是容器网络达到（当然包括对RDMA库的一些hacking， FFI），可控性是通过FFR和FFO达成， 性能主要是在FFL和FFR的数据转移（进程通信和内存复制）	

主要freeflow有三个模块，	

FFR：用来起到硬件switch的作用，做转发和QOS	

FFO：用zookeeper实现，起到记录不同host的container信息的作用	

FFL：用来intercept RDMA原语，使其转化到container的virtual NIC上，	



性能问题：	

1.共享内存零拷贝	

2.在更低层做内存拷贝（防止复杂数据结构的复制）	

3.利用汇编讲存储写回main memory中，防止cache的问题	

4.利用某个CPU polling来减少latency	


#### 23. {Liang_NeuroCuts_SIGCOMM19} Eric Lian, Hang Zhu, Xin Jin, Ion Stoica. Neural Packet Classifications. SIGCOMM 2019.	
- RL 应用在数据包分类问题上	

#### 24. {Woo_Elastic_NSDI18} Shinae Woo, Justine Sherry, Sangjin Han, Sue Moon, Sylvia Ratnasamy, and Scott Shenker. “Elastic Scaling of Stateful Network Functions.” In Proc. of NSDI.2018	


#### 25. {Wang_PLOVER_NSDI18} Cheng Wang, Xusheng Chen, Weiwei Jia, Boxuan Li, Haoran Qiu, Shixiong Zhao, and Heming Cui. “PLOVER: Fast, Multi-core Scalable Virtual Machine Fault-tolerance.” In Proc. of NSDI.2018	
- Details：	
​	这篇文章，主要解决以虚拟机为主体的数据中心，在满足备份的时候，尽量提高效率、减少消耗和错误率。	

​	模型的主要方法是参考了两个已有的方法，分别是Remus [NSDI’08]和SMR systems: Chubby, Zookeeper, Raft [ATC’14]，并通过优化和结合这两种方法，使得新模型在效率、CPU消耗和错误率上得到提升。	

​	首先使用状态机，将每次需要向备份服务器同步的状态记录。状态机是SMR方法的核心，能解决Remus方法的脑裂问题。通过状态机的实验发现，Remus相邻的状态很相似，有些高达97%相同，所以不需要向之前把所有memory pages全部同步，而需要用hash等方法，将需要修改的部分信息压缩到尽量少的memory pages里。	

​	其次是关于阶段性同步，对于多久同步一次，并没有固定的时间。根据计算memory pages页的差异性，当两次状态之间的差异很大时再同步。减小同步开支。	

​	最后是关于计算和测量。该方法相比于Remus，用状态机完全解决了脑裂问题。同时，对于通量（每秒服务器能处理的requests数量），该方法也比现有方法提高了约50%以上。另外，关于latency延迟，该方法的传输延迟数约为2.8ms，比较经典算法50~60ms提升巨大，传输时间的减少也能有效降低错误的发生率。	

- Takeaway	

1. 对于已有的经典算法，可以尝试将优点取出并尝试合并，摒弃缺点。	
2. 性能上的巨大提升而仅仅多使用了极少量的资源，是一个很好的两点。	


#### 26. {Chen_BikeGPS_MobiSys18} Kongyang Chen and Guang Tan. “BikeGPS: Accurate localization of shared bikes in street canyons via low-level GPS cooperation.” In Proc. of MobiSys, 150–162.2018	
这篇论文提出了 BikeGPS 方法提高城市中共享单车的定位精度。	

通过将邻近共享单车组成网络，同时记录节点之间边的位置和方向，可以得到网络内部所有节点的拓扑结构和相对位置地图。之后只需确定网络中某个节点的经纬度位置即可确定网络中所有节点的位置。所以大体分为两个步骤：	
* 构建网络	
* 利用 RM 数据（从 GPS 卫星获取的数据）定位某个节点的位置	

构建网络又分为四个阶段：	
* BikeNode registration（注册节点）	
* BikeNode detection（检测用户与节点相遇）	
  * 通过匹配无线电指纹，检测用户是否与节点相遇。	
* BikeGPS network measurement（通过用户轨迹数据测量节点之间的距离和方位）	
  * 使用加速度传感器记录步数，磁传感器记录方向	
  * 同时用大量的 GPS 定位数据辅助确定行走方向	
* BikeGPS network formation（向网络中添加边的同时更新所有节点的位置）	

使用 RM 数据定位分为两个阶段：	
* 使用贪心算法筛选出较好的 RM 数据	
* 使用改进的 CTN 方法和筛选的 RM 数据计算位置定位	

经验总结：	
当每个节点都无法获得完整数据时，可以考虑一种共享信息的策略，将节点构建成一个网络，其中边记录节点之间的某种信息关系，在网络中所有节点的共享信息组成相对完整、准确的信息，由这些数据推算出网络中某节点之前未知的信息并通过网络中的边推算网络其它节点的未知信息。	


#### 27. Gediminas Adomavicius and Alexander Tuzhilin. “Toward the next generation of recommender systems: A survey of the state-of-the-art and possible extensions.” IEEE Trans. Knowl. Data Eng.2005	
* Toward the Next Generation of Recommender Systems: A Survey of the State-of-the-Art and Possible Extensions_Gediminas_TKDE2005	
* 本篇论文主要介绍了传统的推荐系统方法和可能的拓展。	
* 传统的方法有：基于内容的推荐、协同过滤、混合式方法。	
* 共同存在的问题包括冷启动和稀疏等。	
* 可能的拓展有：引入用户/商品的其他特征、扩散到多维推荐问题等。	

#### 28. Luyang Liu, Hongyu Li, and Marco Gruteser. “Edge assisted real-time object detection for mobile augmented reality.” In Proc. of MobiCom.2019	
本文主要工作主要是专注于解决AR MR设备端到端延时和物体探测准确率，来获得良好的用户沉浸式体验。 主要做了以下几个工作：	
1. 将整个Pipeline分解，分析准确率偏低和延时高的问题所在；	
2. 为降低网络压力和计算量，对图像进行适合AR，MR场景的动态编码推流；	
3. 适应型策略：根据网络状况和任务情况决定哪些需要offload，哪些不需要；	
4. 为降低时延将图片切割传输，流推送和模型推测并行进行；	
5. 采用轻量化的目标追踪技术，在准确率和时延之间做一个tradeoff 通过以上工作，顺利将帧之间的时延控制在20ms以内，不仅获得了60FPS下的良好的性能，还提高了资源利用率。	

#### 29. Wenyi Xiao, Huan Zhao, Haojie Pan, Yangqiu Song, Vincent W. Zheng, and Qiang Yang. “Beyond personalization: Social content recommendation for creator equality and consumer satisfaction.” In Proc. of KDD, 235–245.2019	
Beyond Personalization: Social Content Recommendation for Creator Equality and Consumer Satisfaction_Xiao_KDD19	
本篇论文围绕文章推荐任务，兼顾内容创作者的平等性与阅读者的满意度，提出一个个性化的推荐模型。	
模型框架：	
  - social exploration: 利用用户高阶好友向量组成用户向量	
  - document representation: 使用CNN、GRU对word-embedding特征提取，最终组成文章向量	
使用蒙特卡洛搜索的方法寻找指定用户的k位高阶好友，并以此组成用户向量的方法比较独特	


#### 30. {Yang_Interpretable_KDD18} Carl Yang, Xiaolin Shi, Jie Luo, and Jiawei Han. “I know you’ll be back: Interpretable new user clustering and churn prediction on a mobile social application.” In Proc. of KDD, 914–922.2018	
- 用户聚类对于user churn prediction的帮助	
- ClusChurn，两阶段框架	
     - 首先进行用户聚类，且对于聚类的用户类型的解释也十分合理	
     - 基于用户聚类的Parallel sub-LSTM模型	
- 构建sub-LSTM对于提升性能有很大的提升（基于我们的数据可以提高10%）	
- 文章的写作很具有逻辑，每一个challenge都有一个对应的解决方法或者对应点。	

#### 31. Rediet Abebe, David Parkes, Jon Kleinberg, and Charalampos E. Tsourakakis. “Opinion dynamics with varying susceptibility to persuasion.” Proc. KDD.2018	
本文主要研究如何从人们对观点的固执程度来改变社区的观点倾向。贡献主要如下：	
1. 提出与社交网络结合的模型，引入固执参数，描述个人的观点被周围人观点影响而变化的过程	
2. 提出影响人们的固执参数而达到整个社区观点最大化和最小化的目的	
3. 证明了不受限的上述问题是P问题，而有预算限制的问题是NP完全问题，并提出了贪心的启发式算法	
4. 实验证明了贪心启发式算法针对优化问题的有效性	


####  32. Hongzi Mao, Malte Schwarzkopf, Shaileshh Bojja Venkatakrishnan, Zili Meng ⋆ , Mohammad Alizadeh. Learning Scheduling Algorithms for Data Processing Clusters. SIGCOMM'19	
本文针对目前分布式系统的schedule算法低效问题，设计了一套寄去学习系统Decima，通过学习日志和目前系统状态，发出调度指令最小化任务运行时间。结果显示Decima能够很好胜任这项任务。	

本文主要有以下几点贡献：	

1. 设计了一套网络模型能够有效处理任意的形状和规模的DAG输入，并对于每个DAG输出高效的并行度结果；	
2. 通过一些训练方法，第一次将RL用于schedule任务，特别是这种连续任务（continuous stochastic job arrivals)	
3. 基于RL的Decima实现，无需人为介入。评估结果显示非常好。	

本文对DAG任务做了很好的抽象和embedding；challenge在于如何有效训练RL模型。论文内容翔实，比较清晰。	

#### 33. Rosaria Conte, Nigel Gilbert, Giulia Bonelli, Claudio Cioﬃ-Revilla, Guillaume Deﬀuant, Janos Kertesz, Vittorio Loreto, Suzy Moat, Jean-Pierre Nadal, Anxo Sanchez, Andrzej Nowak, Andreas Flache, Maxi San Miguel, and Dirk Helbing. "Manifesto of computational social science." The European Physical Journal Special Topics, 2012	
- 选择这篇文章的目的是为大家提供一些downstream的课题方向	
- 复杂的社会系统是由具有多个方向连接的多个本体论层次来驱动，不仅从微观到宏观，而且从宏观回到微观层次	
    - 包括：micro，macro（network，community），intermediate（group，tribe（部落））	
    - 特性是任何阶级的entity都会与其他entity相互联系	
    - 同时不同等级实体之间的联系多样：micro-macro链接[67-70]	
        - cross the different level of groups	
        - loop process：低层产生高层，高层又会反馈低层	
- CSS是一个**model-based science**，其中包括可预测性和可解释性模型	
    - predict：面向输出的，随着时间的推移的发展	
    - explanatory：显示事物工作方式；	
    - **两种模型是基于使用模型的目的不同而区分的**，预测性模型主要涉及优化模型以使它们的输出尽可能精确，解释性模型使用要求我们了解模型的组成部分是如何导致整体的行为。	
    - 而我们需要做的就是如何通过跨学科知识来构建一个可解释模型，得到一个对某一个现象general的描述	
- 不同的文化，不同的阶级、不同的规模是如何的和谐的进行合作并持续演化前进。多元、多层的模型需要考虑相互依赖的文化动力与社会过程	


#### 34. POG: Personalized Outfit Generation for Fashion Recommendation at Alibaba iFashion_KDD19	
POG: Personalized Outfit Generation for Fashion Recommendation at Alibaba iFashion_Chen_KDD19该论文提出了服装推荐的模型，模型的输入用户的历史点击记录，输出是一整套推荐的服装。	
该推荐系统需要满足两个要求：1.推荐的一整套服装内各件衣服的兼容性,2.服装推荐的个性化。	
该推荐系统搭建的框架：	
1.训练各件衣服的embedding。以每件商品的图片经卷积后的vector、文字描述经卷积网络后的vector、CF的图embedding三者连接为输入，输出为新的衣服的embedding。	
2.训练模型FOM学习一整套服装内的兼容性。基本的思想是通过MASK技术使得mask的输出接近ground truth.	
3.最终服装推荐模型POG。以预训练的FOM初始化POG，结合学习到的用户偏好，为用户推荐一整套服装。	
模型验证：	
在阿里内测的平台上进行实验，FOM对服装兼容性的结果远超基于LSTM的序列模型和CF的模型。POG的服装推荐结果也胜于基于LSTM+（RR/CF)的模型。	

#### 35. {Wang_repeat_WWW19} Chenyang Wang, Min Zhang, Weizhi Ma, Yiqun Liu, and Shaoping Ma. “Modeling item-specific temporal dynamics of repeat consumption for recommender systems.” Proc. World Wide Web Conf. WWW 2019.	
- contribution	
    - 提出了short-term和life-time在repurchase model中的左右	
    - 利用Hawkes Process（Point Process的一种）中的核函数来体现short-term 和life-time，用指数函数表示short-term，用混合高斯函数表示life-time。同时利用协同过滤作为Hawkes Process的基础项	
    - 本文模型（SLRC）的参数具有可解释性，且参数是item specific的，对于不同的item是参数是唯一的。	
    - SLRC模型易于移植到现有的协同过滤的算法中	
- 分析过程中分析了学习的参数同数据表现之前的关系	
- 分析了不同组件（作为基本项的CF、item specific、short-term、life-time）在不同数据集上的重要性	
- 分析了对于不同repurchase ratio的用户，模型的鲁棒性	
- Future work	
    - category level的repurchase	
    - simultaneous consumption 共同购买的影响因素	


#### 36. {Deep Multi-View Spatial-Temporal Network for Taxi Demand Prediction，AAAI18}	
本文本文综合了`时间`、`空间`、`语义`三个方面来预测交通出行需求量， 并提出了出了一种综合多视角的模型（空间、时间、语义）。	

1. 空间：local CNN，强调了邻近空间相似，较远的位置参与训练之间会有负作用(使用每个区域的需求量数据）	
2. 时间：传统LSTM（使用时间序列数据比如天气）	
3. 语义：使用“区域图”的边来表达区域对间需求模式的相似性，用graph embedding的方法作为环境特征参与训练（不同区域构建全连接图）	

本文通过多视角的方法获得了很好的实验结果，对于其他领域有比较好的借鉴意义。	

贡献：	
1. 提出了一种综合多视角的模型（空间、时间、语义）	
2. 提出局部CNN模型，用于捕捉邻近区域间的局部特征	
3. 使用语义进行预测	


#### 37. {Fates of Microscopic Social Ecosystems: Keep Alive or Dead?，KDD19}	
本文将生态系统中的种族数量变化模型移植到社交“生态系统”中，用扩展过后的生态系统种族数量变化模型预测社交网络中ego network的变化趋势和最终状态，经过实验验证了该模型可以很好地拟合和预测微信朋友圈的发展和最终状态。	
· 概念的对应采取了简单的分类，通过用户的发朋友圈数/用户评论点赞数对用户进行种族分类，分为消费者、中间和生产者	
· 模型的修改使用了矩阵的扩展，一是采用种族的概率表征一个用户的种族特征，二是使用邻接矩阵细化朋友间的相互影响	
· 本篇论文的核心即如何将生物学的生态系统模型对应到社交生态系统当中，模型修改不大但效果很好	



#### 38. {Predicting Dynamic Embedding Trajectory in Temporal Interaction Networks_Srijan_KDD19}	
本篇论文提出了在由用户和商品构成的时序网络中动态Embedding的模型。该模型中的embedding包括动态和静态的embedding，静态的为one-hot形式，动态的embedding包括update和projection两个运算。	
1）update运算	
  当t时刻用户u购买商品i时，更新此时用户的动态embedding-u(t)和商品的动态embedding-i(t)。这里通过两套RNN实现更新，用t前一时刻的用户、商品embedding和交互间的特征向量、时间间隔，分别进行更新。	
2）projection运算	
  projection即预测(t+delta-t)时刻用户的动态embedding。计算方法是u(t+delta-t) = (1+W·delta-t)*u(t).其中W是需要学习的权重，delta-t是时间间隔。	
模型训练方法：	
a)损失函数的建立	
  首先，定义了一个预测任务，即在已知用户u前一时刻的购买商品i,预测下一时刻购买物品的情况。损失函数即为预测的商品与真实的购买商品间的欧式距离，加上用户和商品embedding的正则项。以此训练出模型的参数	
b)t-Batch算法	
  - 首先，所有交互信息（四元组𝑆 = (𝑢 % , 𝑖 % , 𝑡 % , 𝑓 % )）按照时间顺序排列，构成：𝑆 + , 𝑆 , ,···, 𝑆 |/| .初始化批次𝐵 + ，𝐵 , ， ··· ，𝐵 1 ，k 属于[1, |𝐼|].	
  - 分配的方法： 假设前 r 个交互信息已经分配，考虑第 r+1 个𝑆 %7+ = (𝑢 8 , 𝑖 9 , 𝑡, 𝑓 % )。	
  𝑚𝑎𝑥𝐵𝑎𝑡𝑐ℎ(𝑢 8 , 𝑟)为所有包含用户𝑢 8 的交互信息的批次中最大的批次的下标 𝑚𝑎𝑥𝐵𝑎𝑡𝑐ℎ(𝑖 9 , 𝑟)为所有包含物品𝑖 9 的交互信息中批次中最大的批次的下标	
  因此，将𝑆_(r+1)分配的批次为𝐵_i,𝑖 = 1 + 𝑚𝑎𝑥(𝑚𝑎𝑥𝐵𝑎𝑡𝑐ℎ(𝑢 8 , 𝑟), 𝑚𝑎𝑥𝐵𝑎𝑡𝑐ℎ(𝑖 9 , 𝑟))这样可以将所有的批次分配，保证了时序关系，以及每个批中至多有某一固定用户或商品的 一条交互信息。	

  - t-batch 用于训练的方法： 每一次训练更新权重时，分别取对应的 batch 进行训练。 如，第一次更新权重，取𝐵 + 。这样进行训练，效果和所有的数据用来训练的效果相当，并且降低了时间。	

模型实验：	
在真实数据集将它们训练好的embedding进行未来购买商品预测和用户状态改变预测，模型效果很好	


#### 39. {Bhagat_buy_again_kdd18} Rahul Bhagat, Alex Lobzhanidze, Srevatsan Muralidharan, and Shankar Vishwanath. “Buy it again: Modeling repeat purchase recommendations.” In Proceedings of the ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 62–70.2018	
- 本文主要通过将“购买周期”、“商品重复购买率”、“商品对于某用户的重复购买次数”、“上次购买的时间延迟”等信息构建了四种侧重点不同的repeat purchase model。	
- 提供了现有对于repeat purchase行为的量化模型	
- 模型采用传统数学模型也达到了很好的效果	


#### 40. Diversity of a User's Friend Circle in OSNs and H1 Its Use for Proﬁling	
- 传统社交⽹络基于三元闭合理论, 所以 Ago Network 多样性⽐较低(⼀个或者很少数量的 ⽹络, 聚集系数⽐较⾼), 但是现实中并⾮如此.推测因为很多类似朋友圈做微商这样的群 体,利⽤社交功能做⽣意;	
- 为了能够**区分出传统社交用户和功能用户**(做生意的), 他们借鉴`Community Detection`提出**衡量朋友圈多样性**的指标`Diversity`, 并实验了**不同的度量方式**的表现, 其中改造`GN`算法的ENC效果最好.	
- 使用提出的`Diversity`, 进一步研究了**不同人口(职业, 性别, 年龄)** 的**Ago Network**的分布特征.	



#### 41. Understanding Group Event Scheduling via the OutWithFriendz Mobile Application，Ubicomp2018	
本文探讨了群体决策制定过程中相关的影响因素的特征和相应的影响，包括 个体移动轨迹、个体偏好、主办方偏好等相关特征，以自主开发的app收集到的聚会数据作为数据集进行相关特征的分析，得到了一系列的结论。	
· 开发自己的app收集聚会数据，主要收集小型团体的投票过程数据，以及用户的轨迹数据	
· 对数据集中的数据进行统计方法的分布分析，得到初步的观察结果	
· 主要对影响群体决策的相关因素进行了分析，分为个体移动轨迹、个体偏好、主办方偏好三个方面，主要内容是对应的9个观察结论，采用方法为画图加统计学分析的方法	


#### 42. {A Weakly Supervised Learning Framework for Detecting Social Anxiety and Depression.ASIF.UbiComp 2018}	
主要贡献：提出一个弱监督学习框架，该框架能从个体的长语音剪辑中检测社会焦虑和抑郁。该框架包括对语音数据建模提取特征的方法(NN2Vec)及一个将BLSTM应用到多元示例学习的分类器。	
框架内容：	
1.特征建模。	
(1）将原始语音数据划分为有重叠的窗口(window)，从每个语音窗口中提取基本的特征集，包括特征型(如Zero crossing rare、Energy)和函数型(如Min、Max)。这里提取的特征集将作为baseline的特征集和映射成词向量的基础。	
(2）将语音数据映射为词向量。根据(1)中提取的特征，使用GMM-based的聚类方法生成语音codebook。这时划分的每一个窗口的特征将根据它在codebook中出现的位置进行独热编码表示。	
(3）NN2Vec方法。将(2)中生成的one-hot型向量应用到一个全连接的神经网络（输入层为one-hot向量，隐藏层1层，输出层为2维softmax层).隐藏层内的向量即为最终对语音数据的向量表示。	
2.应用多元示例学习（MIL）方法	
(1)MIL方法简介：典型的多元示例学习任务中，一个bag中有诸多instance，bag的标记由instance决定，如果一个bag中至少有一个为正样本，则该bag标记为正样本，否则为负样本。在他们的实验中，根据实验者语音数据划分的各个窗口为instance,几个instance组成一个bag。	
(2)BLSTM-MIL分类器。	
模型过程：根据原始语音信号，对长语音剪辑划分为有重叠的片段，并提取每个片段的特征集，多个instance组成一个bag。输入即bag。通过双向LSTM模型训练每个bag中的instance，对各个instance的得分使用最大池化得到bag的得分，并以此作为输出。	
实验结果：	
1.对同一分类器，使用NN2Vec方法提取的特征与baseline特征集、其他对语音数据建模方法的特征集相比，F1得分和准确率提高显著。	
2.对同样的特征集，使用BLSTM的多元示例学习模型在F1得分和准确率都优于其他分类模型(DNN-MIL、SVM-MIL)	
3.对同样的特征集，使用弱监督学习模型的性能优于监督学习模型(如CNN、DNN）	


#### 43. {Liu_imputation_www19} Zongtao Liu, Zhongyi Tang, Yang Yang, Ning Li, Wei Huang, and Fei Wu. “How do your neighbors disclose your information: Social-aware time series imputation.” Proc. World Wide Web Conf. WWW 2019.	
- a model to data imputation based on the phenomenon that individual’s observations are dependent to each other in real-world.	
- model (Social-Aware Time Series Imputation, STI):	
    - social context 	
    - temporal content	
    - attention mechanism 	
    - novel LSTM model: T-LSTM [ref.7 time-aware LSTM networks, kdd17]	
- Comparison of Performance using Simulated Real-World Missing Data	
- 数据缺失值填充模型：基于现实世界中个体的相互影响的现象	
- 模型 (Social-Aware Time Series Imputation, STI):	
    - 社会上下文	
    - 时间内容	
    - 注意机制	
- lstm变体模型：T-lstm [ref.7 time-aware LSTM networks, kdd17]	
- Analysis 亮点： 模拟真实世界的数据缺失情况	

#### 44. {} Sadri, Amin, et al. "What will you do for the rest of the day?: An approach to continuous trajectory prediction." UbiComp2019	
- 本文探讨了根据用户轨迹历史记录和一天之中的开始轨迹，预测一天之中剩下轨迹的可行性。	
- 首先分析数据得出一系列重要结论：一天中早晨的轨迹和下午的轨迹有正相关性；越邻近的历史轨迹越相似；异常的轨迹往往具有一次性的特点	
- 提出了自己的方法：通过轨迹相似度、时间分块的方法探究相似轨迹的影响并预测轨迹	
- 与现有的方法和马尔科夫模型、lstm进行对比，在数据量不多的情况下本文方法最优	

#### 45. {PrivCheck: Privacy-Preserving Check-in Data Publishing for Personalized Location Based Services. Ubicomp'16}	
本论文主要针对个性化的LBSs提出的了一个用户可定制化的、连续的隐私保护的框架PrivCheck，来减少check-in数据发布时会造成的用户个人信息的隐私泄露。	
主要思路：在给定的一个数据失真的预算下，混淆用户的check-in数据，来降低用户特定的隐私数据的泄露程度，同时保证个性化LBSs的实用性。	
系统流程：	
（1）用户自愿将check-in数据共享到LBSN中，并指定自己的隐私数据；	
（2）用户公开的check-in数据和选定的隐私数据输入到PrivCheck框架中，historical check-in publishing module混淆用户历史check-in数据，online check-in data publishing module混淆check-in数据流中的每条check-in；	
（3）将混淆的check-in数据发布给第三方LBS提供商；	
（4）第三方提供高质量的个性化的LBSs。	


#### 46. {Chen_Learning Usage Patterns of Emojis from Large-Scale Android Users_WWW'18}	
本篇论文主要分析了不同性别的安卓用户在表情符号使用上的差异，并通过提取使用频率和偏好等作为特征，训练了预测用户性别的模型。该模型的精确度与基于英语文本构建的模型相当，并且可以推广到非英语用户。	
使用差异：	
1)女性比男性更倾向使用表情符号 	
2)男女性在使用表情符号上各有偏好,其中有些与性别差异的共识一致，有些不同。	
模型推广：	
1）基于表情符号预测性别的模型在不同语言的数据集上表现良好	
2）当该模型应用到message<100的用户的数据集上，相较原模型选择了message>=100的用户，虽然准确性下降，但仍优于基准模型	
模型比较：	
在同一数据集上，比较复现了基于英语文本预测性别的模型(Retrained text model)、基于表情符号的模型(Emoji model)、以文本内容计算情感得分并作为表情符号特征的模型(Semantic emoji model)	
1)Emoji model 逊于Retrained text model	
2)Semantic emoji model性能略优于Emoji model	



#### 47. {Cheng_good_team_www19} Cheng, Ziqiang, et al. "What Makes a Good Team? A Large-scale Study on the Effect of Team Composition in Honor of Kings." The World Wide Web Conference. ACM, 2019.	
- 本文主要通过王者荣耀游戏的对战记录研究了团队组成对于三个团队表现指标的影响。这三个团队表现分别为团队表现（输赢）、团队抗性（是否主动投降）、团队和谐（是否有侮辱性语句）	
- 动机	
    - 游戏数据的完整性（游戏玩家多、可以获得玩家的历史数据、个人信息等）	
    - MOBA游戏为团队游戏具有竞争性，同时人数、角色是固定易于量化分析	
- 分析	
    - 团队组成多样性促进团队表现、团队抗性，但是却减少了团队和谐	
    - “环境vs个性”分析，研究是个体属性决定行为还是环境决定行为。通过“有侮辱倾向的玩家不管选择什么游戏角色都会侮辱他人”这样的发现表明，个体属性决定行为。	
- 预测	
    - 预测输赢、是否投降和是否有侮辱性语言。总的来说，发现基于团队组成的特征始终优于基于单个玩家的重要性。	
    - 特征重要性：total > role property > player information > baseline	

#### 48. {Costa_Engaging_CSCW18} Costa Figueiredo, Mayara, et al. "Engaging with Health Data: The Interplay Between Self-Tracking Activities and Emotions in Fertility Struggles." Proceedings of the ACM on Human-Computer Interaction 2.CSCW (2018): 40.	
- 本论文探讨了在自我记录以达到目标的过程当中，产生的情绪和记录行为相互影响的过程。本文选用了以生育为目的的自我记录，数据是从相关论坛上获取的发帖内容，研究方法为人工选词进行数据筛选，然后人工进行语句情绪分类。	
发现：	
- 本文发现以生育为目的的自我记录中，数据和用户情绪的关系可以分为五种:积极、负担、困扰、受困、放弃。这五种不同的关系分别有一些对应的情绪，也会使用户做出一些特定的行为。	
- 本文也揭示了一些自我记录会对用户的情绪产生的严重负面影响，比如不透明的标准会让人觉得自己不正常，同时也根据这些情绪产生的原因对现代自我记录产品的设计提出了一些建议	
- 本文更深层次地讨论和挖掘了自我记录和情绪的这种关系在社会层面、文化层面的原因和影响	


#### 49. {Cunha_successful_community_www19} Cunha, Tiago, et al. "Are All Successful Communities Alike? Characterizing and Predicting the Success of Online Communities." The World Wide Web Conference. ACM, 2019.	
- 本论文研究网络社区创立初期社区属性和用户行为对社区未来成功的影响。首先定义了四种成功的度量方法，并进行量化，分析了其中相关性。接着选择六类社区创立初期的特征。然后针对不同规模、不同度量方法下的社区特征预测模型进行实验，分析实验结果。最后说明了实验中的不足和基于实验结果给予社区成员的启示。 	
- 发现： 	
    - 1）度量社区成功的准则是多维的，本文中定义如下方法： 成员数量增长、成员保留情况、社区长期存活、社区活动量。 这些方法间相关度不高，表明每一个度量方法都把握了社区成功的一个维度。 	
    - 2）实验研究用户组成、用户行为、社区活动的规模频率、语言风格、活动分布等特征对社区成功的影响，特征汇总后的模型的性能优于任何单个特征的模型性能，表明这些特征对社区成功都有预测性。其中，活动分布出现在所有不同的成功度量方法下最具预测性的因素中。 	
    - 3）模型对于K的不同取值变化不大，表明一个社区创立初期，它的特征即可预测未来的成功。	


#### 50. {Mackenzie_email_refind_www19} Mackenzie J, Gupta K, Qiao F, et al. Exploring User Behavior in Email Re-Finding Tasks[C]//The World Wide Web Conference. ACM, 2019: 1245-1255.	
- 本论文研究的是电子邮件中用户重新查找邮件时的行为，首先提出了一个框架在众包的环境下通过模拟用户查找邮件任务获得了真实的邮件数据和用户行为，然后分析不同的邮件排名方法、邮件属性和搜索质量中的用户行为。	
- 发现：	
    - 基于相关性的排名方法的MRR明显高于按时间的排名方法，但两种方法对用户行为的影响并不大。按时间的排名方法在查找旧邮件时比较困难，用户在决定什么时候放弃SERP会做得更好。混合的排名方法中，有些用户会忽略或浏览目标邮件之外的内容。	
    - 用户重新修改查询内容的规律与web搜索类似，但是修改策略会有差别。	
    - 重要的电子邮件更容易被找到，成功的时间更少，搜索次数更低。人工还是机器生成的邮件不会影响被找到的成功率。	
    - 用户行为与搜索结果的质量密切相关，质量降低，用户成功的时间就越长，搜索更频繁，并且更频繁地放弃每个SERP。	



#### 51. {Ibosiola_complaint_www19} Ibosiola, Damilola, et al. "Who watches the watchmen: Exploring complaints on the web." The World Wide Web Conference. ACM, 2019.	
- 此文分析了对投诉者、投诉的对象、投诉的种类、以及投诉发出后哪些域名的变化，例如排名、是否撤下进行了分析。	
- 发现:	
    - DMCA投诉占数据集的98.6% 。同时一些小众的投诉只占数据集的0.001%，但它们覆盖了20%以上的被投诉者。	
    - 前10%的投诉覆盖了超过10亿个url，剩下的90%只有55万URL。同时活跃的投诉者主要是版权执法机构和贸易组织为主。而偶尔的投诉者主要由小型机构和私营机构组成	
    - 投诉人对单一类别有明显偏好，体现了投诉具有专业性。	
    - 投诉最多的域名(投诉url数量最多的1%)占所有投诉的63%。	
    - 非法网站及钓鱼网站更容易受到投诉。	
    - 22%的网址在作者观察到投诉后的四周内无法访问。	



#### 52. {mental_well_being_www17} Mobile Sensing at the Service of Mental Well-being: a Large-scale Longitudinal Study.WWW17	
- 目的：探究手机监测数据和用户心情之间的联系	
- 贡献:	
    1. 提取特征，从传感器和通话短信记录中提取人们的日常信息	
    2. 分析相关性，分析日常特征与用户心理特性的相关性，用p值检测	
    3. 模型预测，用DNN模型采取日常特征预测用户的心情，发现准确率可达69%	
- 发现：	
    - 从手机传感器中收集的数据和用户的心理状态和心情都有很强的联系，这点有助于后续开发帮助用户掌控即刻心情的心情	


#### 53. {private_www17} How Public Is My Private Life? Privacy in Online Dating. WWW17	
- 目的：研究网上约会软件中用户隐私问题	
- 方法：1）调查 2）用户界面(profile)分析 3）半结构化采访	
- 发现：	
    1. 网上约会软件中存在的危险	
    不舒适的感受、无法预期的信息泄露、诈骗/机器人/伪装身份的人、网络追踪	
    2. 用户被发现性	
    绑定其他账号、透露学校/职业信息、姓名等更罕见 都会增加被发现的可能	
    男女性、城市间并无较大差异	
- 建议：	
    1. 限制拍摄屏幕快照，或提示被截屏的另一方	
    2. 帮助用户控制透露的个人信息	
    3. 平衡会员与普通用户间隐私不对称	



#### 54. {return_explore_www19} To Return or to Explore: Modelling Human Mobility and Dynamics in Cyberspace. WWW19	
- 目的：研究网络空间中人类活动轨迹，发现并理解用户在在线社区中迁移时遵循的底层规律。	
- 方法：将用户在社区之间的迁移活动分为return和exploration两种形式，分别建模分析。	
- 发现：网络和物理空间都遵循着一个相似的“优先原则”：随着时间的推移，人们访问新社区/地点的可能性降低，越来越多地访问他们喜欢的社区/地点。在探索新社区的过程中，人们逐渐失去了对新类别的社区的兴趣，越来越多地探索自己喜欢的社区群体。	



#### 55. {Ibosiola_complaint_www19} Ibosiola, Damilola, et al. "Who watches the watchmen: Exploring complaints on the web." The World Wide Web Conference. ACM, 2019.	
- This paper sheds critical light on how complaints are issued, who they pertain to and which domains go offline after complaints are issued	
- Findings:	
    - DMCA notices, with force, make up 98.6% (1.05B URLs) of the dataset. While a number of less popular complaints make up less than 0.001% of the dataset, they cover more than 20% of the recipients.	
    - The top 10% of notice senders report over 1 billion URLs, in stark contrast to just 550K by the bottom 90%. And the active senders are dominated by copyright enforcement and trade organizations. while the occasional senders are predominantly made up of small organizations and private entities.	
    - complainants exhibit a significant bias towards a single category.	
    - the most reported domains (the top 1% by the number of reported URLs) receive 63% of all complaints.	
    - illegal websites and phishing sites are more likely to have complained.	
    - Many domain names are soon taken offline and 22% of the URLs are inaccessible within just 4 weeks of us observing the complaints.	


- 此文分析了对投诉者、投诉的对象、投诉的种类、以及投诉发出后哪些域名的变化，例如排名、是否撤下进行了分析。	
- 发现:	
    - DMCA投诉占数据集的98.6% 。同时一些小众的投诉只占数据集的0.001%，但它们覆盖了20%以上的被投诉者。	
    - 前10%的投诉覆盖了超过10亿个url，剩下的90%只有55万URL。同时活跃的投诉者主要是版权执法机构和贸易组织为主。而偶尔的投诉者主要由小型机构和私营机构组成	
    - 投诉人对单一类别有明显偏好，体现了投诉具有专业性。	
    - 投诉最多的域名(投诉url数量最多的1%)占所有投诉的63%。	
    - 非法网站及钓鱼网站更容易受到投诉。	
    - 22%的网址在作者观察到投诉后的四周内无法访问。	

#### 56. {Ma_trust_facebook_CHI19} Xiao Ma, et al. "When Do People Trust Their Social Groups?" CHI 2019	
1. 人们信任组织的相关因素有：	
    1. 个体差异	
    2. 组织的成员数量，紧密程度，成立时间，同质性	
    3. 组织的网络结构（friendship-network structure）和你在网络中的位置	
2. 模型特征贡献度：网络结构特征 > 个体信任倾向性 > 组织活跃度	
4. 未来工作: 文化差异，地理或社会经济地位，匿名性，心理安全感，归属感，位置信息	

#### 57. {LBSN_hypergraph_www19} Dingqi, Yang, et al. Revisiting user mobility and social relationships in lbsns: a hypergraph embedding approach. WWW'19	
Contributions:	
This paper proposes a hypergraph embedding approach named LBSN2Vec to learn node embeddings from users' social relationships and users' check-ins at the same time. LBSN2Vec first uses random-walk with-stay scheme to sample user nodes in social domain and a set of hyperedges(check-ins) from the corresponding user. Then it learns node embeddings by preserving the n-wise node proximity by maximizing the similarity between the nodes of a hypergraph and their best-fit-line under cosine similarity. The paper conducts a rigorous empirical analysis of the impact of user mobility and social network on each other. It proofs that four data domains (social, spatial, temporal, and semantic) all have impact on friendship and location prediction tasks. And it finally applys LBSN2Vec to friendship and location prediction tasks.	
Dataset(public):	
The dataset includes check-ins data from foursquare and user social relationships, two snapshots of the corresponding usersocial network before and after the check-in data collection period.	



#### 58. {NBA_CSCW18} Zhang, Jason Shuo, Chenhao Tan, and Qin Lv. "This is why we play: Characterizing Online Fan Communities of the NBA Teams." CSCW 2018	



#### 59. {stuCheckin_KDD18} Hang, Mengyue, Ian Pytlarz, and Jennifer Neville. "Exploring student check-in behavior for improved point-of-interest prediction." KDD 2018	
This paper proposed a novel network-based embedding method called Embedding for Dense Heterogeneous Graphs (EDHG) and evaluate the effectiveness of EDHG using POI prediction and friend suggestion tasks. 	
Dataset:	
This paper's dataset are from the education “check-in” data using WiFi access logs collected at Purdue University. This check-in data are more dense and passively recorded, including more prosaic aspects of people’s lives is sparse.	
Method:	
A weighted Heterogeneous graph is built upon the dataset,including four types of nodes. Then this paper uses a graph embedding method based on skip-gram model and adapt negative sampling according to the global knowledge of the dataset.They evaluate this model through POI prediction and friend suggestion tasks, finding it outperforms other state-of-the-art methods.	


#### 60. {Hashtag_www17} Y Zhang, Language in Our Time: An Empirical Analysis of Hashtags. WWW'17	
This paper studies the problem of hashtags sharing from three different dimensions including the temporal-spatial dimension, the semantic dimension, and the social dimension. 	

Contribution:	
1. They perform the first large-scale empirical analysis of hashtags shared on Instagram.	
2. They show that people in all the three datasets tend to share fewer hashtags at certain types of places, such as bars, while more at other types of places, e.g., parks.	
3. They measure a hashtag’s semantic displacement between two consecutive years as the distance between its two vectors trained at those years(skip-gram). Evaluation shows that a non-negligible proportion (more than 10%) of hashtags indeed shift their meanings to a large extent.	
4. They perform a friendship prediction task solely based on hashtags and experiment results show that their approach achieves an effective prediction with AUC (area under the ROC curve) above 0.8 in all the three datasets, and outperforms several baseline models by 20%.	



#### 61. {name_reuse_www17} Mariconti, Enrico, et al. "What's in a Name?: Understanding Profile Name Reuse on Twitter." www 2017.	
This paper deals with a problem about profile names reusing on twitter. By analyzing the characteristics of name reusing accounts and its general behaviors, the authors find it is common that people reuse freed profile names in some social network platforms, both malicious or not. 	

Data Set: 1% random sample of all public	

tweets posted on Twitter over a period of six months, between October 10, 2015 and April 12, 2016	

Contribution:	

- 1% of popular Twitter accounts abandoned their profile name between 2015 and 2016 and	
  had it taken over by a third party; two case studies in which abandoned profile names are used to spread malicious content or to ridicule the original owner.	
- 196,200 accounts partaking in this practice, which shared 106,935 profile names over a period of six months. Showing that accounts that take over abandoned profile names are more likely than regular Twitter accounts to post malicious content and get suspended by Twitter.	
- Showing that Twitter is not the only social network allowing profile name reuse, but that Tumblr and Pinterest allow this practice too.	

#### 62. {understanding_ubicomp17} Mehrotra, Abhinav, et al. "Understanding the role of places and activities on mobile phone interaction and usage patterns." UbiComp 2017	
Contributions:	
This paper conducts an in-situ study investigating how the fine-grained contextual factors affects users' interactions with notifications and smartphone usage patterns. External factors such as location type, daily activity and location characteristic and their influences on users' attentiveness and receptivity to notification are discussed in this paper in detail.	
Dataset:	
26 UK university students, 2 weeks, 36,106 notications, 17,680 instances of application usage, 77,306 location samples, and 487 days of daily activity entries	
Method:	
This paper mainly uses some statistic tests and data visualization , such as ANOVA tests and  Turkey post-hoc test ,to see if one external factor has significant influence on results.	
Future Work:	
They plan to recuit more volunteers from different demographics to test if the results are general.	


#### 63. {what_is_public_cscw17} Fiesler, Casey, et al. "What (or who) is public?: Privacy settings and social media content sharing." CSCW 2017	
Contributions:	
This paper found that the content types or topics are similar between public and non-public posts on Facebook. From both people-focused and content-focused perspectives, it predicts the patterns of privacy settings. The content type is not a significant predictor but some demographics can predict privacy settings.	
Dataset:	
1815 participants from Mechanical Turk, 10890 posts (9000 in public dataset)	
Method:	
Characterize Facebook content and create a codebook. Use regression techniques to model the relationship between factors and privacy settings.	
Future work:	
1. Consider network size in more detail.	
2. Collect a dataset of users who joined after the change in account default for new users and investigate what percent leave the new (friends only) default unchanged for all posts.	
3. Examine if privacy settings change due to content shifts over time.	


#### 64. {Urban_Migrants_www18} Yang, Yang, et al. "To Stay or to Leave: Churn Prediction for Urban Migrants in the Initial Period." WWW 2018.	

Contribution:	

This paper deals with the problem of migrants loss in the big city of China, taking Shanghai as the base to set up the whole experiment. The authors tried to figure out why some new migrants leave from Shanghai after settling down in a few weeks, mainly from four aspects: Ego network properties, Call Behavior, Geographical Patterns , Housing Price Information. 	

It is found that:	

1. some behavior patterns of staying migrants evolve towards locals over time as new migrants integrate into a new city.	
2.  New migrants who manage to stay tend to develop diverse connections, move around the city in less expensive housing areas in the first weeks, compared to leaving migrants. 	

After evaluating these features, the author formulate a churn prediction problem to determine: 1. whether  a person is a new migrant or not   2.  whether a migrant is going to leave based on her behavior in the first few days	

It turns out that these features do work well in both prediction using several kinds of classifiers, of which RF classifier works best because non-linear computation is important in terms of this problem. Surprisingly, when using the same features, the classifier trained from only the first few days is already as good as the classifier trained using full data, which emphasize the feature importance.	




#### 65. {destination_prediction_UbiComp18} Imai, Ryo, et al. "Early Destination Prediction with Spatio-temporal User Behavior Patterns." UbiComp 2018	

Contribution:	
    This paper proposed a new model which combines two conventional models used for early destination prediction.The proposed model fully leverage the user context and trajectories to narraw down the destination candidates. In the experiments using 1.6K users locations log, the proposed model achieves better performance in the trip's early stage than conventional ones.	

Dataset:	
1.6K users GPS logs on YAHOO!Japan	
Innovations:	
1. devide the conventional destination methods into two categories, trajectories traking and Next Place Prediction	
2. mathematically factorize prediction task into two basic model, avoiding unnecessary work	



#### 66. {anyone_troll_cscw17} Cheng, Justin, et al. "Anyone can become a troll: Causes of trolling behavior in online discussions." CSCW 2017.	
- Main idea: Trolling is situational and ordinary people can be a troll. Both negative mood and seeing troll posts by others signiﬁcantly increases the probability of a user trolling. And trolling can be contagious.	
Data: 16 million posts on CNN.com.	
- Method: online experiment (complete a quiz, then participate in a discussion) + observational study + a predictive model of how trolling spreads (three sets of features: mood, context, or user-speciﬁc)	
- Findings:	
    1. Trolling is not only caused by particularly antisocial individuals but also ordinary people under the right circumstances.	
    2. A user's propensity to troll rises and falpopulation level mood shifts throughout the day.	
    3. Trolling behavior can be mainly explained by the discussion's context.	
    4. Trolling behavior can also spread from person to person in discussions and persist across them to spread further in the community.	


#### 67. {ne-natcom18} Wang, Bo, et al. "Network Enhancement: a general method to denoise weighted biological networks." arXiv preprint arXiv:1805.03327 (2018).	
- __Contribution:__This paper propose Network Enhancement (NE), a method for improving the signal to noise ratio of undirected, weighted networks. Experimental results show the protential of NE to Denise biological networks.	

- __Advantages:_	
    1. NE denoises the input by down weighting small eigenvalues more aggressively than large eigenvalues(less sensitive to hyper-parameters);	
    2. NE improves human tissue networks for gene-function prediction;	
    3. NE improves Hi-C networks for domain identification ;	
    4. NE improves fine-grained species identification;. 	


#### 68. {Couchsurfing_Aribnb_CSCW18} KLEIN M, ZHAO J, NI J, JOHNSON I, HILL BM, ZHU H. Quality Standards, Service Orientation, and Power in Airbnb and Couchsurfing. CSCW, 2017	
> **The main idea:** 	
Distinguish social-based and money-based network from three aspects. The three aspects are 1)perceived standard, emphasis on person or place and dominant power.	
> **Method:** 	
1. Grounded theory analysis of interviews.	
2. Quantitative analysis of public data in US.	
> **Findings:** 	
1.1 Cities will have more homes that reach the “Airbnb standards” and thus more Airbnb hosts per capita.	
1.2 The rate of hosts per capita in Couchsur�ng will be negative related to a city’s wealth.	
2.1 Airbnb users mix their focus more equally on people and place.	
2.2 On Couchsur�ng a greater emphasis is placed on people.	
3.1 Airbnb is guest-centric.	
3.2 Couchsur�ng is host-centric.	
> **Implication:** 	
Promote such theory to other money v.s. non-money market. (such as BlaBlaCar v.s. Carpool)	
> **Manuscript Note:** [manuscript-couchsurfing_airbnb_CSCW18.pdf](https://github.com/NullAerber/paper_wiki/blob/master/manuscript-couchsurfing_airbnb_CSCW18.pdf)	



#### 69. {patterns_online_discussion_cscw18} Zhang, Justine, et al. "Characterizing Online Public Discussions through Patterns of Participant Interactions." CSCW 2018	
- **Contributions :**  This paper first proposes a framework to characterize public discussions in terms of the interaction patterns. The framework construct a representation of discussion structure and drive features from this representation. Then the framework is applied to study Facebook public discussions. It is also used to forecast the future trajectory of a discussion (predict thread growth or future antisocial actions). Finally, it study the variation in discussions among thousands of Facebook sub-communities and analyze factors behind the variation.	

> **Innovations :** 	
1. It extends the reply-tree model proposed in prior work to a new model named a hypergraph representation. Beyond representing individual comments and replies, it also represents participants and their relationships.	
2. It extracts 454 features of a discussion from its hypergraph-based representation.	
3. When forecasting the future trajectory of a discussion, it introduces two new tasks: (a) blocking-related task; (b) commenter-growth task.	
4. Without predefining the axes of variation when exploring the different types of discussions that arise in an online public space.	

#### 70. {App_Give_Away_UbiComp18} Tu, Zhen, et al. "Your apps give you away: distinguishing mobile users by their app usage fingerprints." Ubicomp 2018.	
> **Contribution:**	
This paper focus recognizing the uniqueness of app usage behavior and the impact of other factors , such as app set, spatiotemporal app usage fingerprints and user attrubutes. Results show that the app usage fingerprints are highly unique thus requiring more protection.	
> **Innovation** 	
1. Large-scale dataset and social information collecting method(through Sina Weibo)	
2. The selected features, including app set and spatiotemporal features , are representative.	
3. Considering different granularity of the feature makes their work more convincing.	
4. Measurement of social acitivity and mobility pattern are simple and easy to understand, suitable for first-step analysis.	
```	
问题：识别基于大量人口的app使用数据中的独特性（识别不同用户）	
动机：用用户的移动网络使用记录识别用户身份的工作很多，比如用移动模型、网页浏览记录、手机传感器数据等	
    但是一直缺少对于基于大量人口的app使用数据中隐私泄露上限的研究，因为	
    1. 大量人口的app使用数据缺乏获取渠道，研究人员的数据集一般为少量志愿者提供	
    2. app使用的时间和地点数据也很重要，但这些数据更难取得	
    本篇工作的数据集来自中国的一大移动数据运营商，包括上海一个星期的所有数据，解决了上述问题	
    其中app的名称是根据http请求的域名分辨出来的	
    且提供方ISP根据用户的新浪微博账号获取了一些用户的人口统计学信息，比如性别，位置，粉丝数和关注数	
方法：量化了用户身份的独特性，表示用户隐私泄露的可能性大小	
        探究各种指标和用户身份独特性的关系	
分析：	
    1. 探究app使用集合与用户独特性的关系	
        用户独特性和app使用集合有很大关系，88%的用户可以被任意4个app识别	
        工作日的app使用独特性更高，周末的独特性更低	
        任意集合的app比使用评率高的集合识别率更高	
    2. app使用空间和时间特点和用户独特性的关系	
        通过细粒度的时空特点，80%的用户可以通过任意3条记录被识别	
        结合app使用和时空特点，用户独特性被极大增强，通过2条记录一半的用户就可以被识别	
    3.不同用户群体对于用户独特性的影响	
        1. 性别	
            男性比女性用户独特性更高，更有可能使用不同的app集合	
        2.社交活跃度（粉丝数和关注数，发帖数）	
            社交活跃度更低的用户独特性更高	
        3. 移动模型（市区/郊区，活动范围大/小）	
            郊区的用户独特性更高	
            活动范围更小的用户独特性更高	
未来工作：	
    1. 设计隐私保护模型，以保护此类大型app使用数据集中用户的隐私并确保数据集的可用性	
    2. 拓展数据集的范围，此数据集仅是一个ISP的数据，不包括通过WiFi使用、不联网、其他ISP的app使用数据，所以并不全面	
贡献: 	
    这篇文章的主要贡献在于分析了大量人口的app使用数据的独特性与多种因素的联系	
    并得出结论，通过app使用集合、时空信息和用户属性信息结合，在app使用数据中用户独特性非常高	
    因此此类数据极易受到重新识别攻击，急切需要隐私保护模型来保护隐私	
```	

#### 71. {Trajectory_Recovery_www17}Xu, Fengli, et al. "Trajectory recovery from ash: User privacy is not preserved in aggregated mobility data." www, 2017.	
> **The main idea:** This paper recognizes a novel privacy problem in publishing mobility data and proves that even publishing aggregated mobility data could lead to a privacy breach in individuals' trajectories.	
> **Innovation** 	
1. They have two key findings:	
    1) Each user has a coherent mobility trajectory.	
    2) Individual mobility is significantly different across different users, and most of them are unique.	
2. They design different cost matrix for nighttime, daytime and across days	
3. Experimental results on two real datasets show good performance by using their methods.	
4. They evaluate the impact of different factors like spatial resolution, temporal resolution and number of users. 	
5. Discuss potential mitigation solutions like generalization and perturbation.	



#### 72. {Motivations_Check-ins_CSCW18} Xu, F., Zhang, G., Chen, Z.et al. Understanding Motivations behind Inaccurate Check-ins. CSCW'18	
> **The main idea:** Find the motivations behind inaccurate check-ins.	
> **Innovation** 	
> 1. Four types of check-ins: real, nearby, delay, fake.	
> 2. Propose four types of Hypothesises. 	
#### 73. {PackLoc_UbiComp18} Cherian, Jim, Jun Luo, and Shen-Shyang Ho. "ParkLoc: Light-weight Graph-based Vehicular Localization in Parking Garages." UbiComp'18.	
> **The main idea:** A Light-weight Graph-based Vehicular Localization in Parking Garages.	
> **Normal Question in before Paper:** 	
> 1. In underground parking lots， WIFI, GPS will reduce the function ablity.	
> 2. Some device is to0 expensive.	
> **Innovation:** 	
> 1. adopts the popular GraphSLAM algorithm from robotics research to get the location in a known graph.	
> 2. a trained model to create the lots map automaticity.	

#### 74. {Sybil_user_review_ndss18} Zheng, Haizhong, et al. "Smoke screener or straight shooter: Detecting elite sybil attacks in user-review social networks." NDSS18.	
> **The main idea:** Detecting Elite Sybil Attacks in User-Review Social Networks.	
> **Innovation:** 	
> 1. Define the elite Sybil attacks (精英恶意账号）	
> 2. The model to detect those accounts.	

#### 75. {DRN_www18} Zhao, Xiangyu, et al. "Deep reinforcement learning for page-wise recommendations." www, 2018.	
> **The main idea:** engage the Dueling-Double-DQN (a type of DeepLearning) to news recommendations.	
> **Normal Question in before Paper:** 	
> 1. 难以处理新闻推荐的动态变化。这种动态变化体现在两个方面，首先新闻具有很强的时效性，其次是用户对于新闻阅读的兴趣是不断变化的。	
> 1. 当前的推荐算法通常只考虑用户的点击／未点击 或者 用户的评分作为反馈，然而，用户隔多久会再次使用服务也能在一定程度上反映用户对推荐结果的满意度。	
> 1. 目前的推荐系统倾向于推荐用户重复或相似内容的东西，这也许会降低用户在同一个主题上的兴趣度。因此需要进行exploration/surprise。传统方法 e -greedy strategy 或者 Upper Con dence Bound (UCB) 都会在短期对推荐系统的效果造成一定的影响，需要更有效的exploration策略。	
> **Innovation:**	
> 1. 使用DQN网络来有效建模新闻推荐的动态变化属性，DQN可以将短期回报和长期回报进行有效的模拟。	
> 1. 将用户活跃度（activeness score）作为一种新的反馈信息，用户活跃度在后面会详细介绍。	
> 1. 使用Dueling Bandit Gradient Descent方法来进行有效的exploration/surprise。	


#### 76. {surprise_model_CHI18} Niu, Xi, et al. "Surprise me if you can: Serendipity in health information." CHI, 2018.	
> **The main idea:** talk about the concept of a computational model of surprise and the experiment about this theory.	
> **Innovation:** a new area: computational surprise model.