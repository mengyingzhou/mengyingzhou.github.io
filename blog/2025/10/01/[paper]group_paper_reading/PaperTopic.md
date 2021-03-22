# 1. Outline
<!-- TOC -->

- [1. Outline](#1-outline)
- [2. 用户行为（User Behavior）](#2-用户行为user-behavior)
  - [2.1. 采纳](#21-采纳)
    - [2.1.1. Incentive](#211-incentive)
    - [2.1.2. Reminder](#212-reminder)
  - [2.2. 忠诚](#22-忠诚)
    - [2.2.1. Retention](#221-retention)
    - [2.2.2. Habit](#222-habit)
  - [2.3. 内容创建行为](#23-内容创建行为)
  - [2.4. 社区特征](#24-社区特征)
  - [2.5. 群体智能](#25-群体智能)
  - [2.6. 群体极化](#26-群体极化)
  - [2.7. 群体行为](#27-群体行为)
    - [2.7.1. HashTag](#271-hashtag)
  - [2.8. 社交强度(Tie Strength)](#28-社交强度tie-strength)
- [3. 网络结构与演化（structure and evolution）](#3-网络结构与演化structure-and-evolution)
  - [3.1. Structure](#31-structure)
  - [3.2. Evolution](#32-evolution)
- [4. 虚拟网络和现实网络（online and  offline）](#4-虚拟网络和现实网络online-and-offline)
  - [4.1. Share Economy](#41-share-economy)
  - [4.2. LBSN (Location Based Social Network)](#42-lbsn-location-based-social-network)
  - [4.3. City Computing](#43-city-computing)
  - [4.4. Gamification](#44-gamification)
- [5. 安全（Security）](#5-安全security)
  - [5.1. health](#51-health)
  - [5.2. emergency](#52-emergency)
  - [5.3. cyber](#53-cyber)
- [6. 信息融合（Information Fusion）](#6-信息融合information-fusion)
  - [6.1. cross-site](#61-cross-site)
  - [6.2. multi-input](#62-multi-input)
- [7. 信息与传播（Information and Spreading）](#7-信息与传播information-and-spreading)
  - [7.1. 信息](#71-信息)
    - [7.1.1. 信息价值](#711-信息价值)
    - [7.1.2. 社会化检索](#712-社会化检索)
    - [7.1.3. 分类](#713-分类)
    - [7.1.4. 社会化推荐](#714-社会化推荐)
  - [7.2. 传播](#72-传播)
  - [7.3. 主题与观点(Topic and Opinion)](#73-主题与观点topic-and-opinion)
    - [7.3.1. Topic](#731-topic)
    - [7.3.2. Opinion](#732-opinion)
- [8. 图神经网络（graph based machine learning）](#8-图神经网络graph-based-machine-learning)
  - [8.1. network representation learning（NRL）](#81-network-representation-learningnrl)
  - [8.2. network embedding （NE）](#82-network-embedding-ne)
- [9. 分析方法（Analysis Method）](#9-分析方法analysis-method)
- [10. 数学机理（Mathematics）](#10-数学机理mathematics)
- [11. 现实网络系统搭建](#11-现实网络系统搭建)
  - [11.1. load balancing](#111-load-balancing)
  - [11.2. measurement for QoS](#112-measurement-for-qos)
  - [11.3. measure_tool](#113-measure_tool)
  - [11.4. MLforNet](#114-mlfornet)
  - [11.5. Security](#115-security)
  - [11.6. Service center](#116-service-center)
  - [11.7. protocol](#117-protocol)
  - [11.8. flow_data](#118-flow_data)
  - [11.9. CDN](#119-cdn)
  - [11.10. schedule](#1110-schedule)
  - [11.11. routing](#1111-routing)
  - [11.12. QoS](#1112-qos)
  - [11.13. others](#1113-others)

<!-- /TOC -->



# 2. 用户行为（User Behavior）
## 2.1. 采纳
### 2.1.1. Incentive
#### 2.1.1.1. {online_offline_impact_WSDM17} Althoff T, Jindal P, Leskovec J, et al. Online Actions with Offline Impact: How Online Social Networks Influence Online and Offline User Behavior[C]. WSDM, 2017 
- [Detailed]
- social influence (55%) v.s. intrinsic motivation (45%)
- joining a social network benifit users' activity level, retention and engagement.
- sender (more influence) v.s. receiver
- incentive weaken along with more connections added


#### 2.1.1.2. {gym_financial_incentive} Rohde K I M , Verbeke W . We like to see you in the gym—A field experiment on financial incentives for short and long-term gym attendance[J]. Journal of Economic Behavior & Organization, 2017, 134:388-407.
- The results infer the non-persistence.


#### 2.1.1.3. {Monetary_incentive} Jennifer Dykema, Using Monetary and Nonmonetary Incentives to Increase Response Rates among African-Americans in Wisconsin PRAMS, Springer 2012.
- money > coupon > no incentive



#### 2.1.1.4. {washhand} Reshmaan Hussam, Atonu Rabbani, Giovanni Reggiani, and Natalia Rigol, Habit Formation and Rational Addiction: A Field Experiment in Handwashing, Harvard, 2017
- The completion: Triple reward > standard reward.
- The willingness to buy: triple reward < standard reward.



#### 2.1.1.5. {incentives_on_milk} List J A , Samek A S . A Field Experiment on the Impact of Incentives on Milk Choice in the Lunchroom[J]. Social Science Electronic Publishing, 2015, 3(9):16-20.
- cheating in the experiment.



#### 2.1.1.6. {fish_ubicomp06} James J. Lin, Lena Mamykina, Silvia Lindtner, Gregory Delajoux, and Henry B. Strub, Fish’n’Steps: Encouraging Physical Activity with an Interactive Computer Game, UBIComp 2016.

### 2.1.2. Reminder
#### 2.1.2.1. {social_norm-PLoS_one17} Silva A, John P, Social norms don’t always work: An experiment to encourage more efficient fees collection for students. PLoS, 2017
- Reminder encourages rapidly in a short time.
    


#### 2.1.2.2. {habit_and_change} Lucas Carden and Wendy Wood, Habit formation and change, Current Opinion in Behavioral Sciences 2018, 20:117–122
- reminder effective in short-term, but impede in long-term.
- reminder help repeat deliberately. But habit formation end with unconscious
    

#### 2.1.2.3. {selftracking_and_reminder_CHI15} Stawarz K, Cox A L, Blandford A. Beyond Self-Tracking and Reminders: Designing Smartphone Apps That Support Habit Formation[C]// Acm Conference on Human Factors in Computing Systems. 2015.
- event-based trigger or context reminder based on sensors.
    
#### 2.1.2.4. {pills}Stawarz K, Cox A L, Blandford A. Don't forget your pill!: designing effective medication reminder apps that support users' daily routines[J].
- "I will do XXX after eating breakfast"
    
## 2.2. 忠诚   
### 2.2.1. Retention
#### 2.2.1.1. {Yang_Interpretable_KDD18} Carl Yang, Xiaolin Shi, Jie Luo, and Jiawei Han. “I know you’ll be back: Interpretable new user clustering and churn prediction on a mobile social application.” In Proc. of KDD, 914–922.2018
- 用户聚类对于user churn prediction的帮助
- ClusChurn，两阶段框架
     - 首先进行用户聚类，且对于聚类的用户类型的解释也十分合理
     - 基于用户聚类的Parallel sub-LSTM模型
- 构建sub-LSTM对于提升性能有很大的提升（基于我们的数据可以提高10%）
- 文章的写作很具有逻辑，每一个challenge都有一个对应的解决方法或者对应点。

#### 2.2.1.2. {Bhagat_buy_again_kdd18} Rahul Bhagat, Alex Lobzhanidze, Srevatsan Muralidharan, and Shankar Vishwanath. “Buy it again: Modeling repeat purchase recommendations.” In Proceedings of the ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, 62–70.2018
- 本文主要通过将“购买周期”、“商品重复购买率”、“商品对于某用户的重复购买次数”、“上次购买的时间延迟”等信息构建了四种侧重点不同的repeat purchase model。
- 提供了现有对于repeat purchase行为的量化模型
- 模型采用传统数学模型也达到了很好的效果


#### 2.2.1.3. {Wang_repeat_WWW19} Chenyang Wang, Min Zhang, Weizhi Ma, Yiqun Liu, and Shaoping Ma. “Modeling item-specific temporal dynamics of repeat consumption for recommender systems.” Proc. World Wide Web Conf. WWW 2019.
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

#### 2.2.1.4. {Ma_trust_facebook_CHI19} Xiao Ma, et al. "When Do People Trust Their Social Groups?" CHI 2019
1. people tend to trust the group related to:
    1. individual difference
    2. smaller, closed, older, more exclusive, or more homogeneous groups
    3. friendship-network structure and an individual’s position
2. network features > individual’s general attitude towards others > group activity features
3. Method: Survey -> quantification -> model -> factor contribution
4. Future Work: Cultural differences, geographyor socioeconomic status, anonymity, psychological safety, belonging, location

1. 人们信任组织的相关因素有：
    1. 个体差异
    2. 组织的成员数量，紧密程度，成立时间，同质性
    3. 组织的网络结构（friendship-network structure）和你在网络中的位置
2. 模型特征贡献度：网络结构特征 > 个体信任倾向性 > 组织活跃度
4. 未来工作: 文化差异，地理或社会经济地位，匿名性，心理安全感，归属感，位置信息

#### 2.2.1.5. {sense_belonging_habit_IJIM18}Qian L , Zhen S , Weiguo F . The impact of users’ sense of belonging on social media habit formation: Empirical evidence from social networking and microblogging websites in China[J]. International Journal of Information Management, 2018
- sense belonging contributes more than last using and frequency.

#### 2.2.1.6. {segmentation_retention_game-DSS'17}Fu X , Chen X , Shi Y T , et al. User segmentation for retention management in online social games[J]. Decision Support Systems, 2017
- classify users into five clusters
- different parts person has different retention methods


#### 2.2.1.7. {identity_icwsm17} Zhang J, Hamilton W L, Danescuniculescumizil C, et al. Community Identity and User Engagement in a Multi-Community Landscape.[C]. icwsm 2017
- A typology of community identity based on language-based formalization
- The communities with distinctive and dynamic identities have higher retention and engagement
- More distinctive, higher acculturation gap, more volatile comments. The opposite is true in generic communities.


#### 2.2.1.8. {habit_social_ties_economic_JBR11} Woisetschl Ger D M , Lentz P , Evanschitzky H . How habits, social ties, and economic switching barriers affect customer loyalty in contractual service settings[J]. Journal of Business Research, 2011
- The effect of using habit, social ties, and economic swithing barriers to loyalty/retention.



#### 2.2.1.9. {satisfaction_and_continued_use_SM_EJIS14} Hu T, Kettinger W, Poston R. The effect of online social value on satisfaction and continued use of social media. Eur J Inf Syst 2015;24(4):391–410.


#### 2.2.1.10. {longitudinal_study_Facebook_LinkedIn} Archambault A, Grudin J. A longitudinal study of Facebook, LinkedIn, & Twitter use. In: Proceedings of the SIGCHI Conference on Human Factors in Computing Systems, Austin, May 5–10, TX, USA, 2012, 2741–2750.


### 2.2.2. Habit
#### 2.2.2.1. {habit_formation_real_world_2010} Lally, Phillippa, et al. "How are habits formed: Modelling habit formation in the real world." European journal of social psychology 40.6 (2010): 998-1009.

#### 2.2.2.2. {Psychology of Habit-RoP16} Wood, Wendy, and Dennis Rünger. "Psychology of habit." Annual review of psychology 67 (2016): 289-314.

#### 2.2.2.3. {The Psychology of Habit} Piaget, Jean. The psychology of intelligence. Routledge, 2005.

#### 2.2.2.4. {用户生成内容激励机制研究综述及展望} 秦芬, and 李扬. "用户生成内容激励机制研究综述及展望." 外国经济与管理 2018 年 08 (2018): 141-152.


#### 2.2.2.5. {Motivation-ACR10} Hurkmans E J , Maes S , Gucht V D , et al. Motivation as a determinant of physical activity in patients with rheumatoid arthritis[J]. Arthritis Care & Research, 2010, 62(3):371-377.
- autonomous regulation means higher activity.
- coerced regulation needed to be been changed thinking and motivation.
    

#### 2.2.2.6. {habit_and_change} Lucas Carden and Wendy Wood, Habit formation and change, Current Opinion in Behavioral Sciences 2018, 20:117–122
- reminder help repeat deliberately. But habit formation end with unconscious


#### 2.2.2.7. {sm_usage_habit} Tao Hu, Thomas F. Stafford, William J. Kettinger, Xihui “Paul” Zhang & Hua Dai, Formation and Effect of Social Media Usage Habit, JCIS 2017.
- Expectation and satisfaction help form habit in social media.


## 2.3. 内容创建行为
#### 2.3.0.1. {Seering_Twitch_CSCW17} Joseph Seering, Robert E. Kraut, and Laura Dabbish. "Shaping pro and anti-social behavior on twitch through moderation and example-setting." Proc. of CSCW: 111–125. 2017.
- 分类：video stream; sybil detection; bot moderation;
- 这篇论文，研究了直播流视频网站Twitch上的用户行为。通过对于用户弹幕的分析，研究了视频浏览中某些用户对新用户的影响力、恶意用户对其他用户的影响力，利用机器人模拟用户发言对弹幕的引导以及该引导的持续时间。
    - 这篇文章以直播流的视频网站Twitch作为研究平台，收集了大量聊天窗口的数据，研究了用户行为，并根据用户行为提出了一种引导发言的方式。
    - 文章中将用户分成三种类别，并根据用户的发言记录和登录该频道的时间戳，利用逻辑回归等机器学习方法，分析了影响力的指标。主要的分析方向为弹幕对新进入该频道的新用户的影响，和老用户之间弹幕对于发言分类的影响。结果表明，弹幕对新用户的影响力很大，尤其是一些重要的发言者。
    - 文中通过分析上述重要发言者对于整个聊天窗环境的影响，提出了利用机器人模拟高影响力用户的发言，通过对于其他用户发言的影响和引导持续时间的研究，说明了该模拟发言的短时有效性，但是持续的影响效果小。
- 感想：这篇文章属于偏用户行为研究的视频流相关工作。这篇文章主要的亮点在于对视频流时序数据集的收集，这类聊天数据集有很强的时效性，所以选用比较简单的模型进行影响力分析和机器人模拟策略。尤其是机器人模拟发言，这在恶意用户检测中是一个很好地进一步工作，通过对冲发言减小恶意用户的影响力从而使得恶意用户不会带来太大影响。这个研究方面在之后强时效性的恶意用户检测工作上也可以考虑实现。同时，对于之后我们自己关于video stream的研究，如果能找到实时或者对应的聊天信息，也能作为辅助信息对video steam的指标进行研究和预测，或者反之使用video stream的测量指标对聊天信息进行预测。


#### 2.3.0.2. {Chen_Students_Experiences_TLT13} Chen, Xin, Mihaela Vorvoreanu, and Krishna Madhavan. "Mining social media data for understanding students’ learning experiences." IEEE Transactions on Learning Technologies 7.3 (2014): 246-259.
- how informal social media can provide insight into students' experience.
- educational problems 


#### 2.3.0.3. {Ibosiola_complaint_www19} Ibosiola, Damilola, et al. "Who watches the watchmen: Exploring complaints on the web." The World Wide Web Conference. ACM, 2019.
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

#### 2.3.0.4. {online_collection_www17} Lo, Caroline, Justin Cheng, and Jure Leskovec. "Understanding online collection growth over time: A case study of Pinterest." WWw17
- Motivation：Understanding how these collections grow over time is important for user retention and collection as well as item recommendation.
- Main contributions: 
    - The patterns whitin inter-event time and the interactions between inter-event time and break 
    - Initial board evolution is a strong signal for long-term board growth in terms of size and lifespan.
- two-component lognormal mixture model.

#### 2.3.0.5. {what_is_public_cscw17} Fiesler, Casey, et al. "What (or who) is public?: Privacy settings and social media content sharing." CSCW 2017
- [Group]
- This paper found that the content types or topics are similar between public and non-public posts on Facebook. From both people-focused and content-focused perspectives, it predicts the patterns of privacy settings. The content type is not a significant predictor but some demographics can predict privacy settings.



## 2.4. 社区特征
#### 2.4.0.1. {Agarwal_Identifying_WSDM08} Nitin Agarwal, Huan Liu, Lei Tang, and Philip S. Yu. "Identifying the influential bloggers in a community." Proc. of WSDM, 207–217. 2008.
- 分类：social network, feature engineering; community analysis; cross-link;
- 这篇文章，研究了不同博客网络中，对于社群中和社群之间的博客和博主影响关系。文中选取了多个的博客网站和用户社群，分不同的特征选取方式和评判方式建立了一个较为通用的基于统计和概率的分类模型，分析了不同社群的博客影响因素。同时，文中使用了案例分析分析了各种评判标准和参数的具体影响实例，同时验证了模型在四种场景下均满足鲁棒性。
    - 这篇文章要通过不同类型博客网络中的社群关系，分析社群内和社群之间的博客、博主影响关系。
    - 文中选取了多个类型不同的博客网站和对应的用户社群，分影响力、排名和活跃度进行社群分类，以内连接、外连接、评论、博客文本作为主要的特征提取，分析不同社群和不同特征对博主影响关系的影响。
    - 通过统计学和概率分类模型的研究，分析了社群内部和社群之间，高影响力的博客和博主对其他博客和博主的影响关系。文中的方法相比于之前的工作，能更有效地分析出博主的影响关系，尤其是跨站和跨社群的关系。
    - 案例分析辅助验证了该方法在实际数据中的有效性。同时，对于长期影响力、 平均影响力、不同站点的跨站影响力和新博客影响力的模型评估中，该模型的结果都表现优异，该方法的鲁棒性强。
- 感想：选择这篇文章的重要原因是，之前看到的一些关于影响力和跨站热分析的文章很多引用到这篇文章，这篇文章的引用量总体也比较高。文章的主要架构以问答为框架，对于实际情况和初步试验观察到的现象进行归类和分析，逐步将问题细化到不同分类标准、不同特征方案，这种思维和行文方式值得学习借鉴（现在的文章压缩这块篇幅，但是问答方式整个逻辑链可以有）。另外，案例分析的说明方式和鲁棒性的相关研究，都是值得学习的文章贡献加分项。



#### 2.4.0.2. {Gillani_echo_www18} Gillani, Nabeel, et al. "Me, my echo chamber, and I: Introspection on social media polarization." Proceedings of the 2018 World Wide Web Conference. International World Wide Web Conferences Steering Committee, 2018.
- Homophily — our tendency to surround ourselves with others who share our perspectives and opinions about the world
- Social Mirror: a social network visualization tool that enables a sample of Twitter users to explore the politically-active parts of their social network. 
- i) beliefs about their network connections, ii) the political diversity of who they choose to follow, and iii) the political alignment of the URLs they choose to share. 

#### 2.4.0.3. {NBA_CSCW18} Zhang, Jason Shuo, Chenhao Tan, and Qin Lv. "This is why we play: Characterizing Online Fan Communities of the NBA Teams." CSCW 2018
- [Group]


#### 2.4.0.4. {patterns_online_discussion_cscw18} Zhang, Justine, et al. "Characterizing Online Public Discussions through Patterns of Participant Interactions." CSCW 2018
- [Group]
- This paper first proposes a framework to characterize public discussions in terms of the interaction patterns.

## 2.5. 群体智能
#### 2.5.0.1. {Liu_CrowdGame_SIGMOD19} Liu, Tongyu, et al. "CrowdGame: A Game-Based Crowdsourcing System for Cost-Effective Data Labeling." Proceedings of the 2019 International Conference on Management of Data. ACM, 2019.
- using crowd wisdom by game without high expending.

#### 2.5.0.2. {Cheng_Flock_CSCW15} [69] Cheng, Justin, and Michael S. Bernstein. "Flock: Hybrid crowd-machine learning classifiers." Proceedings of the 18th ACM conference on computer supported cooperative work & social computing. ACM, 2015.
- improve on both algorithm performance and human judgment
- accomplish tasks where automated feature extraction is not yet feasible
- aggregating crowd features improves upon both asking the crowd for a direct prediction and off-the-shelf machine learning features by over 10%.


#### 2.5.0.3. {eBay_generate_review_www19} Novgorodov, Slava, et al. "Generating Product Descriptions from User Reviews." The World Wide Web Conference. ACM, 2019.
- LSTM-MTL
- LexRank
- sentences ordering, automatical K, abstractive approaches [13, 14], personalizing descriptions


#### 2.5.0.4. {Wang_quora_www13} Wang, Gang, et al. "Wisdom in the social crowd: an analysis of quora." Proceedings of the 22nd international conference on World Wide Web. ACM, 2013. WWW13
- challenge of keeping their content relevant, and making it easy for users to “find the signal in the noise”
- three different connection networks (or graphs) inside Quora
    - a graph connecting topics to users: Following the right topics can introduce users to valuable questions and answers
    - a social graph connecting users: These well-connected users also gain advantage by having more friends (followers) to answer their questions and upvote for their answers.
    - a graph connecting related questions: the spread of user views and answers within a small subset of questions. This bias is likely created by the social graph.


#### 2.5.0.5. {Wang_investing_CSCW15} Wang, Gang, et al. "Crowds on wall street: Extracting value from collaborative investing platforms." CSCW ACM, 2015.
- results suggest the wisdom of a “smaller, smarter crowd” can outperform a larger, more general crowd.
- the crowd can identify good work even when it is incapable of producing it directly. This suggests the design of an interaction-based “meta-reputation” system that would greatly assist users in their discovery of high quality content.
- four ranking authors metrics.




## 2.6. 群体极化
#### 2.6.0.1. Understanding Group Event Scheduling via the OutWithFriendz Mobile Application，Ubicomp2018
本文探讨了群体决策制定过程中相关的影响因素的特征和相应的影响，包括 个体移动轨迹、个体偏好、主办方偏好等相关特征，以自主开发的app收集到的聚会数据作为数据集进行相关特征的分析，得到了一系列的结论。
· 开发自己的app收集聚会数据，主要收集小型团体的投票过程数据，以及用户的轨迹数据
· 对数据集中的数据进行统计方法的分布分析，得到初步的观察结果
· 主要对影响群体决策的相关因素进行了分析，分为个体移动轨迹、个体偏好、主办方偏好三个方面，主要内容是对应的9个观察结论，采用方法为画图加统计学分析的方法

#### 2.6.0.2. {conflict_www18} Kumar, Srijan, et al. "Community interaction and conflict on the web." www, 2018. 
- [Detailed]
- __Question writing style to keep logic.__
- Analysis the three phases of mobilizations: initiation, interactions, impact. 
- Propose one LSTM model that combines graph embeddings, user. community and text features to create early-warning systems for community moderators to prevent conflicts.
- Important future work.


#### 2.6.0.3. {anyone_troll_cscw17} Cheng, Justin, et al. "Anyone can become a troll: Causes of trolling behavior in online discussions." CSCW 2017.
- [Group]
- Main idea: Trolling is situational and ordinary people can be a troll. Both negative mood and seeing troll posts by others signiﬁcantly increases the probability of a user trolling. And trolling can be contagious.
Data: 16 million posts on CNN.com.
- Method: online experiment (complete a quiz, then participate in a discussion) + observational study + a predictive model of how trolling spreads (three sets of features: mood, context, or user-speciﬁc)
- Findings:
    1. Trolling is not only caused by particularly antisocial individuals but also ordinary people under the right circumstances.
    2. A user's propensity to troll rises and falpopulation level mood shifts throughout the day.
    3. Trolling behavior can be mainly explained by the discussion's context.
    4. Trolling behavior can also spread from person to person in discussions and persist across them to spread further in the community.

## 2.7. 群体行为
#### 2.7.0.1. {Wu_Using_IJHCI20} Man Wu and Qin Gao. "Using Live Video Streaming in Online Tutoring: Exploring Factors Affecting Social Interaction." International Journal of Human-Computer Interaction 36, 10: 964–977. 2020.
- 分类：video stream; online tutoring; social patterns; live video;
- 这篇论文，研究了线上教育平台这一类比较独特的直播视频，详细分析了用户行为，建立了学生-教师，学生-学生两种关联，运用对网课高中生实际问卷的调研收集数据，并利用现有的社会关系研究结论构建了多个回归模型进行关联指数的预测，并提出网课中可以改进的方法。
    - 这篇文章以考虑了线上教育平台这类比较独特的视频直播。这类视频流的数据也是实时的，聊天记录时效性强的。    文中通过现有的社会关系研究结论，从影响力、参与度、社群结构等方面建立了学生-教师、学生-学生的关联关系，并进行详细的用户行为分析。
    - 通过对某类网课中的高中生进行详细的调研问卷分析，收集了大量真实的用户体验数据。对数据进行统计分析，证实了之前社会关系研究结论提出的假设。同时，文中构建了多个回归模型，预测每类社会关系指数，对于学生-教师，学生-学生关联的影响指数，从而分析学生网课学习的效率和效果。
    - 根据数据分析的结果，对现有的视频直播影响指数较大但直播平台未做到的提供了实用的改进意见。同时，文中恳切地对特征种类选取，数据收集偏差、改进结果验证等方面提出了文中方法的不足，并依次提出了大量未来工作的方向。
- 感想：这篇文章属于用户行为分析的直播视频流研究文章。文章最大的亮点为它研究领域“网课直播”研究较少，同时是在该方向第一个结合用户行为的数据调研的。一个值得学习的地方在于直播流视频研究中，存在很多不同类别的关联关系，而这类关联关系常常有很多类似的社会学研究，如这篇文章一样灵活利用跨学科的知识构建特征，往往可能获得重要特征。另外，文中对于存在不足详细分析从而提供未来的工作方向，会使得未来工作方向更有实践意义，也是一个可以学习借鉴的地方。


#### 2.7.0.2. {Yang_talent_ICDM19} Yuyang Ye, Hengshu Zhu, Tong Xu, Fuzhen Zhuang, Runlong Yu, and Hui Xiong. “Identifying high potential talent: A neural network based dynamic social profiling approach.” In Proc. of ICDM, 718–727.2019
- 识别高潜力的员工

#### 2.7.0.3. {mental_well_being_www17} Mobile Sensing at the Service of Mental Well-being: a Large-scale Longitudinal Study.WWW17
- 目的：探究手机监测数据和用户心情之间的联系
- 贡献:
    1. 提取特征，从传感器和通话短信记录中提取人们的日常信息
    2. 分析相关性，分析日常特征与用户心理特性的相关性，用p值检测
    3. 模型预测，用DNN模型采取日常特征预测用户的心情，发现准确率可达69%
- 发现：
    - 从手机传感器中收集的数据和用户的心理状态和心情都有很强的联系，这点有助于后续开发帮助用户掌控即刻心情的心情

#### 2.7.0.4. {Ibosiola_complaint_www19} Ibosiola, Damilola, et al. "Who watches the watchmen: Exploring complaints on the web." The World Wide Web Conference. ACM, 2019.
- 此文分析了对投诉者、投诉的对象、投诉的种类、以及投诉发出后哪些域名的变化，例如排名、是否撤下进行了分析。
- 发现:
    - DMCA投诉占数据集的98.6% 。同时一些小众的投诉只占数据集的0.001%，但它们覆盖了20%以上的被投诉者。
    - 前10%的投诉覆盖了超过10亿个url，剩下的90%只有55万URL。同时活跃的投诉者主要是版权执法机构和贸易组织为主。而偶尔的投诉者主要由小型机构和私营机构组成
    - 投诉人对单一类别有明显偏好，体现了投诉具有专业性。
    - 投诉最多的域名(投诉url数量最多的1%)占所有投诉的63%。
    - 非法网站及钓鱼网站更容易受到投诉。
    - 22%的网址在作者观察到投诉后的四周内无法访问。

#### 2.7.0.5. {Cunha_successful_community_www19} Cunha, Tiago, et al. "Are All Successful Communities Alike? Characterizing and Predicting the Success of Online Communities." The World Wide Web Conference. ACM, 2019.
- 本论文研究网络社区创立初期社区属性和用户行为对社区未来成功的影响。首先定义了四种成功的度量方法，并进行量化，分析了其中相关性。接着选择六类社区创立初期的特征。然后针对不同规模、不同度量方法下的社区特征预测模型进行实验，分析实验结果。最后说明了实验中的不足和基于实验结果给予社区成员的启示。 
- 发现： 
    - 1）度量社区成功的准则是多维的，本文中定义如下方法： 成员数量增长、成员保留情况、社区长期存活、社区活动量。 这些方法间相关度不高，表明每一个度量方法都把握了社区成功的一个维度。 
    - 2）实验研究用户组成、用户行为、社区活动的规模频率、语言风格、活动分布等特征对社区成功的影响，特征汇总后的模型的性能优于任何单个特征的模型性能，表明这些特征对社区成功都有预测性。其中，活动分布出现在所有不同的成功度量方法下最具预测性的因素中。 
    - 3）模型对于K的不同取值变化不大，表明一个社区创立初期，它的特征即可预测未来的成功。

#### 2.7.0.6. {Costa_Engaging_CSCW18} Costa Figueiredo, Mayara, et al. "Engaging with Health Data: The Interplay Between Self-Tracking Activities and Emotions in Fertility Struggles." Proceedings of the ACM on Human-Computer Interaction 2.CSCW (2018): 40.
- 本论文探讨了在自我记录以达到目标的过程当中，产生的情绪和记录行为相互影响的过程。本文选用了以生育为目的的自我记录，数据是从相关论坛上获取的发帖内容，研究方法为人工选词进行数据筛选，然后人工进行语句情绪分类。
发现：
- 本文发现以生育为目的的自我记录中，数据和用户情绪的关系可以分为五种:积极、负担、困扰、受困、放弃。这五种不同的关系分别有一些对应的情绪，也会使用户做出一些特定的行为。
- 本文也揭示了一些自我记录会对用户的情绪产生的严重负面影响，比如不透明的标准会让人觉得自己不正常，同时也根据这些情绪产生的原因对现代自我记录产品的设计提出了一些建议
- 本文更深层次地讨论和挖掘了自我记录和情绪的这种关系在社会层面、文化层面的原因和影响

#### 2.7.0.7. {Mackenzie_email_refind_www19} Mackenzie J, Gupta K, Qiao F, et al. Exploring User Behavior in Email Re-Finding Tasks[C]//The World Wide Web Conference. ACM, 2019: 1245-1255.
- 本论文研究的是电子邮件中用户重新查找邮件时的行为，首先提出了一个框架在众包的环境下通过模拟用户查找邮件任务获得了真实的邮件数据和用户行为，然后分析不同的邮件排名方法、邮件属性和搜索质量中的用户行为。
- 发现：
    - 基于相关性的排名方法的MRR明显高于按时间的排名方法，但两种方法对用户行为的影响并不大。按时间的排名方法在查找旧邮件时比较困难，用户在决定什么时候放弃SERP会做得更好。混合的排名方法中，有些用户会忽略或浏览目标邮件之外的内容。
    - 用户重新修改查询内容的规律与web搜索类似，但是修改策略会有差别。
    - 重要的电子邮件更容易被找到，成功的时间更少，搜索次数更低。人工还是机器生成的邮件不会影响被找到的成功率。
    - 用户行为与搜索结果的质量密切相关，质量降低，用户成功的时间就越长，搜索更频繁，并且更频繁地放弃每个SERP。


#### 2.7.0.8. {Chen_Learning Usage Patterns of Emojis from Large-Scale Android Users_WWW'18}
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

#### 2.7.0.9. {A Weakly Supervised Learning Framework for Detecting Social Anxiety and Depression.ASIF.UbiComp 2018}
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


#### 2.7.0.10. {Zhao_appusage2vec_icde19} S. Zhao, Z. Luo, Z. Jiang, H. Wang, F. Xu, S. Li,...,G. Pan. "AppUsage2Vec: Modeling Smartphone App Usage for Prediction." 2019 IEEE 35th International Conference on Data Engineering (ICDE). IEEE, 2019.
- [Important：this model doesnot use sequence DeepLearning Model]
- AppUsage2Vec：
    - App-attention mechanism：Measure the contribution of different apps to the target app To build a sequence vector from the input app vectors
    - Dual-DNN module：To build a combination vector of user vector and sequence vector
    - Temporal context：
- Application：
    - Useful for smartphone system optimization
    - Operating system resource management
    - Battery energy consumption optimization
    - User experience improvement
- model inspiration： Doc2Vec


#### 2.7.0.11. {Tsakalidis_Sudden_cikm18} Tsakalidis, Adam, et al. "Nowcasting the Stance of Social Media Users in a Sudden Vote: The Case of the Greek Referendum." Proceedings of the 27th ACM International Conference on Information and Knowledge Management. ACM, 2018.
- semi-supervised multiple convolution kernel learning approach (MCKL)
- temporally sensitive text & network information

#### 2.7.0.12. {Feng_emoji_www19} Feng, Yunhe, et al. "The World Wants Mangoes and Kangaroos: A Study of New Emoji Requests Based on Thirty Million Tweets." The World Wide Web Conference. ACM, 2019.
- examined patterns of new emoji requests by exploring their time, locations, and context.
- concluded the significance of new emojis on society
- summarizing advocacy behaviors, and exploring factors that inspire requests
- We discussed the equality, fairness and diversity in emojis, and presented the potential significance of new emojis in many as pects like business promotion and violence control.

#### 2.7.0.13. {Balsamo_abuse_www19} Balsamo, Duilio, Paolo Bajardi, and Andr Panisson. "Firsthand Opiates Abuse on Social Media: Monitoring Geospatial Patterns of Interest Through a Digital Cohort." The World Wide Web Conference. ACM, 2019.


#### 2.7.0.14. {Cunha_successful_community_www19} Cunha, Tiago, et al. "Are All Successful Communities Alike? Characterizing and Predicting the Success of Online Communities." The World Wide Web Conference. ACM, 2019.
- 本论文研究网络社区创立初期社区属性和用户行为对社区未来成功的影响。首先定义了四种成功的度量方法，并进行量化，分析了其中相关性。接着选择六类社区创立初期的特征。然后针对不同规模、不同度量方法下的社区特征预测模型进行实验，分析实验结果。最后说明了实验中的不足和基于实验结果给予社区成员的启示。 
- 发现： 
    - 1）度量社区成功的准则是多维的，本文中定义如下方法： 成员数量增长、成员保留情况、社区长期存活、社区活动量。 这些方法间相关度不高，表明每一个度量方法都把握了社区成功的一个维度。 
    - 2）实验研究用户组成、用户行为、社区活动的规模频率、语言风格、活动分布等特征对社区成功的影响，特征汇总后的模型的性能优于任何单个特征的模型性能，表明这些特征对社区成功都有预测性。其中，活动分布出现在所有不同的成功度量方法下最具预测性的因素中。 
    - 3）模型对于K的不同取值变化不大，表明一个社区创立初期，它的特征即可预测未来的成功。


#### 2.7.0.15. {Cheng_good_team_www19} Cheng, Ziqiang, et al. "What Makes a Good Team? A Large-scale Study on the Effect of Team Composition in Honor of Kings." The World Wide Web Conference. ACM, 2019.
- team performance (whether a team is going to win)
- team tenacity (whether a team is going to surrender)
- team rapport (whether a team uses abusive language). 
- tasks for winning, surrendering, and abusing.  Overall, we find that features based on team composition consistently outperform features based on individual players
- Xgboost
- total > role property > player information > baseline.
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



#### 2.7.0.16. {understanding_ubicomp17} Mehrotra, Abhinav, et al. "Understanding the role of places and activities on mobile phone interaction and usage patterns." UbiComp 2017
- [Group]
- This paper conducts an in-situ study investigating how the fine-grained contextual factors affects users' interactions with notifications and smartphone usage patterns. External factors such as location type, daily activity and location characteristic and their influences on users' attentiveness and receptivity to notification are discussed in this paper in detail.


#### 2.7.0.17. {Twitter_changin-ICWSM14} Liu, Yabing, Chloe Kliman-Silver, and Alan Mislove. "The Tweets They Are a-Changin: Evolution of Twitter Users and Behavior." ICWSM 30 (2014)
- [Detailed]
- This work studied the trend changing in the ecosystem Twitter.
- Changes: more globe; the shift from a primarily-desktop to a primarily-mobile system; the rise of malicious behavior; and the changes in users’ tweeting behavior.

#### 2.7.0.18. {pinterest_driven_sigmertrics14} Han, Jinyoung, et al. Collecting, organizing, and sharing pins in pinterest: interest-driven or social-driven?. ACM SIGMETRICS (2014)
- Pinterest is an interest-driven website, instead of social-driven. So, the pin propagation mostly depends on the topic or content, not on the pinner's characteristics like her numbers of followers. (section 5.3, Fig.9, Fig.10)
- Interest graph.
- **Uniformity metric** to calculate the similarity score. (Formula 2)
- Shared pins in the same community belong to the same category or come from the same source with high probability. (Tab.3)


#### 2.7.0.19. {LIWC_18} Yang C, Chen Y, Gong Q, et al. Understanding the behavioral differences between american and german users: A data-driven study[J]. Big Data Mining and Analytics, 2018, 1(4): 284-296.
- using the LIWC methods to distinguish the Greman and American based on the review data in Yelp.

#### 2.7.0.20. {twitter_www10} Kwak, H., Lee, C., Park, H., & Moon, S. (2010, April). What is Twitter, a social network or a news media?. WWW. ACM. 
- [Detailed]
- Twitter is a news media instead of a social network.

#### 2.7.0.21. {OSN_COMMAG13} Jin, L., Chen, Y., Wang, T., Hui, P., & Vasilakos, A. V. (2013). Understanding user behavior in online social networks: A survey. IEEE Communications Magazine, 51(9), 144-150. 
- [Detailed]

#### 2.7.0.22. {why_twitter07} Java A, Song X, Finin T, et al. Why We Twitter: Understanding Microblogging Usage and Communities[M]// Why we Twitter: Understanding microblogging usage and communities. 2007.


#### 2.7.0.23. {Wilson09}Wilson, C., Boe, B., Sala, A., Puttaswamy, K. P., & Zhao, B. Y. (2009, April). User interactions in social networks and their implications. In Proceedings of the 4th ACM European conference on Computer systems (pp. 205-218). Acm.
- [Detailed]
- Social interaction graph
    
    
#### 2.7.0.24. {GooglePlus_www13} Gonzalez R, Cuevas R, Motamedi R, et al. Google+ or Google-?: dissecting the evolution of the new OSN in its first year[J]. the web conference, 2013: 483-494.
- **Main idea**: whether a new OSN (like G+) can really attract a significant number of connected and active users despite the dominance of Facebook and Twitter?
- While the size of LCC component of G+ has grown at a high rate (200K user per day), the relative size of LCC has decreased with time. Both user action and reaction are centered around a very small fraction of users.
- The contribution of user activity in terms of posting is skewed among LCC users (i.e.10% of users are responsible for 80% of posts) and user reactions to activities is an order of magnitude more skewed (i.e.1% of users generate 80% of reactions to all posts).
- The connectivity features of LCC component of G+ have a striking similarity with Twitter but are very different from Facebook. This similarity indicates that users use G+ for message propagation similar to Twitter rather than pairwise user interaction like Facebook.

### 2.7.1. HashTag
#### 2.7.1.1. {name_reuse_www17} Mariconti, Enrico, et al. "What's in a Name?: Understanding Profile Name Reuse on Twitter." www 2017.
- [Group]
- This paper deals with a problem about profile names reusing on twitter. By analyzing the characteristics of name reusing accounts and its general behaviors, the authors find it is common that people reuse freed profile names in some social network platforms, both malicious or not. 

#### 2.7.1.2. {Hashtag_www19} Y Zhang, Language in Our Time: An Empirical Analysis of Hashtags. WWW'19
- [Group]
- This paper studies the problem of hashtags sharing from three different dimensions including the temporal-spatial dimension, the semantic dimension, and the social dimension. 

## 2.8. 社交强度(Tie Strength)
#### 2.8.0.1. {Wang_whisper_imc14} Wang, Gang, et al. "Whispers in the dark: analysis of an anonymous social network." Proceedings of the 2014 Conference on Internet Measurement Conference. ACM, 2014. 
- the “stickiness” of today’s networks
- anonymous social network: weak tie, the removal of persistent social links
- high dispersion, low clustering, high geolocation
- short-lived (1-2 days) and long-term users.
- “deleted whispers”: adult content
- detailed location tracking.

# 3. 网络结构与演化（structure and evolution）
## 3.1. Structure
#### 3.1.0.1. {Wang_Attributed_CIKM17} Suhang Wang, Charu Aggarwal, Jiliang Tang, and Huan Liu. "Aributed Signed Network Embedding." Proc. of CIKM, 137–146. 2017.
- 分类：signed network; link prediction; social network; network embedding;
- 这篇论文，研究了一种特定的社交网络，这种网络中的用户连接关系有好友等正反馈关系，也有拉黑等负反馈关系。该论文提出的SENA模型，将用户的属性和网络结构信息集成，在有正负关系的特殊社交网络中建立一种embedding模型，实验验证该方法对有正负关系社交网络的特殊处理方法能在连接预测和点分类问题中表现优异。
    - 这篇文章先说明了一种特殊的，有正负连接关系的社交网络。该网络中的点与点之间的联系因为好友、拉黑等关系存在正负关系。对于负关系的研究相对较少，但负关系的结构图与正关系在特征上有不同的表达，因此作者提出，对于该特殊网络研究新的模型的必要性。
    - 文中从网络的正负关系、用户属性、相似度、参数转移设置了四个变量参数，并依此设计了一个统一的优化函数，利用梯度下降的想法不断迭代，最小化连接预测或点分类问题的目标函数。值得一提的是，文中的相似度使用了图的结构信息，运用社交理论中的平衡结构进行优化函数的设定。
    - 在Epinions和Slashdot两个世纪数据集中，使用该模型与之前工作的baseline对比，详细分析了实验结果，并证明了该方法对于有正负关系社交网络在连接预测和点分类问题中的优异性。三维的参数分析也很好地表示了训练过程中的变量的敏感性，从而说明该模型的鲁棒性。
- 感想：这篇文章最大的亮点在于其找到了一个相对特殊的正负社交网络场景，该场景下的研究相对较少，但又有一定的重要性。文中对于embedding模型的参数和优化函数的设计有很强的数理逻辑，利用社会学理论三角平衡关系进行图结构的相似性比较也是一种可以借鉴的方式。鲁棒性的研究分析，用三维维图片表示比用表格或折线图更清晰（最后这一点有待更多的阅读学习）。



#### 3.1.0.2. {Gong_google+_IMC12} Neil Zhenqiang Gong, Wenchang Xu, Ling Huang, et al. "Evolution of social-attribute networks: Measurements, modeling, and implications using Google+." Proc. of SIGCOMM, 131–144. 2012.
- 分类：social structure; node attributes;
- 这篇文章首先在运用Google+的数据，研究该类型的SAN网络在图结构上的参数表现情况，并根据观察结果进行进一步的参数转换，提出了一种基于参数连接的评价指标，从而找出了影响力大的指标。针对观察，文章提出了一种基于小数据的大型SAN网络生成模型，在理论上分析了该模型符合实际的分布情况，并实验证明了在社会结构和参数表现上该生成模型都能更好地拟合实际的SAN网络。
    - 这篇文章爬取了Google+的数据，首先使用基础的图结构研究方式，使用经典的Reciprocity、Density、Diameter、Clustering Coefficient、Degree Distributions、Joint Degree Distribution等图分析指标进行SAN网络上的社会结构研究，其中发现了一些和以往研究不同的实际现象，从而说明了新模型的必要性。
    - 文中对图网络中的参数信息，考量了它们对上述指标的影响。文中提出了一种新的，图结构中基于参数关联的连接关系的评价指标，来更好地评价参数信息的重要性，找出了SAN网络中对社会结构影响较大的参数信息。
    - 基于上述社会结构和参数信息的研究，文中提出了一种基于小数据的大型SAN网络生成模型。该模型在时间上进行迭代，每步迭代保证了上述观察中的社会结构和参数信息的分布情况（如正态分布等），linking和sampling的操作也使得该生成模型能自我校准并达到更相似的SAN图结构。生成模型能辅助理解SAN网络的拓展。
    - 对于提出的生成模型，分别在理论上和实际网络中证明了该模型在社会结构和参数信息上，与SAN网络实际情况的更符合。
- 感想：这是一篇较早年的对网络结构和参数权重的研究文章。文中通过大量测量观察发现新现象，从而提出新问题新指标的思考角度值得学习借鉴。对于具体某个网络结构的经典分析指标的研究的方法可以积累并借鉴使用。图网络的拓展生成模型中，分布性的考量很重要，理论分析和实验结果结合的方式更具有说服力。


#### 3.1.0.3. Diversity of a User's Friend Circle in OSNs and H1 Its Use for Proﬁling
- 传统社交⽹络基于三元闭合理论, 所以 Ago Network 多样性⽐较低(⼀个或者很少数量的 ⽹络, 聚集系数⽐较⾼), 但是现实中并⾮如此.推测因为很多类似朋友圈做微商这样的群 体,利⽤社交功能做⽣意;
- 为了能够**区分出传统社交用户和功能用户**(做生意的), 他们借鉴`Community Detection`提出**衡量朋友圈多样性**的指标`Diversity`, 并实验了**不同的度量方式**的表现, 其中改造`GN`算法的ENC效果最好.
- 使用提出的`Diversity`, 进一步研究了**不同人口(职业, 性别, 年龄)** 的**Ago Network**的分布特征.

#### 3.1.0.4. {Wu_fake_news_WSDM18} [60] Wu, Liang, and Huan Liu. "Tracing fake-news footprints: Characterizing social media messages by how they propagate." Proceedings of the Eleventh ACM International Conference on Web Search and Data Mining. ACM, 2018.
- TraceMiner: detect fake news
- two steps:
    - learn embeddings from friendships and social community memberships.
    - Construct a sequence classier with LSTM-RNNs.
- high accuracy even in the absence of content information



#### 3.1.0.5. {Liben-Nowell_link_prediction_JASIST07} [4441] Liben‐Nowell, D., & Kleinberg, J. (2007). The link‐prediction problem for social networks. Journal of the American society for information science and technology, 58(7), 1019-1031.
- compare different methods to do link prediction by network structure features.
- probability that a random prediction is correct, graph distance, common neighbor, Jaccard’s coefficient, Adamic/Ada, preferential attachment,  Katz, hitting time or commute tim, rooted PageRan, SimRan. (Fig 2)
#### 3.1.0.6. {Wang_click_chi16} Wang, Gang, et al. "Unsupervised clickstream clustering for user behavior analysis." Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems. ACM, 2016.
- capture dominating user behaviors from clickstream data (traces of users’ click events),identifies previously unknown behaviors, e.g., dormant users, hostile chatters.
- visualize the detected behaviors in an intuitive manner


#### 3.1.0.7. {Consumer_segmentation_sharing_economy_18} Lutz C, Newlands G. Consumer segmentation within the sharing economy: The case of Airbnb[J]. Journal of Business Research, 2018
- Different types of people have different need. So the segmentations is indeed.
- two different types of accommodation offered on Airbnb: shared room and entire home. 
- Our findings indicate that within a single platform, the variety between offerings can create distinct consumer segments based on both demographics and behavioral criteria.
- strong alignment between consumer segmentation and host targeting, leading to potentially reduced matching efficiency.

#### 3.1.0.8. {HAM_KDD16} He, Lifang, et al. "Joint community and structural hole spanner detection via harmonic modularity." Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining. ACM, 2016.
- a new method to detect structural holes.


#### 3.1.0.9. {structutal_hole_www13} Lou, Tiancheng, and Jie Tang. "Mining structural hole spanners through information diffusion in social networks." Proceedings of the 22nd international conference on World Wide Web. ACM, 2013.
- This paper proposed models based on two intuition: more likelihood connect with opinion leaders & more information diffusion. And verify the models' effectiveness and efficiency on three different types of networks.
- Apply the detected structural hole spanners by the proposed models to help several social networking applications: community detection and link prediction.
- Their models suggest that there is a big difference between the information network structure and social network structure.
- Opinion leaders have more influence inner domain while structural hole has this cross domain. 


#### 3.1.0.10. {Burt_Structural_Holes_Good_Ideas_04} Burt, Ronald S. "Structural holes and good ideas." American journal of sociology 110.2 (2004): 349-399.
- good ideas
- creativity
- gate-keeping
- Brokerage is typically discussed as an engine for productive change.
- There was a brokerage advantage in producing ideas, and company systems were working correctly to reward brokers who produced good ideas. However, the potential value for integrating operations across the company was dissipated in the distribution of ideas. 

#### 3.1.0.11. {msn_tcss14} Leskovec, Jure, and Eric Horvitz. "Geospatial structure of a planetary-scale social network." TCSS14
- Study the interplay among topological, geographical, and algorithmically generated paths connecting pairs of nodes in a social network. 
- Messenger data is relatively robust and maintains connectivity even if high-degree nodes (25% of all edges) are removed
- When the path is very far from T (i > 8), such navigation is easy; on average 70% of the neighbors of a node lead toward T. However, as the path gets closer to T (i < 6), navigation becomes extremely difficult. When the path is ≤ 6 steps from T, less than 5% of nodes’ neighbors lead toward T. 
- while hub nodes are not necessary for the existence of short paths in the network, they aid the navigation.


## 3.2. Evolution
#### 3.2.0.1. {Barabási_PA_1999} Barabási, Albert-László, and Réka Albert. "Emergence of scaling in random networks." science 286.5439 (1999): 509-512.

#### 3.2.0.2. {microEvol_kdd08} Leskovec, Jure, et al. "Microscopic evolution of social networks." Proceedings of the 14th ACM SIGKDD international conference on Knowledge discovery and data mining. ACM, 2008.
- Motivated by these observations in paper, they present a complete network evolution model:
    - Nodes arrive using the node arrival function _N(·)_.
    - Node _u_ arrives and samples its lifetime a from the exponential distribution _p(a) = λ exp(−λa)_.
    - Node _u_ adds the first edge to node _v_ with probability proportional to its degree.
    - A node _u_ with degree _d_ samples a time gap _δ_ from the distribution _p(δ|d; α, β) = (1/Z)δ −α exp(−βdδ)_ and goes to sleep for _δ_ time steps.
    - When a node wakes up, if its lifetime has not expired yet, it creates a two-hop edge using the random-random **triangle-closing model**.
    - If a node’s lifetime has expired, then it stops adding edges; otherwise it repeats from step 4.
- Figure 9 shows the different trend of two parameters.
- The definition of **edge attachment by degree** (formula 1) and **edge by the age of the node** (formula 2).

#### 3.2.0.3. {time-kdd05} Leskovec, Jure, Jon Kleinberg, and Christos Faloutsos. "Graphs over time: densification laws, shrinking diameters and possible explanations." Proceedings of the eleventh ACM SIGKDD international conference on Knowledge discovery in data mining. ACM, 2005.
- Densification Power Law
- Shrinking diameters
- Community Guided Attachment(CGA) model: can lead to the Densification Power Law, and that it needs only _one parameter_ to achieve it.
- Forest Fire Model: based on only _two parameters_, reflects heavy-tailed in- and out-degrees, the Densification Power Law, and a shrinking diameter.
- "missing past" problem
- The explanation of limitations($3.2.1): Disconnected components, “Missing Past” effects, Emergence of giant component.
- Parameter Contour plots (Fig. 7 and Fig. 5): to show how the impact of parameters changes on the model.


#### 3.2.0.4. {self-similarity-ToMPECS16} Qingyun Liu, Xiaohan Zhao, Walter Willinger, Xiao Wang, Ben Y. Zhao, and Haitao Zheng. 201- Self-similarity in social network dynamics. ToMPECS 2016 
- **Main Idea**: Study the role that self-similarity scaling plays in a social network edge creation (that is, links created between users) process. Using these findings, they build a complete model of social network dynamics that combines **_temporal_** and **_spatial_** components.
- Self-similarity, is critical for determining how to model network dynamics.
- **Road Map**: 
    - the two methods (traditional R/S and variance) are unsuitable for measuring self-similarity in real traces in social networks.
    - the wavelet-based method to be highly robust detecting self-similarity in the presence of non-stationary trends.
    - We cross-validate our observations by repeating the above analyses on the Facebook wall post dataset and confirm that it exhibits similar self-similarity properties observed from the Renren dataset.
    - Propose a detailed model of social network dynamics that captures both the temporal properties spatial properties.
    - validate our model by showing that it produces dynamic traces that match key properties of the original Renren and Facebook datasets.
- Model's temporal properties: 
    - a temporal component that produces a sequence of time-stamped events defining _when_ and _how many_ new edges are formed in a given time interval
    - self-similar scaling and deterministic non-stationary periodic patterns like diurnal or weekly cycles of user activity. 
- Model's spatial properties:
    - a spatial component defining _where_ in the graph these new edge creations take place (i.e., which nodes are involved).
    - long-term graph distance shrinkage and reduction in local clustering


#### 3.2.0.5. {macroscopic_twitter_sigmetrics14} Gabielkov M , Rao A , Legout A . Studying social networks at scale: macroscopic anatomy of the twitter social graph[C]// SIGMETRICS, 2014. 
- [Detailed]
- This paper introduces the macroscopic anatomy of twitter. Divide the twitter graph into 8 parts. (fig.2, fig.3) There are their role and compositions separately.
- Macroscopic implication.
- An evolution model.


#### 3.2.0.6. {OSN_evolution-kdd06} Kumar R, Novak J, Tomkins A, et al. Structure and evolution of online social networks[C]. KDD, 2006
- [Detailed]
- Three segmentations: singletons, stars, a giant component.
- Distinct stages of growth.
- The fractions of three regions
- Merging feature
- The removal of all stars from the giant component.
- The new connections in stars are always though invitations.
- A simple model to simulate the formation based on preferential attachment.
- FUTURE: this model has representation to the others?


#### 3.2.0.7. {GRag_aggregation_IMC09} Garg, Sanchit, et al. "Evolution of an online social aggregation network: an empirical study." [C] SIGCOMM IMC ACM, 2009.
- analyze from two classes (old and young, threshold is 50 days)
- preferential attachment (global, the old more affected)
- proximity bias (local, the young more affected)
- A simple model, based on co-existence of preferential attachment and proximity bias.
- Group affiliation. Group affiliation mechanism is more influential than proximity bias to the young nodes.

#### 3.2.0.8. {growth-wosn08} Mislove A, Koppula H S, Gummadi K P, et al. Growth of the flickr social network[C]//Proceedings of the first workshop on Online social networks. ACM, 2008
- link formantion follows preferential attachment, but the global mechanisms alone are insufficient to explain the observed proximity bias.
- response the incoming links by creating links back to the source
- This happens because the vast majority of a population facing a shared problem prefer to assume that choices made by the more qualified among them are more reliable.


#### 3.2.0.9. {Betweenness_centrality} Abbasi, Alireza, Liaquat Hossain, and Loet Leydesdorff. "Betweenness centrality as a driver of preferential attachment in the evolution of research collaboration networks." Journal of Informetrics 6.3 (2012): 403-412.
- 'social network analysis and preferential attachment'. This paper talk related work well in section 2.





# 4. 虚拟网络和现实网络（online and  offline）
## 4.1. Share Economy
#### 4.1.0.1. {regulation_for_sharing_economy_www16} Quattrone, Giovanni, et al. "Who benefits from the sharing economy of Airbnb?." WWWW 2016.


#### 4.1.0.2. {airbnb_affordability_2018} Barron, Kyle, Edward Kung, and Davide Proserpio. "The sharing economy and housing affordability: Evidence from Airbnb." (2018).
- a 1% increase in Airbnb listings leads to a 0.018% increase in rents and a 0.026% increase in house prices at the median owner-occupancy rate zipcode

#### 4.1.0.3. {impact_of_airbnb_hotel_industry_2017} Zervas, Georgios, Davide Proserpio, and John W. Byers. "The rise of the sharing economy: Estimating the impact of Airbnb on the hotel industry." Journal of marketing research 54.5 (2017): 687-705.
- affected hotels have responded by reducing prices
- impact that benefits all consumers, not just participants in the sharing economy

#### 4.1.0.4. {Sharing_means_renting_websci17} Ke, Qing. "Sharing means renting?: An entire-marketplace analysis of airbnb." Proceedings of the 2017 ACM on Web Science Conference. ACM, 2017.
- Airbnb is actually more like a rental marketplace rather than a spare-room sharing platform.
- measure several key characteristics at the heart of the ongoing debate and the sharing economy.

#### 4.1.0.5. {More_Stars_More_Reviews_CHI1} W Qiu, P Parigi, B Abrahao, More stars or more reviews? Differential effects of reputation on trust in the sharing economy, CHI2018
- average star rating or the number of reviews is more important for signaling a user’s trustworthiness.


#### 4.1.0.6. {Monetizing_network_hospitality_CSCW15} Ikkala, Tapio, and Airi Lampinen. "Monetizing network hospitality: Hospitality and sociability in the context of Airbnb." CSCW. ACM, 2015.
- what motivates individuals to monetize network hospitality
- how the presence of money ties in with the social interaction related to network hospitality.
- money can provide a helpful frame for network hospitality, supporting hosts in their efforts to accomplish desired sociability, select guests consistent with their preferences, and control the volume and type of demand.


#### 4.1.0.7. {fit_host_characteristics_ICEC16} Han, Heejeong, Chulmo Koo, and Namho Chung. "Implication of the fit between Airbnb and host characteristics: a trust-transfer perspective." ICEC2016.

#### 4.1.0.8. Grbovic, M., & Cheng, H. (2018, July). Real-time Personalization using Embeddings for Search Ranking at Airbnb. In Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining  
- [Detailed]
- The profile of host will decide the ranking of listings and talk about the quantity influence.

#### 4.1.0.9. {Trustworthiness_Airbnb_CSCW17} Ma, X., Hancock, J. T., Mingjie, K. L., & Naaman, M. (2017, February). Self-Disclosure and Perceived Trustworthiness of Airbnb Host Profiles. In CSCW (pp. 2397-2409). 
- The profile of hosts will influence the choice of renters.


#### 4.1.0.10. {airbnb_dynamic_pricing} Ye, P., Qian, J., Chen, J, (2018, July). Customized Regression Model for Airbnb Dynamic Pricing. In Proceedings of the 24th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining (pp. 932-940). ACM.
- Come from Airbnb Co. Airbnb上的官方定价模型。


#### 4.1.0.11. {Couchsurfing_Aribnb_CSCW18} KLEIN M, ZHAO J, NI J, JOHNSON I, HILL BM, ZHU H. Quality Standards, Service Orientation, and Power in Airbnb and Couchsurfing. CSCW, 2017
- [Detailed]
- Distinguish social-based and money-based network from three aspects. The three aspects are 1)perceived standard, emphasis on person or place and dominant power.

#### 4.1.0.12. {Airbnb_Networking18} Zhou, Q., Chen, Y., Ma, C., Li, F., Xiao, Y., Wang, X., & Fu, X. Measurement and Analysis of the Reviews in Airbnb.
- [Detailed]
- 利用review去分析hosts和renters之间的弱关系网络。


#### 4.1.0.13. {Siberian_Food_Sharing}Ziker, John P., and Karen S. Fulk. "Indigenous Siberian Food Sharing Networks: Social Innovation in a Transforming Economy." Collaborative Innovation Networks. Springer, Cham, 2018. 117-127.
- These food sharing events appear to be driven by social relationships and cooperation, rather than status striving in the Ust’Avam community. 
- virtual networks are allowing people to overcome distance constraints and garner access to a broader range of resources, making them a conduit for social innovation.
- Porter et al 2011 notes that successful virtual networks demonstrate reciprocity through member contributions—allowing individual fulfillment needs—and when member needs are supported group trust increases. Once trust is established, an environment exists to foster cooperation and continued sharing within the group. Further work should look at the relationship between online sharing and sharing of material resources.


#### 4.1.0.14. {airbnb_no_safe_15} McNamara B. Airbnb: A not-so-safe resting place[J]. Colo. Tech. LJ, 2015
- a paper talk about the unsafty in airbnb with law perspective.



## 4.2. LBSN (Location Based Social Network)
#### 4.2.0.1. {Chen_effective_ICDE18} Wei Chen, Hongzhi Yin, Weiqing Wang, Lei Zhao, and Xiaofang Zhou. “Effective and Efficient User Account Linkage Across Location Based Social Networks.” In Proc of ICDE, 1025–1036.2018
- user linkage in LBSN的意义
- domain A 和domain B
    - 用户数量不是相同的
    -  Second, given a user account u1i in U1, our problem aims at returning all possible user accounts u2j matching with u1i.
- problem definition
	- similarity measurement：在两个不同的LBSN上，他/他的空间分布在两个LBSN上生成的**签入记录空间分布相似的**，即使用户在这些发布不同的签到两个平台。
- data sparsity： 签到数量以及签到地理
	- 签到数量 Fig a
	- 签到地理：用户每公里的签到密度
- 为什么是KDE
	- KDE 是一种普通的方法。
	- 这个方法特点是什么
		- 一种估计**随机变量**的概率密度函数的非参数方法。
		- 与参数方法相比，非参数方法对真实分布做更少的假设。比如数据是多峰的，那么我们用单峰的正态分布去拟合效果一定不好，但非参数方法却可以取得不错的效果。
		- KDE 用于建模任意一对位置之间距离的个性化分布 [35]，而且其建模成功个人级别的位置数据[9]. 
	- 基于这个特点，才会使得他在这个spare的数据集上适用
- KDE
	- K就是kernel 函数，一般有很多选择。此处选了Gaussian kernel function
	- 在KDE中，h > 0是一个称为bandwidth的平滑参数
- Grid structure
	- advantages
		- 在计算KDE的时候计算减少
		- 在空间中消减了data spare 和 data missing
	- 粗粒度，降低了precision
	- 第一种：just consider the grid cells that contain **non-zero** historical check-in records, 9000*9000 grids
	- 第二种，以某cell为中心，建立K*K grid的square region，考虑局部性
- Weight
	- Shannon entropy：expected value of the information contained in each message in relation to the importance of the message
	- high entropy, low discriminate
	- Renyi entropy
        - 如果q> 1，则熵奖励Nui（g）的较高值。如果q <1，则熵将惩罚较高的值 i（g）
        - a generalized version of Shannon entropy(q -> 1 )
- Experiment
	- 表2有参数列表
	- 似度阈值S∆影响GKR-KDE的准确度
	- 似度阈值S∆不影响GKR-KDE的效率



#### 4.2.0.2. {} Sadri, Amin, et al. "What will you do for the rest of the day?: An approach to continuous trajectory prediction." UbiComp2019
- 本文探讨了根据用户轨迹历史记录和一天之中的开始轨迹，预测一天之中剩下轨迹的可行性。
- 首先分析数据得出一系列重要结论：一天中早晨的轨迹和下午的轨迹有正相关性；越邻近的历史轨迹越相似；异常的轨迹往往具有一次性的特点
- 提出了自己的方法：通过轨迹相似度、时间分块的方法探究相似轨迹的影响并预测轨迹
- 与现有的方法和马尔科夫模型、lstm进行对比，在数据量不多的情况下本文方法最优

#### 4.2.0.3. {PrivCheck: Privacy-Preserving Check-in Data Publishing for Personalized Location Based Services. Ubicomp'16}
本论文主要针对个性化的LBSs提出的了一个用户可定制化的、连续的隐私保护的框架PrivCheck，来减少check-in数据发布时会造成的用户个人信息的隐私泄露。
主要思路：在给定的一个数据失真的预算下，混淆用户的check-in数据，来降低用户特定的隐私数据的泄露程度，同时保证个性化LBSs的实用性。
系统流程：
（1）用户自愿将check-in数据共享到LBSN中，并指定自己的隐私数据；
（2）用户公开的check-in数据和选定的隐私数据输入到PrivCheck框架中，historical check-in publishing module混淆用户历史check-in数据，online check-in data publishing module混淆check-in数据流中的每条check-in；
（3）将混淆的check-in数据发布给第三方LBS提供商；
（4）第三方提供高质量的个性化的LBSs。

#### 4.2.0.4. {Zhao_TALL_CIKM18} [5] Zhao, Jing, et al. "On prediction of user destination by sub-trajectory understanding: A deep learning based approach." Proceedings of the 27th ACM International Conference on Information and Knowledge Management. ACM, 2018.
- TALL model for destination prediction
- model details:
    - bidirectional Long ShortTerm Memory (LSTM) network 
    - attention mechanism
    - H-TALL (hierarchical TALL): multi-granularity learning capability is further proposed to improve the accuracy of prediction
- experiment: Beijing(road record), Chengdu (Didi)


#### 4.2.0.5. {Zhang_Hoodsquare_SocialCom13} [60] Zhang, Amy X., et al. "Hoodsquare: Modeling and recommending neighborhoods in location-based social networks." 2013 International Conference on Social Computing. IEEE, 2013.
- recommend urban neighborhoods using location-based social networks
- identify local check-in or tourist check-in

#### 4.2.0.6. {Wang_foursquare_AAAI16} Wang, Gang, et al. "''Will Check-in for Badges'': Understanding Bias and Misbehavior on Location-Based Social Networks." Tenth International AAAI Conference on Web and Social Media. 2016.
- __Survey Questions__
- large discrepancies between check-in data and actual user mobility, concerns about the _representativeness_ of check-in datasets to model realworld events.
- motivations behind misrepresentation of check-ins
- Missing and Extraneous Check-ins, privracy, Self-selection Bias, reward mechanisms


#### 4.2.0.7. {LBSN_hypergraph_www19} Dingqi, Yang, et al. Revisiting user mobility and social relationships in lbsns: a hypergraph embedding approach. WWW'19
- [Group]
- This paper proposes a hypergraph embedding approach named LBSN2Vec to learn node embeddings from users' social relationships and users' check-ins at the same time.


#### 4.2.0.8. {depression_mobility_ubicomp15} Canzian, Luca, and Mirco Musolesi. "Trajectories of depression: unobtrusive monitoring of depressive states by means of smartphone mobility traces analysis." Ubicomp 2015.
- [Group]


#### 4.2.0.9. {stuCheckin_KDD18} Hang, Mengyue, Ian Pytlarz, and Jennifer Neville. "Exploring student check-in behavior for improved point-of-interest prediction." KDD 2018
- [Group]
- student checkin data.


#### 4.2.0.10. {destination_prediction_UbiComp18} Imai, Ryo, et al. "Early Destination Prediction with Spatio-temporal User Behavior Patterns." UbiComp 2018
- [Group]
- This paper proposed a new model which combines two conventional models used for early destination prediction.The proposed model fully leverage the user context and trajectories to narraw down the destination candidates. 

#### 4.2.0.11. {Motivations_Checkins_CSCW18} Xu, F., Zhang, G., Chen, Z.et al. Understanding Motivations behind Inaccurate Check-ins. CSCW'18
- [Group]
> **The main idea:** Find the motivations behind inaccurate check-ins.
> **Innovation** 
> 1. Four types of check-ins: real, nearby, delay, fake.
> 2. Propose four types of Hypothesises. 



#### 4.2.0.12. {bridging_physical_online-ubicomp10} Cranshaw J, Toch E, Hong J I, et al. Bridging the gap between physical location and online social networks[C]. ubiquitous computing, 2010: 119-128.
- **Main Idea**: Explore connection between an online social network and the location traces of its users.
- **Implication**: location-aware information sharing platforms; privacy control mechanisms; friend suggestion systems.
- the location entropy definition
- Inferring facebook social network ties from co-location.
- Inferring the number of friends from user mobility data.
- Co-locations at high entropy locations are much more likely to be **_random_** occurrences than co-locations at low entropy locations.
- locations of high entropy tend to be more **_social_** in nature than locations of lower entropy, and so users who visit these locations tend to be more social.


#### 4.2.0.13. {mobile_traffic_time_series_TSC_16} Fengli Xu, Yuyun Lin, Jiaxin Huang, Yong Li, Big Data-Driven Mobile Traffic Understanding and Forecasting: A Time Series Approach, TSC'17 
- Decompose the moblie traffic temporal data into regularity and randomness components. And use time series prediction to forecast the regularity components. To the randomness components, the prediction is impossible.

#### 4.2.0.14. {Swarm_18} Hao Zhao，Qingyuan Gong，Yang Chen, This Place is Swarming: Using a Mobile Social App to Study Human Traffic in Cities, CAPer, 2018




## 4.3. City Computing
#### 4.3.0.1. {Scellato_Exploiting_KDD11} Salvatore Scellato, Anastasios Noulas, and Cecilia Mascolo. "Exploiting place features in link prediction on location-based social networks." Proc. of KDD, 1046–1054. 2011.
- 分类： location-based; link prediction; social media;
- 这篇文章，在基于地理位置的社交网络上，使用地理位置的登录信息与社交网络中的朋友图结构，结合构建了一个朋友推荐的模型。通过提取的社交信息、地理信息和通用信息，使用不同的有监督学习模型对朋友连接推荐进行预测，对比了地理位置信息对预测结果的重要性。该模型考虑了信息量的大小，以及对于某个用户连接预测所需的朋友圈的大小，能以较小的代价获得较高的预测准确率。
    - 这篇文章使用了社交媒体Gowalla的数据，包括常见的社交媒体用户数据和基于地理位置的用户登录、签到信息等。数据收集为一段时间进行一次snapshot，总共数据量为30万的用户信息。
    - 将地理位置划分后，对于社交媒体中的用户朋友关系进行跳数的分析，考虑了**不同跳数的朋友关系带来的朋友圈大小影响**，对不同的朋友圈大小分别建立模型并分析预测的计算代价。
    - 结合用户的社交媒体个人信息和地理位置信息，使用相似性定义了用户可能的交朋友行为，并根据时间序列数据进行多次验证。
    - 通过提取的社交信息、地理信息和通用信息，构建了15个参数，并使用了多种传统的有监督机器学习模型进行预测，其中随机森林和线性回归模型表现最佳。文中同时讨论了地理位置参数对预测结果的影响，以及训练和测试使用的朋友圈大小对预测结果和计算代价的分析。结果证明了，该方法能在意较小的运算代价，获得较大的预测准确率。同时，地理位置的参数能预测出大量不使用地理信息无法获取的正确朋友关系。
- 感想：这篇文章作为早期的LBSN上的研究，地理位置信息在朋友关系预测上产生了很不错的效果，不仅提高预测成功率，而且能找到很多之前方法无法获得的正确链接关系，有实际意义。一个较大的亮点在于数据集，多个时间段收集的同一组递增的数据集，能很好地分析时序关系上社交网站的扩展和用户行为的变化，在当时30万的数据量也很大。同时，因为关系图网络的庞大，考虑了只用部分子图信息的研究影响，对于计算代价的分析和代价与结果的Trade-off研究也是一个值得学习的地方。


#### 4.3.0.2. {Molino_UberTicker_KDD18} Piero Molino, Huaixiu Zheng, and Yi Chia Wang. "COTA: Improving the speed and accuracy of customer support through ranking and deep networks." Proc. of KDD, 586–595. 2018.
- **分类：transport; urban;**
- 这篇文章是Uber关于如何分类用户提交的ticket信息，目的是将ticket请求更好地分类以便紧急信息能被更快速和更准确地处理和响应。提出了两个模型Cota v1和v2，v1模型将分类问题变为得分排序问题，v2模型使用Encoder-Combiner-Decoder构架，使得先验知识能被注入，更好地提高了模型的预测。该方法针对实际数据集进行了实验，提高了预测质量，且平均对用户的回应时间降低了10%。同时，文章对两个模型的不足也进行了讨论。
    - 对于实际的uber ticket情况提出问题和挑战，使用真实数据以便更好地将ticket请求更好地分类，以便后台服务人员能更快速和准确地给用户反馈。
    - 提出了Cota v1模型，将对于ticket通过参数功能获取的高维（200+）参数的多分类问题转换为排序问题。使用点排序算法，使用相似性的比较方式，根据评分的排序来标定分类，并根据分数区间划分分类。两者都用RNN的方法。
    - 提出了Cota v2模型，使用Encoder-Combiner-Decoder构架。该架构直接合并了所有原始输入，避免在将文本和分类功能映射到整数之外的预处理的需要，并且帮助学习了一个模型来预测客服联系类别和回复模板，并为比较不同的编码器提供了一种简便的方法。同时，该架构能简单地将先验知识合并进行预测，更好的提高了预测的精度。
    - 比较了Cota v1和v2模型，证明了Cota v2模型能更好地提高分类的精度。同时，在实际的Uber数据及上进行了测试，该方法使得用户ticket响应时间平均减少了10%。该模型已经在实际的Uber平台上部署和测试，结果表明，它可以显着减少ticket解决时间，同时提高客户满意度。
    - 比较两个模型，对类不平衡和分类类别或数量少的情况进行了分析，分别说明了两个模型在不同的实验情况下的不足。
- rethinking: 该论文目标在实际工业场景中的问题，提出了模型降低用户的ticket响应时间并提高准确率，从而获取商业价值。主要的收获有以下两点，一个是对于一个问题，如果有多角度的见解，可以向文中一样提出两个version的模型，并对两个模型分别评估和比较，使得文章内容更加充实。第二个收获在于对于一些不同特殊情况的比较全面的讨论，除了可以验证系统的鲁棒性之外，在两种模型中也可以对比不同的优缺点。

#### 4.3.0.3. {Pan_ST-MetaNet_KDD19} Zheyi Pan, Yuxuan Liang, Weifeng Wang, Yong Yu, Yu Zheng, and Junbo Zhang. "Urban traffic prediction from spatio-temporal data using deep meta learning." Proc. of KDD, 1720–1730. 2019.
- **分类：transport; urban;**
- 这篇文章是主要使用了地理的时空数据，配合的士的移动数据，构建了一个ST-MetaNet模型，对城市的交通流量和交通速度进行了基于序列数据预测。文章的主要亮点在于模型的构建，从复杂的时空交通数据中心提取元知识作为参数，训练的模型对比了7个baseline，并在序列预测的结果上有显著提升。案例分析也验证了模型在具体的实际数据中表现更贴近实际。
    - 对于复杂的交通时空数据，使用更为通用的定义方式，对于某个地理位置的点，将如POI和周围道路的密度作为该点的属性。对于两点之间的道路连边，使用如连通性、距离等通用的属性定义。
    - 建立了ST-MetaNet网络结构，使用通用点和边的属性，训练出一个适用范围广的模型，给复杂的交通网络提供一个应用范围广的解决方案。
    - ST-MetaNet模型主要分为四个部分。首先，对于原始的图数据，使用RNN对历史数据处理出序列信息。其次，对序列信息使用meta-knowledge learner学习出元信息。对于元信息，分别使用RNN和图注意力网络，学习出点和边的参数。
    - 使用ST-MetaNet模型，对网格划分的城市区域，预测的士流量状态和区域内的交通速度。该方法对比了其中不同的baseline，在序列数据的预测结果上优化明显。同时，案例研究也验证了数据集中，该模型拟合结果更贴近真实情况。

#### 4.3.0.4. {Tong_taxi_demand_KDD17} Yongxin Tong, Yuqiang Chen, Zimu Zhou, et al. "The Simpler the Better: A unified approach to predicting original taxi demands based on large-scale online platforms." Proc. of KDD, 1653–1662. 2017.
- **分类：transport; taxi; urban**
- 这篇文章是关于城市中预测用户呼叫的士的行为的。它不同于的士的接人，因为政策或者新功能导致整体参数的影响大。传统的非线性深度学习模型虽然能获得较高的预测准确率，但是需要大量的特殊参数，这些参数每次变化则要重新训练模型。这篇文章使用了更为简单的线性回归模型，使用的参数的变化小，在参数提取处使用参数合并的方式提高参数的维度以提高精确度。论文中，实际的数据量为千万级别，参数的总维度超过200 million，分布式学习在该量级的数据中表现优异，并且能支持迅速的、并行的、大规模的参数变化，解决了文中提出的主要问题场景。最后，对比了传统方法，该方法效果表现优异。
    - 获取了连续三个月，北京和杭州真实的滴滴叫车数据，数据量为千万级别。获得了时间、空间（如POI）、天气数据等基本参数。
    - 使用combination的方法，考虑将可能一起影响的参数结合，总共产生了超过100个参数，并且这些参数因为结合的原因，在维度上超过了2亿。
    - 构建了基于线性回归模型的LinUOTD模型，目标函数同时考虑了空间和时间影响。
    - 使用分布式系统进行训练，支持迅速的、并行的、大规模的参数变化。分布式节点中，通过全局特征哈希函数从参数服务器中获取相应的参数，并计算预测值和梯度。
    - 多种评价指标下，对比了六种传统的预测方法，即使在没有调整参数的情况下，LinUOTD仍然相对baseline表现优异。
- rethinking: 该论文在已有很好地预测模型下，考虑到变动带来的模型重新训练问题，化繁为简使用基础的线性回归模型，来更快地适应用户呼叫的士行为中的参数变化。第一点值得学习的是对于参数的使用，通过结合参数，能大大提高参数的维度，从而减少线性模型的缺点从而提高精确度，结合参数的方法以后也可以使用。第二个亮点在于数据量，千万级别的工业数据两个，非常结合实际。最后就是分布式机器学习，可以学习一些基础的分布式方法，在数据量大的情况下能更好地保持训练和测试的高效性。



#### 4.3.0.5. {Poonawala_bus_KDD16} Hasan Poonawala, Vinay Kolar, Sebastien Blandin, Laura Wynter, and Sambit Sahu. "Singapore in motion: Insights on public transport service level through farecard and mobile data analytics." Proc. of KDD, 589–598. 2016.
- [分类：mobility；transport]
- 这篇文章是一个对移动方式的研究文章。主要将用户手机的定位数据和交通卡数据结合，利用公交车移动轨迹来自动校准用户的移动地理轨迹，从而实现高精度和高覆盖率。并根据分析的轨迹，给公交公司提供更精确的路径规划建议，给用户提供更高效的路径选择。
    - 数据集来源为新加坡的用户手机定位数据和匿名的交通卡出入站信息。由于手机定位数据没有使用GPS，且不是持续请求信息，获得地点的方式是离散的，所以数据上存在很多的偏移。本文主要使用交通数据进行用户移动轨迹校准。
    - 移动轨迹的测量方法为：首先，使用多边形栅栏分析法，将地理位置分割成一些多边形区域，选取跨区域的较远运动轨迹。接着判断起点或者终点离车站的距离，找出所有的公交旅程，并使用HMM的相似性方法，判断用户的移动轨迹是否能对应公交车和地铁的路线，并用时间戳等方式与匿名的公交卡的数据对比，以提供高精度的轨迹。
    - 根据用户轨迹的最终的起点和终点，以及住宅、公司、ROI等信息，判断与站点的距离，研究用户移动的“第一英里和最后一英里”的时空分布和具体的移动距离。通过统计方式，研究了当前站点设置存在的可提升处。
    - 通过分析精确地用户移动轨迹，给公交公司提供更好地部署车站方式，使得用户能更快地移动到离自己最近的公交车站。
    - 并根据分布的置信区间， 从移动地理位置和公共交通数据的适当组合中评价路径长度、换乘点数量、车辆班次、换乘点繁忙度等参数，并估算出对于最佳公共交通规划至关重要的参数，可以提高路径规划的高效性。
感想：
    该论文针对一个具体的用户搭乘公共交通的移动场景，结合手机定位和交通卡数据，更精确地校准用户的移动轨迹，并根据该方法实验了一些实际应用。应用中的最后一英里问题，引发我思考了该问题能否通过出租车方式来优化，将阅读更多论文思考该研究的可行性。同时，该文章在获取数据集后，能找到一个合适的具体场景进行研究，同样值得学习借鉴。


#### 4.3.0.6. {Shen_MobiPay_CSCW20} Hong Shen, Cori Faklaris, Haojian Jin, Laura Dabbish, and Jason I Hong. "‘ I Can ’ t Even Buy Apples If I Don ’ t Use Mobile Pay ?’: When Mobile Payments Become Infrastructural in China." Proc. of CSCW. 2020.
- theoretical lens of infrastructure to study users’ **interactions with ubiquitous mobile payment** systems in China
- data from a survey (n=466) and follow-up interviews (n=12) with users in China,
- findings:
  - Physical ubiquity: Dining, transportation, offline shopping
  - Digital ubiquity: Wealth management, money transfer, utilities, public services
  - Social ubiquity: Red Packets
- challenges: When Mobile Payments Fail
    - (1) technical challenges
      - solution: The infrastructuralization of corporate platforms.
    - (2) social challenges
      - solution: Financial inclusion
    - (3) interoperability challenges
      - solution: The infrastructuralization of corporate platforms.
    - The trade-offs between ubiquity and privacy.


#### 4.3.0.7. {Lin_DeepSTN_aaai19} [2] Lin, Ziqian, et al. "DeepSTN+: Context-aware Spatial-Temporal Neural Network for Crowd Flow Prediction in Metropolis." AAAI, 2019.
- DeepSTN+, a deep learning-based convolutional model, to predict crowd flows in the metropolis.
- employs the ConvPlus structure to model the longrange spatial dependence among crowd flows in different regions
- PoI distributions and time factor are combined to express the effect of location attributes

#### 4.3.0.8. {Liu_neighbour_www19} Liu, Zongtao, et al. "How Do Your Neighbors Disclose Your Information: Social-Aware Time Series Imputation." The World Wide Web Conference. ACM, 2019.
- electrical  power network 
- The goal is to impute the missing values by building surrounding and temporal influences.
    - surrounding: neighbors. observations of A’s neighbors provide us with a clue for the missing value.
    - temporal: the missing observations of individual C at time t3 are affected by C’s observations at t1 and t2
- combine social attention network and temporal attention networks (fig 4)

#### 4.3.0.9. {Yao_cities_www19} Yao, Huaxiu, et al. "Learning from Multiple Cities: A Meta-Learning Approach for Spatial-Temporal Prediction." The World Wide Web Conference. ACM, 2019.
- questions: data collection with unbalanced spatial distributions. For example, some cities may release taxi data for multiple years while others only release a few days of data.
- aim to utilize the long-period data from other cities via transfer learning
    - transfer learning
    - spatial-temporal learning: CNN is used to capture spatial dependency and then LSTM is used to handle temporal correlation.
- application
    - traffic prediction
    - water quality prediction 

#### 4.3.0.10. {Yang_Urban_Migrants_www18} Yang, Yang, et al. "To Stay or to Leave: Churn Prediction for Urban Migrants in the Initial Period." WWW 2018.
- [Group]
- This paper deals with the problem of migrants loss in the big city of China, taking Shanghai as example. Reasons mainly from four aspects: Ego network properties, Call Behavior, Geographical Patterns , Housing Price Information. 


#### 4.3.0.11. {Cultural_pattern_kdd18} Zhou, Xiao, et al. "Discovering latent patterns of urban cultural interactions in wechat for modern city planning." KDD18
- Cultural Patterns Extraction (TLDA & TCV)
- Determining Cultural Demand and Supply Spatially (Cultural Demand & Supply Definition)
- Identification of Areas that Lack Cultural Offering 
- Only mining the patterns of all types of urban activities in general, without looking at particular subgroups.


#### 4.3.0.12. {geographic_Diversity_www19} Singh, Rajkarn, et al. "Urban Vibes and Rural Charms: Analysis of Geographic Diversity in Mobile Service Usage at National Scale." WWW19
- how similar (or different) are demands for mobile services across a whole country

#### 4.3.0.13. {Death_Life_Italian_www16} De Nadai, Marco, et al. "The death and life of great Italian cities: a mobile phone data perspective." WWW16
- verfiy Jane Jacobs’s four conditions necessary for the promotion of urban life in the Italian context.

#### 4.3.0.14. {Geographic_Demographic_Cultural_Factors_mobilehci18} Peltonen, Ella, et al. "The hidden image of mobile apps: geographic, demographic, and cultural factors in mobile usage." MobileCHI 18
- societal factor that correlates with Hofstede’s Cultural Values Model
- socio-economic
- geographic boundaries



#### 4.3.0.15. {PackLoc_UbiComp18} Cherian, Jim, Jun Luo, and Shen-Shyang Ho. "ParkLoc: Light-weight Graph-based Vehicular Localization in Parking Garages." UbiComp'18.
- [Group]
- A Light-weight Graph-based Vehicular Localization in Parking Garages.



## 4.4. Gamification
#### 4.4.0.1. {walk_challenge_www17} Ali Shameli, Tim Althoff, Amin Saberi, Jure Leskovec, How Gamification Affects Physical Activity: Large-scale Analysis of Walking Challenges in a Mobile Application, www'17.
- [Detailed]
- The focus of this paper is on how competition incentivizes users to increase their physical activity levels.

# 5. 安全（Security）
## 5.1. health
#### 5.1.0.1. {Guo_CausalEffects_WSDM20} Ruocheng Guo, Jundong Li, and Huan Liu. "Learning individual causal effects from networked observational data." Proc. of WSDM: 232–240. 2020.
- 分类：social network, network structure, auxiliary information.
- 这篇文章，针对实际的医疗治疗和经济现象中的噪声行为，使用观察者数据学习偶然效应和因果关系，利用了社交网络中的网络信息和网络结构作为辅助信息，解决混杂问题的大量随机试验带来的巨大人力物力消耗。由于该数据的因果关系每次只能观察到一种确信的现象而无法使得数据集充分，结合前人工作使用半人工合成的数据进行验证。实验证明网络信息能很好地提升预测的准确度，从而减少随机试验带来的资源消耗。
    - 这篇文章从实际问题出发， 考虑了一个在医疗治疗和经济学现象中常见的causal effects和treatment effect，这些社交网络可跟踪的结果常常需要大量的随机试验进行因果关系的验证，目标是通过网络数据减少这些验证消耗。
    - 通过对社交网络结构的研究，从中提取出一些特征，配合医疗治疗中的混杂因素，尝试对这些混杂因素进行解析。运用了GCN的方法提取特征，配合概率模型，建立了一个因果概率关系的模型。
    - 由于该数据的因果关系每次只能观察到一种确信的现象而无法使得数据集充分，结合前人工作使用半人工合成的数据，在博客和社交网络两种数据机上分别构造半合成的数据并进行实验验证。
    - 使用了多种causal effects模型和参数，分析在实际数据集文中模型的特征提取和因果推断的表现。结果证明，配合网络结构辅助数据能更好地找到可能的解的域，从而大量减少随机试验的资源消耗。
- 感想：选择这篇文章的重要原因是看到简介中使用了社交网络中的网络信息辅助预测，尽管该文章研究的领域偏向医学和经济领域有些概念我没能理解，但是使用社交网络中的网络信息进行辅助预测是一个很好的研究想法。近年的研究GCN也是一个比较常见的模型，该方法虽然只用了一层的GCN，但是在特征工程工作中仍表现突出，网络的图结构能很好地进行特征提取，使用GCN进行特征提取是一个很值得学习的工作方向。



#### 5.1.0.2. {Suhara_DeepMood_www17} [35] Suhara, Yoshihiko, Yinzhan Xu, and Alex'Sandy Pentland. "Deepmood: Forecasting depressed mood based on self-reported histories via recurrent neural networks." Proceedings of the 26th International Conference on World Wide Web. International World Wide Web Conferences Steering Committee, 2017.
- detect depress with self-reported history
- manual handling sequential features to LSTM
- fine-grained information such as moods at different parts of the day and action type inform the forecasting of severe depression.
- The results indicate that the history of the previous two weeks is sufficient to forecast future severe depression.

#### 5.1.0.3. {Liu_pregnancy_www19} Liu, Bo, et al. "Predicting pregnancy using large-scale datafrom a women's health tracking mobile application." The World Wide Web Conference. ACM, 2019.
- predict a woman’s probability of becoming pregnant using data from a women’s health tracking app
- prediction benifits:
    - identifying behaviors which affect pregnant
    - more efficient family planning
    - Identifying people with a very low chance of becoming pregnant is important for targeting and treating infertility.
- models:
    - Logistic regression: 2771 features 
    - original LSTM: 24 timesteps (one for each cycle day)
    - LSTM + BMS fertility model. BMS model assumes each act of sex contributes independently to the probability a cycle results in pregnancy. Thus, we model a user’s probability of becoming pregnant in a cycle as a sum of all sex.
    - LSTM + user embeddings. 

#### 5.1.0.4. {Chowdhury_Pharmacovigilance_www18} [3] Chowdhury, Shaika, Chenwei Zhang, and Philip S. Yu. "Multi-task pharmacovigilance mining from social media posts." Proceedings of the 2018 World Wide Web Conference. International World Wide Web Conferences Steering Committee, 2018.
- Adverse Drug Reactions (ADR) 药物不良反应
- model details：
    - Word + Char Embedding
    - Hybrid Attention with Coverage Mechanism
    - multi sub-task， Uni-LSTM Task-Specific Decoders

#### 5.1.0.5. {Yao_Cyberbullying_www19} [2] Yao, Mengfan, Charalampos Chelmis, and Daphney Zois. "Cyberbullying Ends Here: Towards Robust Detection of Cyberbullying in Social Media." The World Wide Web Conference. ACM, 2019.
- CONcISE: timely and accurate Cyberbullying detectiON on Instagram media SEssions. 

#### 5.1.0.6. {Bursztein_Child_Sexual_www19} Bursztein, Elie, et al. "Rethinking the detection of child sexual abuse imagery on the Internet." The World Wide Web Conference. ACM, 2019.

#### 5.1.0.7. {Sadeque_latency_wsdm18} [10] Sadeque, Farig, Dongfang Xu, and Steven Bethard. "Measuring the latency of depression detection in social media." Proceedings of the Eleventh ACM International Conference on Web Search and Data Mining. ACM, 2018.
- Early Risk Detection Error (ERDE)
- new metric, latency-weighted F1, for measuring the quality and speed at which a model identifies whether a user is depressed and show how it addresses some of the drawbacks of ERDE
- eRisk 2017 reference list


## 5.2. emergency
#### 5.2.0.1. {Chowdhury_Disaster_www19} Ray Chowdhury, Jishnu, Cornelia Caragea, and Doina Caragea. "Keyphrase Extraction from Disaster-related Tweets." The World Wide Web Conference. ACM, 2019.
- extraction key phrase and key words for disaster-related tweets
- LSTM and RNN
- word cloud Fig 2 ~ Fig 4



## 5.3. cyber
#### 5.3.0.1. {Shu_TriFN_WSDM19} Kai Shu, Suhang Wang, and Huan Liu. "Beyond news contents: The role of social context for fake news detection." Proc. of WSDM, 312–320. 2019.
- 分类： fake news; triangle relations; embedding; features extraction; social media;
- 这篇文章，针对出版商、新闻和用户之间的三角相关关系，构建了一个TriFN模型，用以检测社交网络中的假消息。通过对于社交媒体中三角关系数据挖掘和分析，构建了四种embedding层，并将结果数据合并后预测了社交媒体中的假消息。在两个实际数据集中的测试结果表明，该方法不论从特征选取上还是预测结果上，都明显好于之前的方法。在于早期预测的问题上，该模型表现也好于baselines。
    - 这篇文章针对社交网络中出版商、新闻和用户之间的互相关系，构建了一个**以三角相关关系为基础的模型TriFN**，用以检测社交网络中的假消息。
    - 通过对于社交媒体中的数据挖掘，构建了新闻、用户、用户-新闻、出版商-新闻四种embedding层，并最后使用一个二分类器对结果进行假新闻预测。对于embedding层的构建分析详细，四种方法的复杂度都是可计算的，对于整个模型的每次迭代，有一个精确的时间复杂度，计算时长可控性和可解释性都较强。
    - 选取了之前方法中常用的离散特征，并对比了多种常见的机器学习模型，对于每组特征选取，以F1最好的机器学习模型作为对比参考。
    - 在BuzzFeed和PolitiFact数据集上进行测试。该方法在Accuracy，Precision，Recall，F1指标上均好于所有的baselines。同时分析了用户参与参数和出版商喜好偏差参数对结果的影响，证明了选取的三角关系中这两种链接的特征都对结果有很大的正反馈。
    - 对于早期预测问题（新闻刚产生，数据量少），TriFN模型也表现得比baselines更加优异。
- 感想：这篇文章对于社交网络中的假新闻进行预测，使用不同的embedding方法从出版商、新闻、用户的三角相关关系提取有效参数，并获得很好地预测结果。通过三角相关关系进行的特征提取方法可以学习借鉴，这种特征很可能对于模型的表现有较大提升。同时，对于时间复杂度的分析，如果对于每个部分能精确地分析时间复杂度，能使得整个模型的计算时长更可控，同时可解释性也较强。早期预测也是一个可以考虑的对比方向。

#### 5.3.0.2. {Kumar_hoaxes_WWW16} Srijan Kumar, Robert West, and Jure Leskovec. "Disinformation on the web: Impact, characteristics, and detection of wikipedia hoaxes." Proc. of WWW, 591–602. 2016.
- 分类：Hoaxes; social graph; malicious;
- 这篇文章使用了Wikipedia上的有标签数据，结合了该社区中的自我校准数据集，旨在找出Wikipedia中的假条目和假信息。文章分析了已有数据集中假信息被阅读、被引用等影响因素，并归纳总结了一些特征作为参数，使用随机森林的方法训练了多个不同的分类器，对于假信息进行分类。该方法被实际运用到Wikipedia中并辅助找出了一些之前未被发现的假条目。该文章还邀请了10个用户只根据网页信息对于随机测试机做分辨测试，与文中模型的结果进行比较。
    - 这篇文章利用前人工作中Wikipedia已有的假条目数据集，结合了社区中”创建-标签-审核-删除”的假条目处理信息进行分析。它从文章被阅读量和文章被引用量，说明了这类假条目的危害性，从而引出了更好地检查该恶意信息的重要性。
    - 根据上述分析，文中将一个条目的特征提取分为以下几大类，分别是表面信息（只有网页上）、链接信息、引用信息、编辑者信息等，总共提取了10个特征。
    - 通过对四类问题的讨论，使用以上特征训练了四个随机森立分类器，讨论了分类结果以及参数的重要性。该方法在结果上比社区中已有的假条目处理办法能检测更多的恶意信息。该方法被实际运用在Wikipedia上，使用案例分析的方式说明它新找出的假条目在Wikipedia隐藏了多年后被该方法成功找出并删除。
    - 将真-假信息配对随机打乱后，请了10个用户对信息进行标定是否为假信息。该方法用户只能看到上述参数中的表面信息，最终分类准确率仅达到66%，虽然比文中仅使用该参数的47%预测率要高，但是远达不到使用所有参数整个模型80%+的准确率。该实验解释了基于参数的恶意检测方法能在某些样例中表现比人分类更准。
- 感想：这篇文章针对Wikipedia中的假条目信息，从影响分析、参数获取、预测模型、用户预测对比逐步地提出问题并解决问题，整体行文逻辑非常流畅，写作很好。该文中使用了经典的基于参数的分类方法进行恶意检测，提取了不同类别的参数。该文章结果上的一大亮点在于，它使用案例分析，找出了之前隐藏多年未被检测出的假条目，很有现实意义。另一个很值得学习的地方在于与用户预测结果进行对比分析，在如果找到一定被试者的情况下，除了做数据标定工作，还可以用来做类似的对照分析。


#### 5.3.0.3. {Cao_Aiding_NSDI12} Qiang Cao, Michael Sirivianos, Xiaowei Yang, and Tiago Pregueiro. "Aiding the detection of fake accounts in large scale social online services." Proc. of NSDI, 197–210. 2012.
- 分类：malicious detection; sybil account; OSN;
- 这篇文章利用了在提出了一种快速的在社交网站上提取恶意用户的方法。**方法主要基于随机游走**，从已经确信的用户开始，通过幂迭代方法在网络结构中传播置信度，并通过限制迭代的步数使得置信概率难以传播到恶意用户所在的社群。根据最终的信任程度，以排序的方式，要求置信度低的用户进一步信息验证（比如验证码）。本文的方法在大规模的OSN中进行了实践，能以较低的计算代价计算百万级别的用户，同时检查出的疑义度较高的用户数量是之前方法的18倍。
    - 社交网站中，恶意用户严重影响了正常用户的体验。由于恶意用户的社群和关联结构常常与普通用户有很大的差异，文中利用这个差异提出了一种基于图结构的解决方案。
    - 文中提出了一种基于随机游走的方法，从已经确信的正常用户开始，以幂迭代的方式传播置信度。根据前人的研究，当传播迭代次数为O(logn)时，正常用户的社群能传播获得较高的置信度，而恶意用户所在的结构群体的置信度较低。
    - 当迭代结束后，以度标准化的指标置信度作为排序标准，该方法降低了度数不平衡带来的影响，并能更好地区别正常用户和恶意用户的界限。
    - 该方法的总体复杂度为O(nlogn + m)，对于百万级别的数据集能以非常短的时间计算出结果。在Tuenti上的实验结果也证明了，这种方法能找出更多的恶意用户。
- 感想：这是一篇基于图结构的较早的恶意用户检测文章，该文章中提出了很多图结构中可以用来检测恶意用户的性质，可以学习并运用到之后的工作中。同时，文章中的算法高效也是这篇论文的一个主要贡献。文中提出了一些基于社群结构的统计分析方法，来优化恶意用户的检测结果，这些方法值得借鉴。



#### 5.3.0.4. {Goga_innocuous_WWW13} Oana Goga, Howard Lei, Sree Hari, et al. "Exploiting Innocuous Activity for Correlating Users Across Sites." Proc. of WWW. 2013.
- **分类：cross-link prediction; user behavior;**
- 这篇文章通过跨站研究，对用户尝试在不同网站保持身份的神秘性提出了一种攻击方式，通过地理位置、时间和文本内容跨站预测用户的身份。该方法在Yelp, Flickr和Twitter三个数据集中验证，在用户保护了一些常规的隐私（比如用户名、邮箱、国籍等）的情况下，利用粗粒度信息便能以较高的准确率利用跨站数据将用户身份绑定。
    - 用户身份的定义为，连接同一个人在两个不同社交网络的账号。文中通过公开的API获取了Yelp, Flickr和Twitter三个社交网站中的5个固定地区的账号信息。同时，作者通过发邮件“朋友寻找”的方式，获取了ground truth的跨站指标。
    - 对于地理位置的参数信息，作者考虑了网格分类、行政区域划分和聚类的方式，并对三种方式的预测效果进行了评估，最终发现在粗粒度的地理位置信息下，聚类方式能更准确地跨站预测用户身份。采用相似度信息作为主要的参数指标，作者分别讨论了Cosine, Jaccard, and Hellinger distances三种相似度指标的选取，结果相近。
    - 对于能获取的准确时间的Flickr 和Twitter数据集，利用发布文本的时间相似性进行身份预测，最终的模型评估中，相似时间段超过4次是时间参数中最重要的指标。
    - 利用nlp的方式，对用户发布的文本信息进行分析，获取他们的书写习惯，如用户的常用词、大小写和标点符号等。将书写习惯作为预测用户身份的主要参数之一。
    - 文中对于上述三种参数分别进行了预测，单使用地理位置信息或时间区间信息便能获得较好的预测结果，而文本信息的评判贡献度小一些。结合了三种参数的预测模型，能获得最高的预测准确率。
    - 对于最终的预测，本文提出的方法能更比之前的方法更大量且准确地将不同社交网站中的用户账号连接。该方法不需要用户自定义的信息（比如用户名、邮箱、国籍等），使用粗粒度的地理位置参数和时间段便能攻击获取用户想要的匿名身份。
- rethink: 这篇文章是一个比较早期的跨站工作，利用社交媒体的公共数据将不同社交网络中的用户关联。文中通过粗粒度的数据信息，以较高的准确率预测跨站的用户身份。通过这篇论文，我主要学习到了两个部分，第一个是关于跨站数据中ground truth的获取有一定困难，这篇文章提供了一种方法，之后阅读这类文章时多关注这类数据收集方法。第二个点是参数选择的表述，文中对参数的选择进行了清晰的解释，并对选择原因使用实验数据进行了有说服力的解释。


#### 5.3.0.5. {Zafarani_10bits_CIKM15} Reza Zafarani and Huan Liu. "10 bits of surprise: Detecting malicious users with minimum information." Proc. of CIKM, 423–431. 2015.
- **分类：malicious user; social media; nlp;**
- 这篇文章是关于预测社交网络中恶意用户的一个较早的研究。该论文主要利用了极少的数据量，根据分析恶意用户的行为模式，使用nlp的方法，从用户的名字中提取了许多特征，使用回归模型分类，效果表现优异。该模型在类不平衡和不同学习算法中鲁棒性强，同时根据卡方分布提取的前十个由nlp生成重要特征也能达到很好的预测结果。
    - 这篇文章提出了一个根据少量信息预测恶意用户的方法，能做到实时的检测，能大大提高每日检测量。
    - 对于三种恶意用户的检测方法（feature-based，human-in-the-loop，social graphs），后两种方法一种需要大量地雇佣人工总体耗费大，另一种需要有社会图的强假设。这篇文章是基于feature-based的少数据量预测方法。
    - 选取用户的姓名作为最少的信息量，根据姓名来生成主要的参数。其他的辅助信息，如果能获取的话，也作为参数。
    - 根据前人的分析，对恶意用户五个方面的特性（复杂而多样，统计学上的不平衡，匿名，自相似、高效）分别使用不同的nlp方法，根据姓名进行生成参数。
    - 总体参数的二分分类accuracy达96%，仅适用第四点中前十个影响力大的参数，也能达到93%。说明从特性出发的用户姓名自然语言处理，便能获得足够预测恶意用户的信息量。
    - 同时验证了模型在类不平衡和不同学习算法中的鲁棒性。
- rethinking: 该模型针对了数据量不足的应用场景，考虑使用尽量少的信息量来预测社交网络中的恶意用户。这篇文章最大的亮点在于它的数据量少而且预测准确率高，达成该目标的重要方法在于对恶意用户特性的分析，以及不同nlp新方法的使用对于实用参数的提取。使用少的信息量提取参数的方法，在数据量少的数据集大都有应用前景，值得学习借鉴！对于模型的鲁棒性验证，也是一个比较常用且有说服力的工作。

#### 5.3.0.6. {Xia_WLINK_KDD19} Zenghua Xia, Qi Li, Chang Liu, Yong Cui, Neil Zhenqiang Gong, and Dawn Song. "Characterizing and detecting malicious accounts in privacy-centric mobile social networks: A case study." Proc. of KDD, 2012–2022. 2019.
- **分类：malicious user**
- 这篇文章是关于检测privacy-centric的移动社交网络中的恶意用户。它使用了大量的WLINK的真实数据，通过分析用户发出朋友请求的数据信息，使用DNN进行有监督的机器学习提取文本信息，最后使用随机森林进行分类，获得了高达99.5%以上的precision。这篇文章在特征提取中，考虑了鲁棒性的特征，并证明只使用鲁棒性特征在该模型下的分类仍然准确。最后，该模型被部署在实际的WLINK中，大大提高了每天检测恶意用户的数量的能力。
    1. 数据集来源WLINK中超过100万个有标签的用户。是第一个在privacy-centric移动社交网络中的大规模研究
    2. 这篇文章分析了恶意用户和正常用户在给他人发送请求时的行为，并依据分析结果设置了一些指标作为参数。使用了DNN的有监督学习和随机森林分类器，能高效且准确地识别恶意用户，达到99.5%的precision和98.4%的recall。
    3. 同时，通过定义一些恶意用户难以修改或难以使用的指标（比如绑定的银行卡数量）为鲁棒性指标，证明了只使用部分鲁棒性指标，仍能达到较高准确度。
    4. 该模型实际部署在了WLINK中，通过调整随机森林的threshold，以90%的precision达到更高的recall，同时保证了分类算法的高效。实际运用中，每日能检测的恶意用户数量相较于之前的方法提升了6倍。
- thinking:
    该论文考虑了一个当下较流星的privacy-centric的移动社交网络，使用用户的发送好友请求数据，进行恶意用户检测。该论文给我的第一印象就是结构清晰，文字表达好，非常易读，很值得学习。同时，考虑了参数的鲁棒性，这一点在之后的文章中可以借鉴实验。另外，这篇文章虽然是常见的检测恶意用户，但使用了一个比较新的场景，并且使用该场景中比较特殊的用户请求行为作为参数指标进行测量。最后实际应用的高效也是一个很大的亮点。


#### 5.3.0.7. {Wang_spam_bots_IFIP10} [190] Wang, Alex Hai. "Detecting spam bots in online social networking sites: a machine learning approach." IFIP Annual Conference on Data and Applications Security and Privacy. Springer, Berlin, Heidelberg, 2010.
- detect spam bots
- Decision Tree, Neural Networks, SVM, Na¨ıve Bayesian(best)

#### 5.3.0.8. {Lee_honeypots_SIGIR10} [610] Lee, Kyumin, James Caverlee, and Steve Webb. "Uncovering social spammers: social honeypots+ machine learning." Proceedings of the 33rd international ACM SIGIR conference on Research and development in information retrieval. ACM, 2010.
- social honeypots: collect data
- machine learning classifier using collected data by honeypots

#### 5.3.0.9. {Nilizadeh_multi_dataset_malicious_review_www19} Nilizadeh, Shirin, et al. "Think Outside the Dataset: Finding Fraudulent Reviews using Cross-Dataset Analysis." The World Wide Web Conference. ACM, 2019.
- detect malicious reviews with cross-dataset
- Random Forest model

#### 5.3.0.10. {DeepAuth_CIKM18} Amini S, Noroozi V, Pande A, et al. DeepAuth: A Framework for Continuous User Re-authentication in Mobile Apps.[C]. conference on information and knowledge management, 2018: 2027-2035.
- The main theme: to avoid the attacker get the private data when users keep authenticating. So they propose the DeepAuth to add the requirements for re-authenticate. But re-authenticate will add friction to interaction. 
- This framework can re-authenticate a user with 96.70% accuracy in the 20s.
- This model trained on a small dataset; there is only 10-13 minutes data.
- Model features: mobile sensor data, time domain, frequency domain.
- The figures to show classification results is clear.


#### 5.3.0.11. {sapienza_cyber_www18} DISCOVER: Sapienza et al. Mining Online Chatter for Emerging Cyber Threats, WWWW 2018
- a system to detect emerging cyber threat
- using online chatter data (text sequence)
- different media offering complement each other


#### 5.3.0.12. {Wang_waze_MobiSys16} Wang, Gang, et al. "Defending against sybil devices in crowdsourced mapping services." Proceedings of the 14th Annual International Conference on Mobile Systems, Applications, and Services. ACM, 2016.
- _co-location edges_: if two users encounter in the same location, they will create an edge.
- Attrack: false congestion and accidents and automatically rerouting user traffic
- propose a new approach to defend against Sybil devices based on _co-location edges_


#### 5.3.0.13. {Wang_twitter_imc13} Stringhini, Gianluca, et al. "Follow the green: growth and dynamics in twitter follower markets." IMC. ACM, 2013.
- patterns of the users involved in markets


#### 5.3.0.14. {Wang_clickstream_usenix13} Wang, Gang, et al. "You are how you click: Clickstream analysis for sybil detection." USENIX. 2013.
- take the inherent patterm of sybil actions in clickstream into consideration.

#### 5.3.0.15. {Wang_man_machine-USENIX14} Wang, Gang, et al. "Man vs. machine: Practical adversarial detection of malicious crowdsourcing workers." 23rd {USENIX} Security Symposium ({USENIX} Security 14). 2014.
- an empirical study of adversarial attacks against machine learning models in the context of detecting malicious crowdsourcing systems. 
- evasion attacks (workers modify their behavior):
    - optimal evasion scenario, complete knowledge
    - practical evasion models, limited (and often noisy) knowledge, and constrained resources.
- powerful poisoning attacks (where administrators tamper with the training set):
    - Injecting Misleading Samples
    - Altering Training Data
- entropy to characterize this regularity [16]
- imbalanced data doesn't effect the model performance since supervised learning.
- __Limitation__: develop hybrid systems that integrate input from multiple classifiers



#### 5.3.0.16. {App_Give_Away_UbiComp18} Tu, Zhen, et al. "Your apps give you away: distinguishing mobile users by their app usage fingerprints." Ubicomp 2018.
- [Group]
- This paper focus recognizing the uniqueness of app usage behavior and the impact of other factors , such as app set, spatiotemporal app usage fingerprints and user attrubutes. Results show that the app usage fingerprints are highly unique thus requiring more protection.



#### 5.3.0.17. {Trajectory_Recovery_www17}Xu, Fengli, et al. "Trajectory recovery from ash: User privacy is not preserved in aggregated mobility data." www, 2017.
- [Group]
- This paper recognizes a novel privacy problem in publishing mobility data and proves that even publishing aggregated mobility data could lead to a privacy breach in individuals' trajectories.


#### 5.3.0.18. {Sybil_user_review_ndss18} Zheng, Haizhong, et al. "Smoke screener or straight shooter: Detecting elite sybil attacks in user-review social networks." NDSS18.
- [Group]
- Detecting Elite Sybil Attacks in User-Review Social Networks.


#### 5.3.0.19. {alipay-cikm18} Liu, Ziqi, et al. "Heterogeneous Graph Neural Networks for Malicious Account Detection."[C] ICKM 2018. 
- [Detailed]


#### 5.3.0.20. {Sockpuppets_WWW17}Kumar S, Cheng J, Leskovec J, et al. An army of me: Sockpuppets in online discussion communities[C] WWW, 2017. 
- [Detailed]


#### 5.3.0.21. {crowdsybil_dectection_NDSS13}Wang G, Mohanlal M, Wilson C, et al. Social turing tests: Crowdsourcing sybil detection[J]. NDSS, 2013.
- [Detailed]


#### 5.3.0.22. {crowdturf_www12} Wang G, Wilson C, Zhao X, et al. Serf and turf:crowdturfing for fun and profit[C]// WWWW. ACM, 2012:679-688.
- [Detailed]


#### 5.3.0.23. {trust_transfer_www16}Venkatadri G, Goga O, Zhong C, et al. Strengthening weak identities through inter-domain trust transfer, WWW, 2016.
- [Detailed]


#### 5.3.0.24. {DeepScan_commag18} Gong, Q., Chen, Y., He, X. DeepScan: Exploiting Deep Learning for Malicious Account Detection in Location-Based Social Networks. IEEE 2018
- [Detailed]


# 6. 信息融合（Information Fusion）
## 6.1. cross-site
#### 6.1.0.1. {Goga_Reliability_KDD15} Oana Goga, Patrick Loiseau, Robin Sommer, Renata Teixeira, and Krishna P. Gummadi. "On the reliability of profile matching across large online social networks." Proc. of KDD, 1799–1808. 2015.
- 分类：user linkage identity; reliability; malicious detect; social network; cross-link
- 这篇论文，研究了社交网络中跨站用户身份认定问题，从可靠性角度入手，提出了一个基于概率的ACID模型对用户资料进行特征提取，处理信息一致性、重复信息过滤和恶意用户（机器人用户）的检测，降低错误预测（recall）。该方法在6个社交网站的数据集上进行验证，说明了前人方法在匹配可靠性上存在的问题，并验证了文中该方法能提供更为可靠的跨站身份认定问题。
    - 这篇论文，研究了社交网络中跨站用户身份认定问题，分析了前人工作对于匹配可靠性的忽略，提出了ACID模型旨在提高用户身份认定的可靠性。
    - 文章提出的ACID模型中，考虑了用户资料中可获取性、一致性、非机器人用户、可辨别性四个角度提取特征，提出一个基于概率的模型，利用相似性进行匹配。该模型在过滤机器人用户时用了相似性概率的假设，如果在可辨别性满足的情况下， 在同一个社交网站存在多个高概率的匹配用户，就过滤掉所有类似的用户，认为其是机器人用户。
    - 在6个实际社交网站中进行实验。实验的用户身份认定Ground truth以两种方式获取，一种是通过新增朋友的发邮件方式绑定用户，另一种是根据用户自定义的跨站主页链接。
    - 实验结果证明，前人的方法在保证高precision时会导致很低的recall，出现大量的错误匹配。同时，验证了ACID模型能大大降低错误匹配的概率，提高recall，从而提高跨站用户身份认定的可靠性。
- 感想：这篇文章研究了跨站的用户身份认定。不同于之前看的文章方法，这篇文章更多考虑的是减少匹配的错误，避免和机器人用户匹配，提高recall，提高可靠性，思路上比较新颖，这种可靠性的思考在找survey相关工作时需要寻找更多相关文章，也是未来工作可以思考的contribution。同时，简单的恶意用户/机器人用户筛选方法，对于清洗数据集上也有很大的好处，之后在清洗数据工作中可以借鉴使用。


#### 6.1.0.2. {Wang_Recommending_SIGIR17} Xiang Wang, Xiangnan He, Liqiang Nie, and Tat Seng Chua. "Item silk road: Recommending items from information domains to social users." Proc. of SIGIR, 185–194. 2017.
- 分类：recommendation; embedding; social network; cross-link
- 这篇论文，研究了异质网络中社交推荐问题，通过整合信息结构网络中的用户特征，在社交网络中对用户进行推荐。信息结构网络的数据集从Trip.com独立收集，并使用已公开的Facebook和Twitter数据集作为社交网络，对文中提出的三个问题进行详细实验，实验结果证明结合了跨站信息的该方法表现更优。
    - 这篇文章研究异质网络中的社交推荐问题，考虑的跨站为用户信息网站和社交网站，分别考虑用户-资料关系和用户-用户关系，在社交网站中进行好友推荐。
    - 文章提出的NSCR模型中，使用属性可感知的深度协同过滤模型提取信息结构网络中的用户-资料关系，在embedding层通过用户特性与社交网络中的用户进行绑定，预测社交网络中的用户关系。
    - 信息结构网络的数据集从Trip.com独立收集，社交网络数据集使用已公开的Facebook和Twitter，收集了超过1000个有跨站信息的用户和他们的资料信息、好友信息。
    - 文中提出了对比前人方法的表现、不同超参设置、不同隐藏层设计对实验结果的影响三个问题，并在实际数据集中详细实验分析，回答了上述三个问题。NSCR模型表现好于之前的社会推荐模型，超参的不同设置对实验结果影响较大，隐藏层深度和embedding size对结果的影响时非线性的凸函数。
- 感想：这篇文章研究了跨站的社交推荐问题。这篇文章的跨站不仅仅考虑了异质的社交网络，还考虑了不同的信息结构网络，是一种较为新颖的跨站研究方向。在embedding利用用户进行跨站信息传输，能节省较多的计算开销，在之后跨站预测工作中也可以考虑类似方法。在实验节的表达上也很值得学习，利用提出问题的方式简要概述了实验需要验证的问题，后续的一一解答显得逻辑性很强。

#### 6.1.0.3. {Wang_Online_SIGIR19} Weiqing Wang, Hongzhi Yin, Xingzhong Du, Wen Hua, Yongjun Li, and Quoc Viet Hung Nguyen. "Online User Representation Learning Across Heterogeneous Social Networks." Proc. of SIGIR, 545–554. 2019.
- 分类：user identity linkage; embedding; social network; user behavior;
- 这篇论文，研究了异质社交网络中用户身份绑定和用户行为预测问题，提出了一个MV-URL模型，调和网络内部不同潜在空间的异质性，使用对角线和谐嵌入矩阵将嵌入从一个潜在空间投影到另一个潜在空间，并获得对应的embedding层。同时，该模型在两组实际数据集中测试了用户身份绑定和行为预测，对比了LINE、Node2Vec等不同的方法和自身的三种不同假设的模型，说明该模型的表现优越性，并验证了不同考虑角度对结果的影响。
    - 这篇文章以考虑异质社交网络中用户身份绑定和用户行为预测问题为切入点，提出了一个MV-URL模型，主要解决不同潜在空间中的网络异质性问题，构建一个embedding层。
    - 该模型先考虑挖掘了单一视图中的社会信息和用户偏好信息，后使用注意力机制的学习模型整合不同视图，构建了一个统一的目标函数，以支持更可靠的用户表达，从而获得更准确地低维度特征。
    - 该模型针对用户身份绑定和用户行为预测问题，在两个实际的公开数据集中进行了研究，并根据“假设不同网络潜在空间不同”，“不使用对角和谐嵌入矩阵”，“忽略共同关系独立训练每个社交网络”设计了三种对比版本以验证不同模块对实验结果的影响。
    - 实验结果表明，MV-URL的表现好于LINE、Node2Vec等经典方法，同时三种对比实验的模块都对实验结果有很大影响，影响最大的为“忽略共同关系独立训练”。
- 感想：这篇文章提出了一种基于构建一支社交网络潜在空间构建embedding层的方法。一个值得学习借鉴的地方是注意力机制的引入，该方法可以考虑运用在之后的工作中。另一个亮点是对于模型中不同模块的效果验证，每个模块不仅描述了减少某些参数，而且清晰展示了每个模块的功能在模型中和结果中的分别影响，该对比实验的实验方法和描述方法很值得学习。



#### 6.1.0.4. {Riederer_Linking_WWW16} Chris Riederer, Yunsung Kim, Augustin Chaintreau, Nitish Korula, and Silvio Lattanzi. "Linking users across domains with location data: Theory and validation." Proc. of WWW, 707–719. 2016.
- 分类：cross-link; user identity linkage; spatio-temporal; social network;
- 这篇论文，研究了社交网络中的跨站用户身份认定问题，提出了基于稀疏地理位置数据的相似性模型进行用户身份认定。文中严格证明了该方法提出的最大化匹配方式能通过对于几个参数的最大化学习而找到对应解。在实验中的验证说明了该方法使用了较为简单，消耗小的训练模型便可以获得很高的预测准确率，同时文章根据结果非常详细地说明了模型中可以继续研究的方向，有很好的继续研究价值。
    - 这篇文章提出了一个基于稀疏地理位置数据的相似性模型，区别于之前的模型，它第一次使用了基于用户时空信息进行跨站用户身份认定。
    - 文中对于时空数据按照区域划分和时间段划分的思路，对用户的活动轨迹数据进行聚类，提出了一种简单但实用的特征提取，并说明是用该特征建立的模型鲁棒性强。
    - 文中基于模型的构架，非常详细说明了模型中考虑到的和未考虑到的问题所在，并详细给出了大量未来工作的可能方向。
    - 作者通过数学推导，对模型的相似度最大化指标的定义和计算进行优化，并严格证明了优化后的参数学习最优时，一定对应着找到最大化指标。
    - 在多个数据集上的比较结果说明了该方法在简单和高效的情况下，仍获得了很高的预测结果。并利用了详细的案例分析说明了不同数据集上的成功表现。其中有一个数据集是比较敏感的“用户通话-信用卡记录”数据集，文中也仔细阐述了该数据集是如何保证用户隐私的情况下获取和使用的。
- 感想：这篇文章属于跨站用户身份认定文章类型，第一个使用基于地理位置的稀疏数据方法进行用户身份认定。这篇文章的takeaways很多，第一个是对于数据类型的选取，这篇文章就选用了别人没用过的地理位置和时间数据进行跨站用户认定，多样化的选取方式是很好的新问题发现和新思路研究。第二点学习的地方在于模型的鲁棒性，该模型在建立时兼顾了计算复杂度、参数数量少和鲁棒性，使得它的应用范围很广，鲁棒性是一个在之后工作中建立模型时可以多考虑的贡献。第三个学习到的地方在于敏感数据集的使用，如果能获得一些别人没用过的非公开数据集，且可能涉及到隐私度较高的数据，应该像这篇文章一样，详细说明数据获取方式和使用时对用户隐私数据的保护。第四个学习点在于，对于某类问题首次定义时，问题目标与训练参数的转换严格证明是很有意义的，否则很难说明一个新的问题中该模型的最优解能与问题的最优解对应，不过这块工作数学要求较高，谨慎借鉴。最后一点在于未来工作，这篇文章对于模型中很多可以多考虑变化、更多研究的地方都有详细的说明和有意义的未来工作展望，这应该是很有助于提高引用量，但也可能带来堵住了自己同一个idea多发论文的方向，这个trade-off在以后写文章时需要考虑清楚。



#### 6.1.0.5. {Chen_Exploiting_CIKM17} Wei Chen, Hongzhi Yin, Weiqing Wang, Lei Zhao, Wen Hua, and Xiaofang Zhou. "Exploiting spatio-temporal user behaviors for user linkage." Proc. of CIKM: 517–526. 2017.
- 分类：cross-link; user identity linkage; spatio-temporal; social network;
- 这篇论文，研究了社交网络中的跨站用户身份认定问题，利用了用户活动轨迹中连续的时间和地理位置资料，提出STUL模型，并对不同的时空特征分配不同的重要性参数，利用相似度指标进行身份认定。
    - 这篇文章提出了一个叫STUL模型，区别于之前的模型，它使用的时空数据是连续的，且特征的选取不是同等重要的。文中说明了时空数据的重要性。
    - 从用户的活动轨迹、停留地点、滞留区域，利用一种较新的基于密度的聚类方式，提取了用户的空间特征，并选择相似性作为两个用户的评价标准。
    - 使用混合高斯模型，从全局时间和本地时间两个方面提取时间特征。全局特征考虑具体的地点和时间关系，而本地时间特征考虑了区域内的用户停留时间分布。
    - 在三对真实数据集上进行实验，结果表明利用连续和非等重要的时空数据特征，能比之前的工作表现更好。
- 感想：这篇文章属于跨站用户身份认定文章类型，利用包含时空数据的用户资料，获得很好的预测准确率。该方向在用户跨站身份认定中比较新颖，这应该是这篇文章最大的亮点。对于时空特征使用不同的特征提取方式，这两种方法都简单实用，对于之后遇到时空数据可以考虑借鉴使用。整篇文章的行文思路很流畅，尤其对于时空特征如何提取，如何合并使用表达清晰，值得借鉴学习！

#### 6.1.0.6. {Zhang_Connecting_KDD15} Yutao Zhang, Jie Tang, Zhilin Yang, Jian Pei, and Philip S. Yu. "COSNET: Connecting heterogeneous social networks with local and global consistency." Proc. of KDD, 1485–1494. 2015.
- 分类：cross-link; user identity linkage; energy-based model; consistency
- 这篇论文，研究了社交网络中的跨站用户身份认定问题，研究场景着眼于一致性，包括用户信息的一致性，网络结构的一致性和多网站用户身份认定问题的一致性。根据三种一致性定义了一个统一的势能方程作为目标函数，并利用拉格朗日解耦公式使得模型学习过程能高效的并行。实验证明了该方法相比于之前的工作有显著提升，案例分析也说明了一致性研究对于模型提升的帮助。
    - 这篇文章提出了一个叫COSNET的模型，研究社交网络中的跨站用户身份认定问题，针对用户资料的不平衡、网络结构的相似性和多网站认定问题的复杂性，考虑以三者的一致性作为切入点，进行模型的构建与训练。
    - 针对用户资料的一致性、网络结构的一致性和多网站身份认定的一致性，分别解释了一致性的表现和对应的规范定义并构建势能方程。将三个势能方程合为一个统一的优化函数后，利用数学方法将其转别为藕合函数，再使用拉格朗日解耦方法对问题进行简化，使其能高效地进行并行处理和训练。
    - 在两大类真实数据集上进行实验，COSNET的表现都远好于之前的跨站预测方式。同时，详细的案例分析说明了三种一致性的特征指标对于结果的优化效果。另外，文中也分析了不同模型对于专家检索等实际应用场景的表现，说明了COSNET的实用性和现实意义。
- 感想：这篇文章属于跨站用户身份认定文章类型，切入点在于一致性研究。首先这个切入点选择得很好，能依次建立使能方程作为优化函数。其次，对于优化函数的藕合转换并解耦方法使得模型能高效地进行的训练，并行方法是一个未来可以借鉴的方向，计算技能高效也是一个很值得考虑的贡献。最后，实验中有两个地方值得借鉴学习，一个是指标选取除了容易量化的准确率等，还可以结合具体实用场景分析；另一个是，通过案例分析说明一致性特征选择的必要性，使得文章的出发点更有说服力，特征选择更有可解释性。



#### 6.1.0.7. {Zhou_Identification_TKDE18} Xiaoping Zhou, Xun Liang, Xiaoyong Du, and Jichao Zhao. "Structure Based User Identification across Social Networks." IEEE Transactions on Knowledge and Data Engineering 30, 6: 1178–1191. 2018.
- 分类：cross-link; user identity linkage; network structure;
- 这篇论文，研究了社交网络中的跨站用户身份认定问题，提供了一个基于用户朋友关系的网络结构信息进行跨站认定的解决方案。提出的模型使用了无监督学习，并在三个经典的合成数据集和两个实际网络数据集进行了实验论证。
    - 这篇文章提出了一种无标签的跨站社交网络用户认定场景，提出了一种基于用户关系的网络结构信息进行相似性比较从而实现用户认定的解决方案，该统一的模型FRUI-P能解决不同跨站网络的研究。
    - 该模型先使用了random walk方法进行朋友关系的特征提取并建立一个正样本模型，并针对该模型提出了一个相似性朋友关系矩阵和其对应的优化函数，用数学方法对其计算复杂度进行优化和分析。并利用该相似性矩阵进行用户身份绑定。
    - 在三个经典的合成数据集和两个数据集中进行了对比实验，分析了不同参数选取对于结果的影响，该方法的实验表现都远好于之前的工作。
    - 文章同时分析了算法的时间复杂度，和对应其可以运用的数据集规模，并说明了该方法能高效地为有前置信息的模型提供可靠地前置信息量。
- 感想：这篇文章属于跨站用户身份认定文章类型中，基于网络结构的判断方法。这篇文章一个很大的亮点在于其能在无监督和零知识的环境中，仅基于社交网络中的朋友关系理论构建的网络结构，便获得了较好的预测结果。这篇文章对于优化函数的定义，计算和数学优化降低复杂度都是很出彩的工作，虽然我可能做不出这样的工作，但是可以积累一些优化函数的方法和思路，将来可以使用一些更复杂的优化函数或者有较为确切时间复杂度的迭代方法。

#### 6.1.0.8. {Mu_Linkage_KDD16} Xin Mu, Feida Zhu, Ee Peng Lim, Jing Xiao, Jianzong Wang, and Zhi Hua Zhou. "User identity linkage by latent user space modelling." Proc. of KDD, 1775–1784. 2016.
- 分类：cross-link; user identity linkage; social network; online generation;
- 这篇论文，研究了社交网络中的跨站用户身份认定问题。相比于之前的工作，这篇文章考虑多网站跨站认定而不只是两个网站之间的匹配关系，**同时考虑了随着网站数据集增大后对于跨站预测的影响**。在实际的数据集中对比了经典的跨站研究，该方法在多网站认定中表现优异，且能在线预测随着社交网络增大带来的新用户认定问题。
    - 这篇文章先说明了一种更基于现实的网络情况，即一个用户可能在较广的一些社交网络中有部分账号。现有工作对于多网站认定是双网站匹配绑定，并根据一定顺序进行用户身份认定。
    - 文中提出ULink模型，针对多网站认定问题设置了一个统一的目标函数，并考虑分别使用CCPC和APG方法分别对该目标函数进行优化。另外，提出了一个ULink-ON模型，在保持ULink的参数矩阵基本不变情况下，使用拉格朗日数乘法计算半正定的时间矩阵，并将其合并到ULink的目标函数中。
    - 在四个不同的实际数据集中进行实验，对比了很多较新的方法，说明了传统的双网站匹配方法在多网站身份认定中，由于网站选择顺序不同会造成不同的预测结果，鲁棒性很差，但ULink模型中不仅预测结果好，而且实验结果的鲁棒性强。同时，用ULink-ON对于网站用户量增大的在线用户身份认证的需求，在做到高效的同时也获得了较好的绑定准确率。
- 感想：这篇文章最大的贡献在于它找到了**一个之前工作无法很好迁移的多网站用户身份认定问题**，分析了因选择顺序不同之前方法的鲁棒性差和准确率低。这种由双网站扩展到多网站的问题，除了用户身份认证外，在其他领域也可以作为研究方向的思考和探索。另一方面，对于模型可以线上部署，对于社交网络扩大数据集增大带来的改变能及时响应而不需要重新训练，也是一个很好的社交网络的研究方向。

#### 6.1.0.9. {Zhang_purchase_WWW13} Yongzheng Zhang and Marco Pennacchiotti. "Predicting purchase behaviors from social media." Proc. of WWW, 1521–1531. 2013.
- 分类： cross-link; social media;
- 这篇文章通过对社交媒体（Facebook）上的用户社交账号和喜欢分类等数据的分析，预测用户在购物网站上（eBay）的购物分类行为。社交媒体上获取了一万多条用户数据，利用eBay用户提供的连接进行身份认定后，仅适用社交媒体中的数据，在eBay上冷启动进行预测，使用多种传统机器学习方法对参数重要性和预测结果进行统计分析。
    - 这篇文章使用社交媒体上的用户页面信息和喜欢分类信息，提取了人数统计参数、喜欢页面、分类参数三类重要的参数，对eBay网站的购物行为进行分类。总共收集了匿名的一万多条用户数据。
    - 跨站的分析绑定运用了eBay用户自定义的网络连接。在电子商务网站上的问题定义为冷启动问题，即已知的数据仅为社交媒体上的数据，购物网站的购物分类喜好为预测值。
    - 使用了多种传统的机器学习模型，对由社交媒体多参数构建的概率模型进行进行训练，以概率排序的方式对用户的购物分类倾向进行表示。线性回归和支持向量机模型的表现较好，同时对参数的重要性进行了分析，兼考虑了电子商务网站从社交媒体获取该数据的消耗。例如，人数统计参数虽然对预测正确率影响较小，但是数据获取容易，仍是一个使用的参数选取。
- 感想：这篇文章较大的亮点为思路上的创新，在当时这是第一个仅用社交媒体数据来预测电子商务网站的消费行为，在近年这类工作已经被大量使用，是一个很有前瞻性以及现实意义的文章。数据集的特殊性也是该论文的一个主要贡献，这也是企业论文常见的亮点，较难借鉴。一个思考点在于文中对参数影响和获取存储难度的trade-off进行了讨论，这个在企业实际运用中有重要意义。如果能对参数获取和存储进行量化，在之后的工作中讨论该trade-off也是一个思考方向。



#### 6.1.0.10. {Dong_link_ICDM12} Yuxiao Dong, Jie Tang, Sen Wu, et al. "Link prediction and recommendation across heterogeneous social networks." Proc. of icd, 181–190. 2012.
- 分类： cross-link; link prediction; recommendation, transfer_learning
- 这篇文章通过对**用户行为的研究，配合社会学的理论**，考虑将跨站问题的网络结构和用户行为通过社会学理论进行绑定。对于新提出的基于因素排序的用户朋友推荐模型，辅助以上述的跨站信息，进行迁移学习，以达到更准确的推荐成功率。
    - 这篇文章提出了**一种基于因素排序的用户链接预测模型**，用以解决社交网络中的用户推荐问题。根据对点和边的转换，定义了一个目标函数，并使用梯度下降的方法最大化该函数的相似度。该方法的结果比之前的链接预测模型有更高的准确度。
    - 利用社会学的理论，文中详细说明了每个参数的选择理由。同时，利用社会学理论中各种三角关系的相似性的理论说明和实验分析，将两个不同个社交网络的目标函数合并成一个，并使用迁移学习的方式利用跨站信息进行预测。
    - 在四个不同的数据集上进行了测量研究，并对比了12种跨站迁移学习的情况。在大多数情况下，迁移学习的预测准确率都比baseline模型更好，也好于文中之前提出的基于因素排序的预测模型。
- 感想：这篇文章运用了社会学知识，在异质社交网络进行迁移学习，对用户提供更精确的朋友推荐。和昨天读的文章一样，该文章也运用了交叉学科的理论，用来将不同社交网站中的信息归类和绑定。多理论结合的交叉学科方法，能提取出很多有意义的参数以及新的相似点，对于迁移学习、相似类比、跨站研究等都有很大意义。相比于之前阅读的文章，这又是一种新的跨站研究方式，运用的是迁移学习，对于如何将跨站的异质信息在一个场景中使用也是很好的思路方向，值得学习借鉴。



#### 6.1.0.11. {Zafarani_Connecting_KDD13} Reza Zafarani and Huan Liu. "Connecting users across social media sites: A behavioral-modeling approach." Proc. of KDD, 41–49. 2013.
- 分类：feature engineer; cross-link; user identification, cross-discipline 
- 这篇文章通过对用户行为的研究，配合生理学和社会学的知识，研究了跨站点的用户身份认定问题。文中从人类生理局限、外部因素、内源因素三个方面，通过研究用户行为找出用户在使用社交网络式的冗余信息，提取了特征并使用朴素贝叶斯的概率分类方式进行建模和实验，并分析了提取的特征的重要性。
    - 这篇文章结合了**社会学、行为学等多学科的知识，研究了用户在起名、记忆等方面行为特征**，并通过对用户行为的研究进一步研究跨站用户身份绑定问题。
    - 文中详细地说明了每个参数的选择方法和原因，用小标题的方式清晰地说明了每个参数的选择。从人类生理局限、外部因素、内源因素三个方面提取了参数。
    - 他们使用网上用户自己认证标定的跨站信息，对社交网络、博客、论坛的用户数据进行了收集。使用朴素贝叶斯的方法进行概率分类建模，并对参数的重要性进行了排序。
    - 该模型的结果比baseline工作有着显著的预测成功率提升，同时选择的十个最重要参数能达到和所有参数差不多的训练效果。同时，文中对于参数和数据数量的选取和结果影响也进行了分析研究。
- 感想：这篇文章作为早期的跨站用户绑定问题，分析得很全面。跨学科的研究方式不仅新颖，而且能帮助找出很多在已被验证的有意义的参数。该文章总体写作逻辑非常顺畅，尤其在于参数工程部分的参数提取（去看了一下作者，引用最高的几篇文章都是关于参数工程方面的工作），这部分可以多多学习如何提取参数，以及如何写参数的选取逻辑（下周准备看这个作者的文章）。图6数据数量、参数数量的影响的三维画图方法表述得很清晰，在绘图上也可以多多收集觉得很酷炫的图示方法。


#### 6.1.0.12. {Nguyen_cost_ICDM13} Dung T. Nguyen, Huiyuan Zhang, Soham Das, My T. Thai, and Thang N. Dinh. "Least cost influence in multiplex social networks: Model representation and analysis." Proc. of ICDM, 567–576. 2013.
- 分类：cross link; influence; multi-to-one; relay metric;
- 这篇文章利用了跨站的社交分享网站的数据，研究社交网站中**影响成本最小问题**。文中提出了两种模型，分别为几乎无损和损失较大的方法，将多个社交网络结构图合并为一个网络结构，再通过单一网络的研究手段来探求影响成本最小问题。同时，文中提出了一种新的测量指标influence relay，用来评价跨站影响成本中的影响依赖关系。在多个实际的社交分享网站进行了实验，该方法相对于之前的做法能以达到更小的影响成本。
    - 针对影响成本最小问题，文中根据实际的情况出发（一个用户可能在不同网站发同一条post），将不同的社交分享网站数据共同作用来实现更低的影响力成本。
    - 文中根据数学理论的提出和证明，提出了无损和有损两种方法，通过跨图点和边的连接关系以及图中信息传播的时间重定义，将两个乃至多个社交网分享网站的用户关系结构图合并为一个网络结构，在该网络结构上，利用单一网络的已有研究方法来求取影响成本最小问题的解。
    - 对于有损和无损的两种图连接方法，分别实验了两种方法在影响成本降低、测量时间和消耗资源上的对比，并得出结论。
    - 文中提出了一种新的测量指标influence relay以评价跨站成本中影响的依赖关系，找出对用户从非激活态到激活态的最大影响来源。
    - 在5个不同的社交分享网站（如Foursquare）进行了跨站的数据收集和实验研究，显示在相同影响力因子下，跨站的方法需要更小的成本。而当所有数据都被运用上时，跨站的方法也能带来最大的影响力。
- 感想：这是我阅读到的第一篇，将跨站网络信息直接通过图结构合并为一个图结构，并使用单一网络的较好方法进行实验和测量的文章。这种想法能很好地利用单一网络的最新最好的研究成果，但从这篇文章看数学要求很高，通过多阅读文章了解这种图合并是否必须要求较高水平的数学推导。文章基于图合并也从而提出了基于不同社交网站的依赖关系指标，这种跨站的依赖关系的研究方向，也值得在之后的学习与工作中去思考和尝试使用。



#### 6.1.0.13. {Liu_HYDRA_SIGMOD14} Siyuan Liu, Shuhui Wang, Feida Zhu, Jinbo Zhang, and Ramayya Krishnan. "HYDRA: Large-scale social identity linkage via heterogeneous behavior modeling." Proc. of SIGMOD, 51–62. 2014.
- 分类：cross-link prediction; social media; general model; multi-object optimization
- 这篇文章提出了一种比较通用的模型HYDRA:，将不同社交网站中相同用户不同账号进行绑定。主要的异质信息来源有两个部分，一个是用户行为相似性，另一个是社交网络社群核心结构的一致性。最后对上述两个特征提取了两个目标函数，并采用数学性较强的多目标优化函数进行半监督学习。最终的模型被理论证明是对传统半监督学习的都能应用的通用模型，并能通过凸函数优化得到有效的学习与解决。在七个不同社交网站的大量实验结果也证明了HYDRA模型的优越。
    - 面对社交网站收集数据的困难性，文中提取异质信息来对不同社交网站的用户信息进行绑定。异质信息的手机来源包括用户的文本信息、头像的图片和用户名、通过长期训练获得的话题和心情偏好分布、用户的打字习惯、时空数据，以及用户的转帖信息等。信息来源十分丰富，通过比较不同社交网站账号的相似性来绑定用户。
    - 然而，数据收集中可能存在一些挑战，比如数据不全、数据错误、数据不平衡等。对于这样的数据，文中提出了一种基于图结构的分析。对于账号所在的核心社群（交往比较亲密的好友群等），利用不同社交网站中图结构的强一致性，填充缺少的信息数据。
    - 对于上述用户画像相似性和图结构一致性，分别给出两个目标函数，使用数学的方法将它们构建成一个多目标优化的问题，进行半监督训练。它们的数据来源于社交网站的连接提供，以及建立网站时使用的登录ip地址、住宅地址ip和用户的公民ID（身份证）。
    - 使用新浪微博、腾讯微博、人人网、豆瓣点评、开心网五个中文社交网站中五十万个用户的数据，以及Twitter和Facebook上的五十万个用户数据进行实验。实验结果证明HYDRA能处理大量的数据情况，并有较好的表现。同时，实验证明HYDRA鲁棒性较强。
- 感想：相比于之前阅读的一些跨站用户绑定文章，这篇文章提出了更多面的对不同网站异质信息的使用，这些方法都可以应用到之后的工作中，特别值得注意的是通过图结构分析社群模型来补充缺失信息的方法，可推广性较好。文中的数据集精确度和大规模化，是这篇文章非常大而且门槛高的一个贡献。多目标函数优化的工作看起来难度，但对复杂的目标函数情况下应用前景较好，可以更多了解

#### 6.1.0.14. {Kong_archer_CIKM13} Xiangnan Kong, Jiawei Zhang, and Philip S. Yu. "Inferring anchor links across multiple heterogeneous social networks." Proc. of CIKM, 179–188. 2013.
- **分类：cross-link prediction; ; social media; preference; one-to-one relations;**
- 这篇文章通过跨站研究，用来将不同社交网站的用户连接在一起，主要的预测目的是找出一对一的关系。运用了社交网络中的异质数据，提出一种类似二分图匹配的概率模型，在Twitter和 Foursquare中获得了较好的预测结果，案例分析也佐证了模型的优异性。
    - 这篇文章与之前工作**比较大的不同在于**，从预测社交网站账号many-to-many和one-to-many的预测模型关系转换为**one-to-one的一对一关系**，对参数的选取提出了较大的要求。
    - 数据集来源为Twitter，Foursquare，用户自定义的连接信息获得ground truth，根据图信息获得用户的好友关系与他们的亲密程度表，用类似二分图匹配概率模型的推断用户的锚链接情况。
    - 参数选择了异质的可以广泛运用于不同网站中的时空信息和用户的推文信息。
    - 结果表明在预测一对一关系时，文中的MNA模型能获得更精确的预测结果。案例分析佐证了通过用户邻居关系的概率模型，能很好地预测跨站的用户关系。
- 感想：这篇文章是利用社交媒体的图数据，使用类似二分图匹配的概率模型对社交网络的用户关系进行预测。这篇文章主要考察了社交网站中的图关系即用户的好友关系，辅助以时空和推文参数，使用基于匹配的概率模型进行用户绑定预测。这篇文章是年份较早的文章，数据量较小，文中也提及了，当数据量大时，这种匹配的效果会变差，而且训练时间较长，近年的工作一般用更高级的图结构代替，图数据的应用是一种很好的模型构建方式。对于异质信息的参数获取和选择对跨站研究意义重大，往往不同站点中大量参数不能共享，文中提出的时空数据和用户推文信息在年代较新的文章中仍有在使用，将通过多阅读文章，学习并积攒不同种跨站异质网络的参数的选择方式。案例分析的方法也值得学习借鉴。


#### 6.1.0.15. {Lee_MultiLDA_WWW17} Roy Ka-Wei Lee, Tuan-Anh Hoang, and Ee-Peng Lim. "On Analyzing User Topic-Specific Platform Preferences Across Multiple Social Media Sites." Proc. of WWW, 189–190. 2017.
- **分类：cross-link prediction; topic; social media; preference;**
- 这篇文章通过跨站研究，分析用户的post行为，提出了一种基于LDA的MultiLDA模型，能对于用户发出的post分类成合适的话题，并针对不同的社交媒体，将用户的话题提出个性化的倾向性预测。预测结果总体表现较好，案例分析也展示了该方法的准确性。
    - 首先，作者提出了一种基于概率分布的Gibbs sampling方法，首先将单个单词根据概率模型sampling到某个话题。接着，再使用类似的模型将一个post中的文本信息分类到话题中。
    - 数据集来源为Twitter，Instagram和Tumblr。通过用户提供的用户名、自我介绍、公开链接等方式，获取了地址位于新加坡的跨站用户。除了收集post中的文本信息，还使用Clarifai的方法对post中的图片和视频进行类型标定，并将其也作为word进行分类。
    - 使用LDA的方法，对上述概率分类公式中的参数进行学习。对于每个用户，分析不同类型的话题倾向于发布的社交平台。同时对于不同平台中的话题，进行分析。
    - 案例分析，具体说明之前方法错误的主要原因以及错误的严重性，说明MultiLDA能避免大多数这类情况。同时，找出MultiLDA模型的预测错误例子（训练集没有这类话题，但是测试集有，相当于随机分类了），统计出整个数据集中该情况的发生率少于5例。
- rethink：这篇文章是利用社交媒体的用户的公开链接对用户进行关联，预测了用户在不同社交媒体上的话题倾向性。这篇文章的跨站用户身份绑定方式较为简单，为直接通过用户的自定义信息直接绑定。方法上总体更偏向数学的概率推导，学习到的主要有两个方面。一个方面是社交媒体上对于不同数据的使用，对于post信息，该方法参数选取了文本、图片、视频信息。另一个方面是案例分析，对于具体的用户和模型行为进行统计分析，能更好地解释方法的优越性，并能更好地思考提升方向。

#### 6.1.0.16. {Goga_innocuous_WWW13} Oana Goga, Howard Lei, Sree Hari, et al. "Exploiting Innocuous Activity for Correlating Users Across Sites." Proc. of WWW. 2013.
- **分类：cross-link prediction; user behavior;**
- 这篇文章通过跨站研究，对用户尝试在不同网站保持身份的神秘性提出了一种攻击方式，通过地理位置、时间和文本内容跨站预测用户的身份。该方法在Yelp, Flickr和Twitter三个数据集中验证，在用户保护了一些常规的隐私（比如用户名、邮箱、国籍等）的情况下，利用粗粒度信息便能以较高的准确率利用跨站数据将用户身份绑定。
    - 用户身份的定义为，连接同一个人在两个不同社交网络的账号。文中通过公开的API获取了Yelp, Flickr和Twitter三个社交网站中的5个固定地区的账号信息。同时，作者通过发邮件“朋友寻找”的方式，获取了ground truth的跨站指标。
    - 对于地理位置的参数信息，作者考虑了网格分类、行政区域划分和聚类的方式，并对三种方式的预测效果进行了评估，最终发现在粗粒度的地理位置信息下，聚类方式能更准确地跨站预测用户身份。采用相似度信息作为主要的参数指标，作者分别讨论了Cosine, Jaccard, and Hellinger distances三种相似度指标的选取，结果相近。
    - 对于能获取的准确时间的Flickr 和Twitter数据集，利用发布文本的时间相似性进行身份预测，最终的模型评估中，相似时间段超过4次是时间参数中最重要的指标。
    - 利用nlp的方式，对用户发布的文本信息进行分析，获取他们的书写习惯，如用户的常用词、大小写和标点符号等。将书写习惯作为预测用户身份的主要参数之一。
    - 文中对于上述三种参数分别进行了预测，单使用地理位置信息或时间区间信息便能获得较好的预测结果，而文本信息的评判贡献度小一些。结合了三种参数的预测模型，能获得最高的预测准确率。
    - 对于最终的预测，本文提出的方法能更比之前的方法更大量且准确地将不同社交网站中的用户账号连接。该方法不需要用户自定义的信息（比如用户名、邮箱、国籍等），使用粗粒度的地理位置参数和时间段便能攻击获取用户想要的匿名身份。
- rethink: 这篇文章是一个比较早期的跨站工作，利用社交媒体的公共数据将不同社交网络中的用户关联。文中通过粗粒度的数据信息，以较高的准确率预测跨站的用户身份。通过这篇论文，我主要学习到了两个部分，第一个是关于跨站数据中ground truth的获取有一定困难，这篇文章提供了一种方法，之后阅读这类文章时多关注这类数据收集方法。第二个点是参数选择的表述，文中对参数的选择进行了清晰的解释，并对选择原因使用实验数据进行了有说服力的解释。

#### 6.1.0.17. {Nechaev_type_prediction_CIKM18} Yaroslav Nechaev, Francesco Corcoglioniti, and Claudio Giuliano. "Type prediction combining linked open data and social media." Proc. of CIKM, 1033–1042. 2018.
- **分类：cross-link prediction; user behavior;**
- 这篇文章是关于跨站问题的预测研究，通过结合如wiki等知识网站和社交媒体中的数据，对知识网站中条目的分类问题进行了更精确的预测。文章使用RDF embeddings技术从知识网络中的链接中获取信息，并结合了Twitter等社交媒体的用户数据，找到了一种feature和ground truth的连接桥梁，并在不同的知识网站中对条目预测进行实验，结果表明跨站的信息能显著提高类型的预测准确率。
    - 首先对于跨站问题的定义，将从知识网络数据（如wiki，文中使用的是DBpedia）和社交媒体中数据结合，获取<entity, profile, type>数据，提高type的预测准确度，并实现entity的本体填充（ontology population）。
    - 从知识网络数据中获取ground truth，对于标签的选取，给出了合理的理由解释标签的选取原因和预测任务的选择，在数据集DBpedia中选取了8个预测选项。
    - 从2013-2017年，通过Twitter的公开API获取了4TB的Twitter数据，获取了三类参数，分别为并根据用户profile的，分析用户的文本信息的，基于Twitter social graph的。由于Twitter API的每日限制，一些social graph数据信息用前人的工作进行大致推测。从社交网络中获得了参数。
    - 使用上述提取的社交媒体参数帮助DBpedia进行了类型预测的工作。同时，对Wiki数据也进行了类似的实验。实验结果证明跨站的社交媒体数据能显著提高知识网络的类型预测能力，帮助新的知识网站填充更准确的自动生成的类别。
- rethinking: 这篇文章利用社交媒体中的数据信息作为参数，帮助提高知识网站的条目自动分类的精确度。跨站问题的研究还是属于比较有新意的研究方式，其中很重要的一点就是要找出两个甚至多个不同站点之间连接的桥梁关系，如这篇文章中社交网络中的features和知识网站中的类型的一一对应关系与标定。第二个值得学习的地方在于表述清晰和合理性，对于每个参数的选择原因、选择方式都有清晰的表述，尤其是图的表示。



#### 6.1.0.18. {CrossOSN_TWEB18} Gong Q, Chen Y, Hu J, et al. Understanding cross-site linking in online social networks[J]. ACM Transactions on the Web (TWEB), 2018 
- [Detailed]
- Subjective survey on cross-site linking in OSN.

#### 6.1.0.19. {Volunteerism-Tendency-Prediction-AAAI16} Jia, Yongpo, et al. "Fusing social networks with deep learning for volunteerism tendency prediction." AAAI 2016.
- Main contributions: A framework for multiple social network learning, whose core is a novel model that fuses social networks using deep learning with source confidence and consistency regularization.
- dataset: http://multiplesocialnetworklearning.azurewebsites.net/
- Future:
    - leverage information from social networks to gain a comprehensive understanding of a user’s interests, behaviors and personal traits.
    - individuals’ tendency to volunteerism is reflected in their social contents, especially the topics they discussed 
    - posting patterns and social connections indeed reflect a users personal character and concerns.
- The Multi-Social Network Learning (MSNL) [Song X. et al. Multiple social network learning and its application in volunteerism tendency prediction.]

#### 6.1.0.20. {social_bootstrapping_www14} Zhong C, Salehi M, Shah S, et al. Social bootstrapping: how Pinterest and last. fm social communities benefit by borrowing links from facebook[C]//WWW 2014  
- [Detailed]
- social bootstrapping is effective in enhancing the social experience of the website.



## 6.2. multi-input
#### 6.2.0.1. {Cho_CLSM_WWW16} Yoon Sik Cho, Greg Ver Steeg, Emilio Ferrara, and Aram Galstyan. "Latent space model for multi-modal social data." Proc. of WWW: 447–458. 2016.
- 分类：social prediction; computational low;
- 这篇文章提供了一个联合的模型CLSM，结合了经典的MMSB和LDA模型，预测社交网络中的用户连接情况和用户属性。它们提出的方法能在网络大小的线性时间中给出预测，计算复杂度可验证且很低。它们提出了人工构造的特殊数据验证了理论上它们的方法相比于MMSB和LDA的优势，并在实际多个社交网络数据集中进行实验，该方法在预测精确度上远超过早起工作。
    - 这篇文章结合了传统的MMSB和LDA模型，并添加了一个限制使得LDA中的latency space能描述多个数据的形式。作者具体用数学公式证明了模型的结合方式，和该限制方法的实际作用。
    - 结合后的网络图结构，使用Variational EM (expectation-maximization)方法进行与猜测，能在等同于网络大小的线性时间复杂度内计算结果。
    - 首先根据理论推导，构造了一个人工合成的数据验证了CLSM新模型相对MMSB和LDA的重大优化场景，在该数据集上的测量结果和理论结果相一致。
    - 文章之后选了6个社交网络，它们的类型各不相同，进行了实验。在用行为和用户连接情况的与猜测结果上，该方法的精确度远高于baseline。同时作者选择了两个社交网络，详细的案例分析说明了该方法在实际场景中能做到的比baseline更好的地方。
- 感想：这篇文章结合了两个经典的模型，并在新模型网络上使用线性方法预测了社交网络用户行为，保证了低计算复杂度。结合模型的过程中涉及的数学推导非常复杂，在数学水平还不足的时候慎重选取。值得学习的地方在于他们的实验结果说明方式，该论文中用理论推导的优势所在构造了一种可行的数据，并实验佐证了理论结果的一致性。同时，在实际不同类型的社交网络结果的较大提高，配合两个非常详尽有说服力的案例分析，说明了它们的提高点在于做到了常规预测分类问题很难完成的工作所在。整个实验的解释得很完善而清晰。



#### 6.2.0.2. {Farnadi_UDMF_wsdm18} [21] Farnadi, Golnoosh, et al. "User profiling through deep multimodal fusion." Proceedings of the Eleventh ACM International Conference on Web Search and Data Mining. ACM, 2018.
- integrate three sources of data at the feature level
- predict age, gender and personality traits 
- UDMF: user profile through deep multimodel fusion
- leverage different sources of data ultimately by cross-using data (Fig 3 is a more clear sample, Fig 5 is the entire structure)



# 7. 信息与传播（Information and Spreading）
## 7.1. 信息
### 7.1.1. 信息价值
#### 7.1.1.1. {Fan_review_helpfulness_www19} Fan, Miao, et al. "Product-Aware Helpfulness Prediction of Online Reviews." The World Wide Web Conference. ACM, 2019.
- identity review helpfulness
- proprosed model: PRH-Net, based on LSTM
- comparison model: EG-CNN, MTNL

#### 7.1.1.2. {reviews_tell_18} Luo, Yi. "What Airbnb Reviews can Tell us? An Advanced Latent Aspect Rating Analysis Approach." (2018).


#### 7.1.1.3. {review_informativeness_18} Fradkin, Andrey, Elena Grewal, and David Holtz. "The determinants of online review informativeness: Evidence from field experiments on Airbnb." (2018).
-  public reviews are informative and typically correspond with private and
anonymous ratings.
- a key variable determining the benefits from a reputation system is the share of high type sellers entering the platform. This raises the question of why more low quality sellers do not enter.
- three future mechanisms that may account for the proportion of high quality sellers on the platform: 
    - many bad actors or listings may be caught by Airbnb’s trust and safety efforts. These efforts include verifying the identities of guests and hosts, tracking and preemptively eliminating scams, encouraging detailed profiles, and ubsidizing high resolution photos. 
    - the search ranking algorithm might explicitly reduce the rankings of low-quality sellers. 
    - the law of large numbers may ensure that low quality listings are eventually negatively reviewed and consequently never booked again.

#### 7.1.1.4. {Liu_imputation_www19} Z. T. Liu, Y. Yang, W. Huang, Z. Y. Tang, N. Li, F. Wu. How Do Your Neighbors Disclose Your Information: Social-Aware Time Series Imputation. www 2019
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

### 7.1.2. 社会化检索
#### 7.1.2.1. Wenyi Xiao, Huan Zhao, Haojie Pan, Yangqiu Song, Vincent W. Zheng, and Qiang Yang. “Beyond personalization: Social content recommendation for creator equality and consumer satisfaction.” In Proc. of KDD, 235–245.2019
Beyond Personalization: Social Content Recommendation for Creator Equality and Consumer Satisfaction_Xiao_KDD19
本篇论文围绕文章推荐任务，兼顾内容创作者的平等性与阅读者的满意度，提出一个个性化的推荐模型。
模型框架：
  - social exploration: 利用用户高阶好友向量组成用户向量
  - document representation: 使用CNN、GRU对word-embedding特征提取，最终组成文章向量
使用蒙特卡洛搜索的方法寻找指定用户的k位高阶好友，并以此组成用户向量的方法比较独特


#### 7.1.2.2. {Chowdhury_Disaster_www19} Ray Chowdhury, Jishnu, Cornelia Caragea, and Doina Caragea. "Keyphrase Extraction from Disaster-related Tweets." The World Wide Web Conference. ACM, 2019.
- extraction key phrase and key words for disaster-related tweets
- LSTM and RNN
- word cloud Fig 2 ~ Fig 4

#### 7.1.2.3. {Xu_DLocRL_www19} Xu, Canwen, et al. "DLocRL: A Deep Learning Pipeline for Fine-Grained Location Recognition and Linking in Tweets." The World Wide Web Conference. ACM, 2019.
-  DLocRL: a new deep learning pipeline for fine-grained location recognition 
- model details:
    - location recognition module (fig 2)
    - location linking mmodule (fig 3). The input is a pair htweet, profilei, and the output is the matching score.
    - Geographical Pair Linking (Geo-PL) (fig 4). pair-wise geographical coherence:  Pair Linking algorithm [25].

#### 7.1.2.4. {Hu_stock_WSDM18} [32] Hu, Ziniu, et al. "Listening to chaotic whispers: A deep learning framework for news-oriented stock trend prediction." Proceedings of the Eleventh ACM International Conference on Web Search and Data Mining. ACM, 2018.
- Hybrid Attention Networks (HAN) to predict the stock trend based on the sequence of recent related news
- two principles
    - sequential content dependency
    - diverse influence
- based on GRU and attention mechanism

### 7.1.3. 分类
#### 7.1.3.1. {Shu_TriFN_WSDM19}
- 分类： fake news; triangle relations; embedding; features extraction; social media;
- 这篇文章，针对出版商、新闻和用户之间的三角相关关系，构建了一个TriFN模型，用以检测社交网络中的假消息。通过对于社交媒体中三角关系数据挖掘和分析，构建了四种embedding层，并将结果数据合并后预测了社交媒体中的假消息。在两个实际数据集中的测试结果表明，该方法不论从特征选取上还是预测结果上，都明显好于之前的方法。在于早期预测的问题上，该模型表现也好于baselines。
    - 这篇文章针对社交网络中出版商、新闻和用户之间的互相关系，构建了一个**以三角相关关系为基础的模型TriFN**，用以检测社交网络中的假消息。
    - 通过对于社交媒体中的数据挖掘，构建了新闻、用户、用户-新闻、出版商-新闻四种embedding层，并最后使用一个二分类器对结果进行假新闻预测。对于embedding层的构建分析详细，四种方法的复杂度都是可计算的，对于整个模型的每次迭代，有一个精确的时间复杂度，计算时长可控性和可解释性都较强。
    - 选取了之前方法中常用的离散特征，并对比了多种常见的机器学习模型，对于每组特征选取，以F1最好的机器学习模型作为对比参考。
    - 在BuzzFeed和PolitiFact数据集上进行测试。该方法在Accuracy，Precision，Recall，F1指标上均好于所有的baselines。同时分析了用户参与参数和出版商喜好偏差参数对结果的影响，证明了选取的三角关系中这两种链接的特征都对结果有很大的正反馈。
    - 对于早期预测问题（新闻刚产生，数据量少），TriFN模型也表现得比baselines更加优异。
- 感想：这篇文章对于社交网络中的假新闻进行预测，使用不同的embedding方法从出版商、新闻、用户的三角相关关系提取有效参数，并获得很好地预测结果。通过三角相关关系进行的特征提取方法可以学习借鉴，这种特征很可能对于模型的表现有较大提升。同时，对于时间复杂度的分析，如果对于每个部分能精确地分析时间复杂度，能使得整个模型的计算时长更可控，同时可解释性也较强。早期预测也是一个可以考虑的对比方向。


### 7.1.4. 社会化推荐
#### 7.1.4.1. {Wang_Recommending_SIGIR17}
- 分类：recommendation; embedding; social network; cross-link
- 这篇论文，研究了异质网络中社交推荐问题，通过整合信息结构网络中的用户特征，在社交网络中对用户进行推荐。信息结构网络的数据集从Trip.com独立收集，并使用已公开的Facebook和Twitter数据集作为社交网络，对文中提出的三个问题进行详细实验，实验结果证明结合了跨站信息的该方法表现更优。
    - 这篇文章研究异质网络中的社交推荐问题，考虑的跨站为用户信息网站和社交网站，分别考虑用户-资料关系和用户-用户关系，在社交网站中进行好友推荐。
    - 文章提出的NSCR模型中，使用属性可感知的深度协同过滤模型提取信息结构网络中的用户-资料关系，在embedding层通过用户特性与社交网络中的用户进行绑定，预测社交网络中的用户关系。
    - 信息结构网络的数据集从Trip.com独立收集，社交网络数据集使用已公开的Facebook和Twitter，收集了超过1000个有跨站信息的用户和他们的资料信息、好友信息。
    - 文中提出了对比前人方法的表现、不同超参设置、不同隐藏层设计对实验结果的影响三个问题，并在实际数据集中详细实验分析，回答了上述三个问题。NSCR模型表现好于之前的社会推荐模型，超参的不同设置对实验结果影响较大，隐藏层深度和embedding size对结果的影响时非线性的凸函数。
- 感想：这篇文章研究了跨站的社交推荐问题。这篇文章的跨站不仅仅考虑了异质的社交网络，还考虑了不同的信息结构网络，是一种较为新颖的跨站研究方向。在embedding利用用户进行跨站信息传输，能节省较多的计算开销，在之后跨站预测工作中也可以考虑类似方法。在实验节的表达上也很值得学习，利用提出问题的方式简要概述了实验需要验证的问题，后续的一一解答显得逻辑性很强。


#### 7.1.4.2. {Dong_link_ICDM12}
- 分类： cross-link; link prediction; recommendation, transfer_learning
- 这篇文章通过对**用户行为的研究，配合社会学的理论**，考虑将跨站问题的网络结构和用户行为通过社会学理论进行绑定。对于新提出的基于因素排序的用户朋友推荐模型，辅助以上述的跨站信息，进行迁移学习，以达到更准确的推荐成功率。
    - 这篇文章提出了**一种基于因素排序的用户链接预测模型**，用以解决社交网络中的用户推荐问题。根据对点和边的转换，定义了一个目标函数，并使用梯度下降的方法最大化该函数的相似度。该方法的结果比之前的链接预测模型有更高的准确度。
    - 利用社会学的理论，文中详细说明了每个参数的选择理由。同时，利用社会学理论中各种三角关系的相似性的理论说明和实验分析，将两个不同个社交网络的目标函数合并成一个，并使用迁移学习的方式利用跨站信息进行预测。
    - 在四个不同的数据集上进行了测量研究，并对比了12种跨站迁移学习的情况。在大多数情况下，迁移学习的预测准确率都比baseline模型更好，也好于文中之前提出的基于因素排序的预测模型。
- 感想：这篇文章运用了社会学知识，在异质社交网络进行迁移学习，对用户提供更精确的朋友推荐。和昨天读的文章一样，该文章也运用了交叉学科的理论，用来将不同社交网站中的信息归类和绑定。多理论结合的交叉学科方法，能提取出很多有意义的参数以及新的相似点，对于迁移学习、相似类比、跨站研究等都有很大意义。相比于之前阅读的文章，这又是一种新的跨站研究方式，运用的是迁移学习，对于如何将跨站的异质信息在一个场景中使用也是很好的思路方向，值得学习借鉴。


#### 7.1.4.3. Hongzhi Yin, Qinyong Wang, Kai Zheng, Zhixu Li, Jiali Yang, and Xiaofang Zhou. “Social influence-based group representation learning for group recommendation.” Proc. - Int. Conf. Data Eng.2019


#### 7.1.4.4. POG: Personalized Outfit Generation for Fashion Recommendation at Alibaba iFashion_KDD19
1. POG: Personalized Outfit Generation for Fashion Recommendation at Alibaba iFashion_Chen_KDD19该论文提出了服装推荐的模型，模型的输入用户的历史点击记录，输出是一整套推荐的服装。
2. 该推荐系统需要满足两个要求：1.推荐的一整套服装内各件衣服的兼容性,2.服装推荐的个性化。
3. 该推荐系统搭建的框架：
4. 1.训练各件衣服的embedding。以每件商品的图片经卷积后的vector、文字描述经卷积网络后的vector、CF的图embedding三者连接为输入，输出为新的衣服的embedding。
5. 2.训练模型FOM学习一整套服装内的兼容性。基本的思想是通过MASK技术使得mask的输出接近ground truth.
6. 3.最终服装推荐模型POG。以预训练的FOM初始化POG，结合学习到的用户偏好，为用户推荐一整套服装。
7. 模型验证：
8. 在阿里内测的平台上进行实验，FOM对服装兼容性的结果远超基于LSTM的序列模型和CF的模型。POG的服装推荐结果也胜于基于LSTM+（RR/CF)的模型。

#### 7.1.4.5. Gediminas Adomavicius and Alexander Tuzhilin. “Toward the next generation of recommender systems: A survey of the state-of-the-art and possible extensions.” IEEE Trans. Knowl. Data Eng.2005
* Toward the Next Generation of Recommender Systems: A Survey of the State-of-the-Art and Possible Extensions_Gediminas_TKDE2005
* 本篇论文主要介绍了传统的推荐系统方法和可能的拓展。
* 传统的方法有：基于内容的推荐、协同过滤、混合式方法。
* 共同存在的问题包括冷启动和稀疏等。
* 可能的拓展有：引入用户/商品的其他特征、扩散到多维推荐问题等。

#### 7.1.4.6. {Kang_CTL_cvpr19} Kang, Wang-Cheng, et al. "Complete the Look: Scene-based Complementary Product Recommendation." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2019.
- a new task called ‘Complete the Look’, which seeks to recommend visually compatible products based on scene images.
- they seek to bridge the gap between 'Shop the look' type and 'Complete the look' type images.
- A sample of the binary questions. 
    - Given a scene and two products, the model must predict which product is more compatible with the scene. Correct predictions are labeled in green, incorrect in red.

#### 7.1.4.7. {You_HTCN_www19} You, Jiaxuan, et al. "Hierarchical Temporal Convolutional Networks for Dynamic Recommender Systems." The World Wide Web Conference. ACM, 2019.
- paper background questions: modern web-scale production environment with large data, we need more light and fast algorithm.
- HierTCN:  memory-efficient and fast to compute
    - high-level model uses RNN to capture users’ evolving long-term interests across sessions
    - low-level model is implemented with TCN, utilizing both a user’s long-term interests and the short-term interactions within sessions to output a dynamic user embedding and make recommendations.


#### 7.1.4.8. {Chen_Serendipity_www19} [2] Chen, Li, et al. "How Serendipity Improves User Satisfaction with Recommendations? A Large-Scale User Evaluation." The World Wide Web Conference. ACM, 2019.
- relationships from novelty, unexpectedness, relevance, and timeliness to serendipity
- relationships from serendipity to user satisfaction and purchase intention
- developing a more precise metric for measuring recommendation serendipity
- serendipity significantly positively affects user satisfaction and purchase intention. Its contribution is largely higher than that of novelty, more direct relative to diversity’s, and comparable to those of relevance and timeliness
- curiosity can not only strengthen the positive effect of novelty on serendipity, but also that of serendipity on satisfaction
- The observations related to HOT suggest that unexpectedness can reflect users’ unpleasant surprise if the recommendation is purely popularity based without taking into account the user’s preferences.

#### 7.1.4.9. {Lu_Coevolutionary_www18} [23] Lu, Yichao, Ruihai Dong, and Barry Smyth. "Coevolutionary recommendation model: Mutual learning between ratings and reviews." Proceedings of the 2018 World Wide Web Conference. International World Wide Web Conferences Steering Committee, 2018.
- co-learns user and item information from ratings and customer reviews
    - learning from reviews: The attention-based bidirectional GRU network for document modeling (fig 2)
    - learning from rating: Probabilistic Matrix Factorization (PMF) model for textual regularization

#### 7.1.4.10. {Chen_Friend_level_WSDM19} [5] Chen, Chong, et al. "Social attentional memory network: Modeling aspect-and friend-level differences in recommendation." Proceedings of the Twelfth ACM International Conference on Web Search and Data Mining. ACM, 2019.
- Social Attentional Memory Network (SAMN) 
- features:
    - aspect-level differences： users and their friends only have the same preferences in certain aspects.
    - friend-level differences： the infuence strength of his friends should be different and dynamic.


#### 7.1.4.11. {Yu_friend_Recommendation_cikm18} Yu, Junliang, et al. "Adaptive implicit friends identification over heterogeneous network for social recommendation." Proceedings of the 27th ACM International Conference on Information and Knowledge Management. ACM, 2018.
- identify implicit friends who share similar tastes but could be distant from each other on the network topology of social relations. 
- experiment: LastFM, Douban, Epinions 
- Recommendation for Cold-Start Users
- Explicit Friends vs Implicit Friends 


#### 7.1.4.12. {Wan_triple2vec_cikm18} [6] Wan, Mengting, et al. "Representing and Recommending Shopping Baskets with Complementarity, Compatibility and Loyalty." Proceedings of the 27th ACM International Conference on Information and Knowledge Management. ACM, 2018.
- three important patterns (in fig 1):
    - Complementarity: products within the same basket complement each other in terms of functionality
    - compatibility: users tend to purchase products that match their preferences 
    - loyalty: a signifcant fraction of users repeatedly purchase the same products over time 
- item2vec, prod2vec, metapath2vec, triple2vec
- adaLoyal algorithm: for product recommendation by balancing universal product embeddings and users’ product loyalty

#### 7.1.4.13. {Turnbull_airbnb_www19} Turnbull, Bradley C. "Learning Intent to Book Metrics for Airbnb Search." The World Wide Web Conference. ACM, 2019.
- author from Airbnb company 
- recommend intentional lisitng with XGBoost

#### 7.1.4.14. 赵姝, 刘晓曼, 段震, 等. 社交关系挖掘研究综述[J]. 计算机学报, 2017, 40(3): 535-555.


#### 7.1.4.15. {pids_multi_CIKM12} Yilin Shen et al. "Interest-Matching Information Propagation in Multiple Online Social Networks" CIKM 2012
1. influence maximum with minimum seed users
2. users' engagement
3. propose to targeting the set of interest-matching users whose interests are similar to what we try to propagate.

#### 7.1.4.16. {Racial_discrimination_sharing_economy}Edelman, Benjamin, Michael Luca, and Dan Svirsky. "Racial discrimination in the sharing economy: Evidence from a field experiment." American Economic Journal: Applied Economics 9.2 (2017): 1-22.

#### 7.1.4.17. {Algorithmic_Glass_Ceiling} Stoica, Ana-Andreea, Christopher Riederer, and Augustin Chaintreau. "Algorithmic Glass Ceiling in Social Networks: The effects of social recommendations on network diversity."[C] WWW, 2018.
- prominent social recommendation algorithms can exacerbate the under-representation of certain demographic groups at the top of the social hierarchy.
- the effect of gender, homophily and growth dynamics under social recommendations.
- an algorithmic glass ceiling sets social barrier for hinders groups like women or people of color from attaining equal representation.
- the glass ceiling is generated systematically by the spontaneous growth of social networks.

#### 7.1.4.18. {online_data_social_welfare_www18} Jia Y, Liu X, Xu W. When Online Dating Meets Nash Social Welfare: Achieving Efficiency and Fairness[C]//Proceedings of the 2018 World Wide Web Conference on World Wide Web. International World Wide Web Conferences Steering Committee, 2018: 429-438.
- [Detailed]
- trade-off the efficiency and fairness in online dating meetings.



#### 7.1.4.19. {search_rank_ARS17} Grbovic, Mihajlo. "Search ranking and personalization at Airbnb." Proceedings of the Eleventh ACM Conference on Recommender Systems. ACM, 2017.



#### 7.1.4.20. {predict_pinterest_www15} Zhong, Changtao, Dmytro Karamshuk, and Nishanth Sastry. "Predicting pinterest: Automating a distributed human computation." WWW15
- view Pinterest as a distributed human computation that that categorises images from around the Web. (群体智慧)
- a cascade of predictors that together automate a large fraction of Pinterest actions. __(user attention -> category classifier -> pinboard classifier)__
- negative training sample
- dataset：http://bit.ly/pinterest-dataset

#### 7.1.4.21. {twitter_youtube_MCCAP14} Deng, Zhengyu, et al. "Twitter is faster: Personalized time-aware video recommendation from twitter to youtube." MCCAP14
- main idea: use the short-term information on Twitter to recommend related videos on Youtube.
- the microblog text social website is faster than the video social website.
- leverage the short-term information on Twitter and long-term information on Youtube.
- G-Twitter-LDA
- the robustness validation in parameters.


#### 7.1.4.22. {evolution-ego-network-wsdm17} Aiello L M, Barbieri N. Evolution of Ego-networks in Social Media with Link Recommendations[J]. web search and data mining, 2017: 111-120.
- **Main Idea**: By analysing overall of ego-network to propose recommendations which is suitable for ego-network.

- Recommendations favor popular and well-connected nodes, limiting the diameter expansion. (fig.5 right)
- the evolution of ego-networks is bursty, community-driven, and characterized by subsequent phases of explosive diameter increase, slight shrinking, and stabilization.
- Ego-networks are often composed by few communities, rarely more than 10 (Figure 11, left).
- recommendations fosters global (fig. 14)
- Last, with two link prediction experiments (basic structural and temporal features), we show how insights from our analysis can be used to improve the effectiveness of social recommender systems.

#### 7.1.4.23. {surprise_model_CHI18} Niu, Xi, et al. "Surprise me if you can: Serendipity in health information." CHI, 2018.
- [Group]
- talk about the concept of a computational model of surprise and the experiment about this theory.
- a new area: computational surprise model.

#### 7.1.4.24. {DRN_www18} Zhao, Xiangyu, et al. "Deep reinforcement learning for page-wise recommendations." www, 2018.
- [Group]
- engage the Dueling-Double-DQN (a type of DeepLearning) to news recommendations.



## 7.2. 传播
#### 7.2.0.1. {Xu_STNE_ICDM19} Pinghua Xu, Wenbin Hu, Jia Wu, Weiwei Liu, Bo Du, and Jian Yang. “Social trust network embedding.” In Proc. of ICDM, 678–687.2019


#### 7.2.0.2. {Fates of Microscopic Social Ecosystems: Keep Alive or Dead?，KDD19}
本文将生态系统中的种族数量变化模型移植到社交“生态系统”中，用扩展过后的生态系统种族数量变化模型预测社交网络中ego network的变化趋势和最终状态，经过实验验证了该模型可以很好地拟合和预测微信朋友圈的发展和最终状态。
· 概念的对应采取了简单的分类，通过用户的发朋友圈数/用户评论点赞数对用户进行种族分类，分为消费者、中间和生产者
· 模型的修改使用了矩阵的扩展，一是采用种族的概率表征一个用户的种族特征，二是使用邻接矩阵细化朋友间的相互影响
· 本篇论文的核心即如何将生物学的生态系统模型对应到社交生态系统当中，模型修改不大但效果很好


#### 7.2.0.3. {Hu_diffusion_LSTM_WSDM18} [6] Hu, Wenjian, et al. "Who will share my image?: Predicting the content diffusion path in online social networks." Proceedings of the eleventh ACM international conference on web search and data mining. ACM, 2018.
- Diffusion-LSTM: recursively predict the entire diffusion path of an image through a social network
- model details (Fig 3):
    - multi hidden child cell
    - during backpropagation, the gradient for a parent node will sum the gradients passed by all of its child nodes. (Fig 4)
    - outputs the next re-poster (among the current poster’s friends in the social network)
    - Mapping individual users to prototypes
    - combining user social features and image 

#### 7.2.0.4. {Cheng_recur_www16} Cheng, Justin, et al. "Do cascades recur?." Proceedings of the 25th International Conference on World Wide Web. International World Wide Web Conferences Steering Committee, 2016.
- whether the same content will recur after observing its initial burst of popularity (ROC AUC=0.89 for image memes)
- predicting the relative size of the resulting burst (0.78).
- The time of recurrence, on the other hand, appears to be more unpredictable (0.58)
- Simulating recurrence： SIR model
- random forest 

#### 7.2.0.5. {Cheng_can_www14} [548] Cheng, Justin, et al. "Can cascades be predicted?." Proceedings of the 23rd international conference on World wide web. ACM, 2014.
- cascade growth prediction: problem: given a cascade that currently has size k, predict whether it grow beyond the median size f(k). 
- questions
    - How high an accuracy can we achieve for cascade growth prediction? (79%)
    - does the future behavior of a cascade become more or less predictable as the cascade unfolds (more predictable)
    - can we predict its “shape” — that is, its network structure? (yes)
-  linear regression, naive Bayes, SVM, decision trees and random forests.

#### 7.2.0.6. {Adamic_meme_WSDM16} Adamic et al. Information Evolution in Social Networks. WSDM 2016
- meme : to descript information spreading like gene
- Yule process (simulated results)
- more than one out of every two do copying in mutation.
- modification
    - appears at the beginning /end of the heme
    - perfer longer meme
    - from one mene to another
- put two memes together,
- time or location-specific
- humorous variants.
- immunity behavior after post.
- text length has to be sufficient to encompass
- Analysis like gene.
    - Similarity: 
        - DNA                                       text.
        - inherit                                   dissemination
        - Mutation                                  modification in text
        - function mutation                         charge the original meaning
        - environment                               network, relationship
        - mutation location                         modification location
        - advantageous mutation                     move attractive modification.
        - advantageous mutation occur cross genes   attractive modification across memes
        - gene combination                          meme combination
    - Difference: 
        - blind process                             intentionally spread

#### 7.2.0.7. {Bakshy_dissemination_www12} Bakshy et al. The Role of Social Networks in Information Diffusion. WWWW 2012
- The Rode of Social Network in information Diffusion.
- identification of who influence whom
- propagate information in the absent of social singnals about the information
- Tie of sttrength
    - stronger ties am more influential
    - weaker ties are responsible of the propagation of novel information.
- Temporal Clustering
- More feet , more possibility to retweet.

#### 7.2.0.8. {Cha_cascade_WOSN08} Cha et al. Characterizing Social Cascades in Flickr. WOSN 2008
- cascade. flickr. photo sharing
- based on Epidemic Model
- content along link
- properties , model
- how long to the first users and how long to the second users. 
- multi way do dissemination
- distance to the source

#### 7.2.0.9. {Cha_cascade_www09} Cha et al. A Measurement-driven Analysis of Information Propagation in the Flickr Social Network. WWW 2009
- widely. no spread
- quickly: lowly
- word-of-mouth exchange (social link): cover 50%, peer pressure
- Related work: real networks vs. social network
- information Epidemics in Blog space 2005.

#### 7.2.0.10. {huang_weibo_13} Huang et al. Huang, Ronggui, and Xiaoyi Sun. "Weibo network, information diffusion and implications for collective action in China." Information, Communication & Society 17.1 (2014): 86-104.
- Weibo influence on online collative action
- two aspects: trustworthiness (follower), issue network (hashtag)
- active users, verified users. reciprocity.
- same provine, cross province
- follow network & retweet network. the number of followers & the number of retweet

#### 7.2.0.11. {Kumar_misinformation_CHI14} Kumar et al. Detecting misinformation in online social networks using cognitive psychology. CHI 2014
- Detect misinformation with cognitive psychology
    - consistency at message
    - coherency of message
    - __credibility of source__
    - __general acceptability of message__
- Algorithm: Retweet -> Gini coefficient -> PageRank

#### 7.2.0.12. {Li_survey_18} Li, Mei, et al. "A survey on information diffusion in online social networks: Models and methods." Information 8.4 (2017): 118.
- Explanatory model: (factors : __tie strength. homoplity.  communities. user role, topic__)
- Predictive model: 
- Next challenges: 
    - __sentiment-based. group status, weak modes. aspects of real society.__

#### 7.2.0.13. {Ou_heterogeneous_17} Ou, Chengeng, et al. "Modelling heterogeneous information spreading abilities of social network ties." Simulation Modelling Practice and Theory 75 (2017): 67-76.
- Information spreading with heterogenous.
- high heterogeneous → lower spreading. & longer lifespan
                    ↳ long path -> strong tie

#### 7.2.0.14. {shen_multi_CIKM12} Shen et al. Interest-Matching Information Propagation in Multiple Online Social Networks. CIKM 2012
- Maximization influence Problems.
- using Interest-Matching information
- multi network
- MSIP problems & TSNL approch 
- crossing users.

#### 7.2.0.15. {singh_survey_18} Singh, Shashank Sheshar, et al. "A Survey on Information Diffusion Models in Social Networks." International Conference on Advanced Informatics for Computing Research. Springer, Singapore, 2018.
- Influence Maximization LIN problem.
- Social Influence Analysis statistic
- Local:Tie Strength, Between centrality ....
- Global: Degree Centrality. Structural Hole ....




#### 7.2.0.16. {wechat_www16} Qiu, Jiezhong, et al. "The lifecycle and cascade of wechat social messaging groups." WWW, 2016.
- wechat group lifecycles, the change in their underlying structures over time, and the diffusion processes by which they develop new members.
- long-term and short-term groups are inherently distinct. 
- We also found that the lifecycle of messaging groups is largely dependent on their social roles and functions in users’ daily social experiences and specific purposes.
- Questions:
    - how separable are the long-term and short-term groups by taking into account the structural and social behavioral features? (Cascade Tree Pattern)
    - how does the lifecycle and growth pattern of social messaging groups correlate with the social functions it is serving? (most short-term groups are event-driven (e.g., travel groups, meeting groups and dining groups), while long-term groups are more relationship-driven (e.g., family groups, colleague groups and friend groups)
    - Can we predict whether a social group will grow and persist in the long run by analyzing the structural and behavioral patterns exhibited by the group at its early stage?
    - Specifically, given the historical behavior of group users as well as the local social structure, can we predict which users in the group are more likely to be active and invite new users to the group chat and to whom will he/she send invitations to? (invitation interval & first invitation latency)
    - how does the added new members in return lead to the change of underlying social network structure, as the group evolves over time? (historical behavioral features can be important factors in the task of predicting inviter; while local structural features are the dominant ones in predicting invitee.)

#### 7.2.0.17. {Message_Distortion_Cascades_www19} Manoel Horta Ribeiro et al. "Message Distortion in Information Cascades", WWW'19
- RQ1: __Measuring the telephone effect.__ What part of information distortion is due to the cascading of messages (telephone effect), rather than to length restrictions (summary effect)?
- RQ2: __Information persistence.__ Given that a piece of information has already survived k summarization steps, how likely is it to survive one more? What factors impact its survival?
- RQ3: __Extractive vs. abstractive summarization.__ Broadly, there are two ways of summarizing text, (1) by subselecting keyphrases (extractive), (2) by paraphrasing essential information (abstractive). How effective are these strategies in miti-gating distortion introduced by the telephone effect?


## 7.3. 主题与观点(Topic and Opinion)
### 7.3.1. Topic
#### 7.3.1.1. {Leskovec_meme_news_kdd09} Leskovec, Jure, Lars Backstrom, and Jon Kleinberg. "Meme-tracking and the dynamics of the news cycle." Proceedings of the 15th ACM SIGKDD international conference on Knowledge discovery and data mining. ACM, 2009.
- A algorithms for clustering mutational variants of phrases
- __*news attention cycle model*__
- time lay between news media and blogs
- "heartbeat" : Phrase handoff from news to blogs.
- tracking meme → phrase variant. → core idea spreading.


### 7.3.2. Opinion 

#### 7.3.2.1. Rediet Abebe, David Parkes, Jon Kleinberg, and Charalampos E. Tsourakakis. “Opinion dynamics with varying susceptibility to persuasion.” Proc. KDD.2018
本文主要研究如何从人们对观点的固执程度来改变社区的观点倾向。贡献主要如下：
1. 提出与社交网络结合的模型，引入固执参数，描述个人的观点被周围人观点影响而变化的过程
2. 提出影响人们的固执参数而达到整个社区观点最大化和最小化的目的
3. 证明了不受限的上述问题是P问题，而有预算限制的问题是NP完全问题，并提出了贪心的启发式算法
4. 实验证明了贪心启发式算法针对优化问题的有效性


#### 7.3.2.2. {Wang_Capsules_www18} [35] Wang, Yequan, et al. "Sentiment analysis by capsules." Proceedings of the 2018 World Wide Web Conference. International World Wide Web Conferences Steering Committee, 2018.
- RNN-Capsule： a capsule model based on Recurrent Neural Network (RNN) for sentiment analysis. (Fig 1)
- A capsule contains three modules: representation module, probability module and reconstruction module. (Fig 2)

#### 7.3.2.3. {Wang_AS_Capsules_www19} Wang, Yequan, et al. "Aspect-level Sentiment Analysis using AS-Capsules." The World Wide Web Conference. ACM, 2019.
- aspect-level capsules sentiment detection

#### 7.3.2.4. {Garimella_controversy_TSC18} Garimella, Kiran, et al. "Quantifying controversy on social media." ACM Transactions on Social Computing 1.1 (2018): 3.
- Pipeline: graph building → graph partitioning → controversy measure.
- Graph building: 
    - Topic graph (seed hashtag & a set of related hashtags)
    - graphs used in this paper: retweet, follow, hybrid content & retweet  
- Graph partitioning: METIS
- Controversy, measures.: 
    - RWC (this paper): a variant of the random walk
    - BCC, EC, GMCK, MBLB
- external dataset
- controversy evolution
- simulation on random graph (Fig. 10 variant parameters)
- Limitation: multi-sided controversies.

#### 7.3.2.5. {Adamic_meme_WSDM16} Adamic et al. Information Evolution in Social Networks. WSDM 2016
- meme : to descript information spreading like gene
- Yule process (simulated results)
- more than one out of every two do copying in mutation.
- modification
    - appears at the beginning /end of the heme
    - perfer longer meme
    - from one mene to another
- put two memes together,
- time or location-specific
- humorous variants.
- immunity behavior after post.
- text length has to be sufficient to encompass
- Analysis like gene.
    - Similarity: 
        - DNA                                       text.
        - inherit                                   dissemination
        - Mutation                                  modification in text
        - function mutation                         charge the original meaning
        - environment                               network, relationship
        - mutation location                         modification location
        - advantageous mutation                     move attractive modification.
        - advantageous mutation occur cross genes   attractive modification across memes
        - gene combination                          meme combination
    - Difference: 
        - blind process                             intentionally spread


# 8. 图神经网络（graph based machine learning）
[NRLPapers](https://github.com/thunlp/NRLpapers)
## 8.1. network representation learning（NRL）
## 8.2. network embedding （NE）
#### 8.2.0.1. {Predicting Dynamic Embedding Trajectory in Temporal Interaction Networks_Srijan_KDD19}
* 本篇论文提出了在由用户和商品构成的时序网络中动态Embedding的模型。该模型中的embedding包括动态和静态的embedding，静态的为one-hot形式，动态的embedding包括update和projection两个运算。
* 1）update运算
  * 当t时刻用户u购买商品i时，更新此时用户的动态embedding-u(t)和商品的动态embedding-i(t)。这里通过两套RNN实现更新，用t前一时刻的用户、商品embedding和交互间的特征向量、时间间隔，分别进行更新。
* 2）projection运算
  * projection即预测(t+delta-t)时刻用户的动态embedding。计算方法是u(t+delta-t) = (1+W·delta-t)*u(t).其中W是需要学习的权重，delta-t是时间间隔。
* 模型训练方法：
* a)损失函数的建立
  * 首先，定义了一个预测任务，即在已知用户u前一时刻的购买商品i,预测下一时刻购买物品的情况。损失函数即为预测的商品与真实的购买商品间的欧式距离，加上用户和商品embedding的正则项。以此训练出模型的参数
* b)t-Batch算法
  * - 首先，所有交互信息（四元组𝑆 = (𝑢 % , 𝑖 % , 𝑡 % , 𝑓 % )）按照时间顺序排列，构成：𝑆 + , 𝑆 , ,···, 𝑆 |/| .初始化批次𝐵 + ，𝐵 , ， ··· ，𝐵 1 ，k 属于[1, |𝐼|].
  * - 分配的方法： 假设前 r 个交互信息已经分配，考虑第 r+1 个𝑆 %7+ = (𝑢 8 , 𝑖 9 , 𝑡, 𝑓 % )。
  * 𝑚𝑎𝑥𝐵𝑎𝑡𝑐ℎ(𝑢 8 , 𝑟)为所有包含用户𝑢 8 的交互信息的批次中最大的批次的下标 𝑚𝑎𝑥𝐵𝑎𝑡𝑐ℎ(𝑖 9 , 𝑟)为所有包含物品𝑖 9 的交互信息中批次中最大的批次的下标
  * 因此，将𝑆_(r+1)分配的批次为𝐵_i,𝑖 = 1 + 𝑚𝑎𝑥(𝑚𝑎𝑥𝐵𝑎𝑡𝑐ℎ(𝑢 8 , 𝑟), 𝑚𝑎𝑥𝐵𝑎𝑡𝑐ℎ(𝑖 9 , 𝑟))这样可以将所有的批次分配，保证了时序关系，以及每个批中至多有某一固定用户或商品的 一条交互信息。

  * - t-batch 用于训练的方法： 每一次训练更新权重时，分别取对应的 batch 进行训练。 如，第一次更新权重，取𝐵 + 。这样进行训练，效果和所有的数据用来训练的效果相当，并且降低了时间。
* 模型实验：
* 在真实数据集将它们训练好的embedding进行未来购买商品预测和用户状态改变预测，模型效果很好

#### 8.2.0.2. {Perozzi_deepwalk_kdd14} [1898] Perozzi, Bryan, Rami Al-Rfou, and Steven Skiena. "Deepwalk: Online learning of social representations." Proceedings of the 20th ACM SIGKDD international conference on Knowledge discovery and data mining. ACM, 2014.


#### 8.2.0.3. {node2vec_kdd16} Grover A, Leskovec J. node2vec: Scalable feature learning for networks[C] KDD,2016
- Motivated by word2vec, they propose a semi-supervised algorithm for scalable feature learning in networks.
- The main idea of this algorithm is skip-gram. They use 'neighborhood' to represent the 'context' which is an aspect of word2vec.
- The 'neighborhood' nodes are collected by random walk algorithm.
- The input is the graph structure and the output is the representation of each node. (just like word embedding)
- The parameters of _p_ and _q_ have a different influence on representation.
- Implication: multi-label prediction, link prediction
- [node2vec notes and extention knowledge](https://blog.csdn.net/dark_scope/article/details/74279582)

# 9. 分析方法（Analysis Method）
#### 9.0.0.1. {Liu_Toward_TKDE05} Huan Liu and Lei Yu. "Toward integrating feature selection algorithms for classification and clustering." IEEE Transactions on Knowledge and Data Engineering 17, 4: 491–502. 2005.
- 分类：survey; feature engineering;
- 这篇survey，是一篇非常经典的特征工程论文，对数据挖掘领域的特征提取工作进行了归类总结，并提出了很多可以提升的方向。文章通过对于特征提取的第一步数据集选取进行了归纳总结，并对于参数提取的不同问题进行分类，提出了两种模型选取方法，一种是分类表，一种是基于专家系统的推荐。文章同时对现实问题进行分析，提出了特征工程可以运用的各个方向，并根据现有的问题和挑战提出了一些未来工作的可行方向。
    - 这篇文章首先分析了特征工程中第一步数据集选取工作，从子集生成、评估、停止、验证四个方向对现有的工作进行了归纳总结，并进行方法的分类。
    - 提出了一个分类的框架，根据子集的生成和评估，对数据挖掘任务中已有的方法进行分类。该研究能使得用户在面对新问题时能在一个很短的搜索域内找到可行的方法，同时对于表中的空余部分（应当有这类问题，但没这类方法）提出了可行的未来工作方向。
    - 文中同时提出了另一种基于专家系统的特征工程方案推荐，它以知识和数据集构成为主线构建了专家系统，对新的数据挖掘工作推荐合适的方法。同时配合一个简单系统中的案例分析说明了该专家系统的有效性。
    - 文中分析了特征提取在现实中的意义，如nlp、cv、network等方面，详细说明了该问题研究的重要性，以及这类问题中目前存在的困难和挑战，引出了未来的可行工作方向。
- 感想：这篇survey思路非常清晰，以特征工程解决问题的思路出发，对于每一步都归纳总结了现有的方法，并提出了两种模型进行方法选取。分类非常清晰，专家系统的推荐逻辑也解释得很到位。对于现实问题的分析也非常全面，根据实际情况解析了不同应用方向的运用现状和前景，说明了特征工程研究的重要性，并引出了很多可行的未来研究方向。这篇survey对现有工作的总结和对未来方向的思考对读者很有启发，非常值得学习在行文逻辑和行文表达上向这种好的survey看齐。另一个值得学习借鉴的地方在于，它对于特征工程中的方法分类，对应目前工作列成表格，提出了表格中的空缺处的研究空白（有点像早期元素周期表的填充想法），是一种非常好的未来工作提出方法。

#### 9.0.0.2. {Kumar_jodie_kdd19} Kumar, Srijan, Xikun Zhang, and Jure Leskovec. "Predicting Dynamic Embedding Trajectory in Temporal Interaction Networks." Proceedings of the 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining. ACM, 2019.
- JODIE employs two RNNs to update the embedding of a user and an item at every interaction. 
    - two embeddings/RNNs: a static embedding and a dynamic embedding. The static embedding represents the entity’s long-term stationary property, while the dynamic embedding represents time-varying property and is learned using the JODIE algorithm. 
    - projection operation that predicts the future embedding trajectory of the users.
-  t-Batch algorithm that creates time-consistent batches 
- experiments:
    - Future interaction prediction: Reddit post dataset， Wikipedia edits， LastFM song listens
    - User state change prediction: Reddit bans, Wikipedia bans, MOOC student drop-out
- _*the state-of-the-art algorithm in RELATED WORK part*_

#### 9.0.0.3. {Spathis_Sparse_kdd19} Spathis, D., et al. "Sequence Multi-task Learning to Forecast Mental Wellbeing from Sparse Self-reported Data." Proceedings of the 245h ACM SIGKDD International Conference on Knowledge Discovery & Data Mining, KDD 2019, August 4–8, 2019, Anchorage, AK, USA.
- learns patterns from different users, allowing and improving the prediction for users with limited number of self-reports
    - different users (encoder LSTM), users with limited number of self-reports(decoder LSTM)
    - Encoder-Decoder LSTM: repeats the Encoder 2D output (the last hidden outputs) as many times as the prediction length, in order to create a 3D input for the Decoder, which called copy or repeat.
    - they don't dismiss the sequential nature of the data


#### 9.0.0.4. {Zhou_TEMN_kdd19} Zhou, Xiao, Cecilia Mascolo, and Zhongxiang Zhao. "Topic-Enhanced Memory Networks for Personalised Point-of-Interest Recommendation."  The World Wide Web Conference. ACM, 2019.

#### 9.0.0.5. {Radu_Multimodal_IMWUT18} Radu, Valentin, et al. "Multimodal deep learning for activity and context recognition." Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies 1.4 (2018): 157.

#### 9.0.0.6. {Bai_TCN_arxiv18} Bai, Shaojie, J. Zico Kolter, and Vladlen Koltun. "An empirical evaluation of generic convolutional and recurrent networks for sequence modeling." arXiv preprint arXiv:1803.01271 (2018).

#### 9.0.0.7. {Baytas_TLSTM_kdd17} [72] Baytas, Inci M., et al. "Patient subtyping via time-aware LSTM networks." Proceedings of the 23rd ACM SIGKDD international conference on knowledge discovery and data mining. ACM, 2017.

#### 9.0.0.8. {Shvartzshnaider_VACCINE_www19} Shvartzshnaider, Yan, et al. "VACCINE: Using Contextual Integrity ForData Leakage Detection." The World Wide Web Conference. ACM, 2019.

#### 9.0.0.9. {Vassøy_THRNN_WSDM19} Vassøy, Bjørnar, et al. "Time is of the Essence: a Joint Hierarchical RNN and Point Process Model for Time and Item Predictions." Proceedings of the Twelfth ACM International Conference on Web Search and Data Mining. ACM, 2019.
- modeling of inter-session relations for catching long term dependencies over user sessions,
- modeling temporal aspects of user-item interactions
- for the tasks of recommendation and return-time prediction
-  The model consists of a Hierarchical RNN for the inter-session and intra-session (Fig 2)


#### 9.0.0.10. {Balaneshin-kordan_Joint_wsdm18} [9] Balaneshin-kordan, Saeid, and Alexander Kotov. "Deep neural architecture for multi-modal retrieval based on joint embedding space for text and images." Proceedings of the Eleventh ACM International Conference on Web Search and Data Mining. ACM, 2018.
- a gated neural architecture to project image and keyword queries as well as multi-modal retrieval units into the same low-dimensional embedding space and perform semantic matching in this space.

#### 9.0.0.11. {Bui_NN_technical_wsdm18} [7] Bui, Thang D., Sujith Ravi, and Vivek Ramavajjala. "Neural graph learning: Training neural networks using graphs." Proceedings of the Eleventh ACM International Conference on Web Search and Data Mining. ACM, 2018.

#### 9.0.0.12. {Sadeque_latency_wsdm18} [10] Sadeque, Farig, Dongfang Xu, and Steven Bethard. "Measuring the latency of depression detection in social media." Proceedings of the Eleventh ACM International Conference on Web Search and Data Mining. ACM, 2018.
- Early Risk Detection Error (ERDE)
- new metric, latency-weighted F1, for measuring the quality and speed at which a model identifies whether a user is depressed and show how it addresses some of the drawbacks of ERDE
- eRisk 2017 reference list

#### 9.0.0.13. {Chen_TRNN_CIKM18} [3] Chen, Charles, et al. "Predictive analysis by leveraging temporal user behavior and user embeddings." Proceedings of the 27th ACM International Conference on Information and Knowledge Management. ACM, 2018.
- time-aware RNN model, TRNN, is proposed for predictive analysis from user behavior data
- experiment:
    - next user action (user segmentation)
    - User Conversion (click/conversion prediction)
    - Mobile Applications (recommendation)

#### 9.0.0.14. {Zhou_vec2Link_CIKM18} [3] Zhou, Fan, et al. "Vec2Link: Unifying heterogeneous data for social link prediction." Proceedings of the 27th ACM International Conference on Information and Knowledge Management. ACM, 2018.
- a novel link prediction framework that utilizes user offline check-in behavior combined with user online social relations. 
- user location preference: probabilistic factor model (PFM)
- social representation: neural network embedding (NE) 
- locality sensitive hashing (LSH) to project the two representations 

#### 9.0.0.15. {Yang_CASAS_CIKM18} Yang, Min, et al. "Cross-domain Aspect/Sentiment-aware Abstractive Review Summarization." Proceedings of the 27th ACM International Conference on Information and Knowledge Management. ACM, 2018.
- CASAS (neural attentive model for Cross-domain Aspect/Sentiment-aware Abstractive review Summarization)
- transfer knowledge from the source domain to the target domain


#### 9.0.0.16. {Magnani_ML_multi_ASNAM11} Magnani, Matteo, and Luca Rossi. "The ml-model for multi-layer social networks." 2011 International Conference on Advances in Social Networks Analysis and Mining. IEEE, 2011.

#### 9.0.0.17. {Yuanshun_mlaas_imc17} Yao, Yuanshun, et al. "Complexity vs. performance: empirical analysis of machine learning as a service." IMC 2017.
- evaluate the effectiveness of MLaaS systems ranging from fully-automated to fully-customizable.
- How does the complexity (or control) of ML systems correlate with ideal model accuracy?
    - Highly tunable platforms like Microsoft outperform others when configurations of the ML model are carefully tuned.
- Can increased control lead to higher risks (of building a poorly performing ML model)?
    - higher configurability leads to higher risks of producing poorly performing models.
- How much can MLaaS systems optimize the automated portions of their pipeline?
    - this internal optimization successfully improves these platforms’ performance
    - but still need improvements
    

#### 9.0.0.18. {ne-natcom18} Wang, Bo, et al. "Network Enhancement: a general method to denoise weighted biological networks." arXiv preprint arXiv:1805.03327 (2018).
- [Group]

#### 9.0.0.19. {plstm} Neil, D., Pfeiffer, M., & Liu, S. C. (2016). Phased lstm: Accelerating recurrent network training for long or event-based sequences. In Advances in Neural Information Processing Systems (pp. 3882-3890). 
- [Detailed]

#### 9.0.0.20. {click_seq_prediction_THMS19} Lee S, Ha R, Cha H, et al. Click Sequence Prediction in Android Mobile Applications[J]. IEEE Transactions on Human-Machine Systems, 2018: 1-12.
- Data collection tool: CST. This tool can collect the buttons and the corresponding click actions.
- PathFinder: the scheme for collecting click and predicting click sequences without requirements, such as modifying the system or applications. 
- Individual model to provide personal predictions. 
- Use LSTM.




=======================================================================
# 10. 数学机理（Mathematics）
#### 10.0.0.1. {Li_SSDMV_ICDM18} Chaozhuo Li, Senzhang Wang, Lifang He, Philip S. Yu, Yanbo Liang, and Zhoujun Li. “SSDMV: Semi-Supervised Deep Social Spammer Detection by Multi-view Data Fusion.” In Proceedings - IEEE International Conference on Data Mining, ICDM, 247–256.2018

#### 10.0.0.2. {Gu_COPYnet_ACL16} Jiatao Gu, Zhengdong Lu, Hang Li, and Victor O.K. Li. “Incorporating copying mechanism in sequence-to-sequence learning.” In 54th Annual Meeting of the Association for Computational Linguistics, ACL 2016 - Long Papers, 1631–1640.2016

#### 10.0.0.3. {Vinyals_PtrNet_NLPS15} Oriol Vinyals, Meire Fortunato, and Navdeep Jaitly. “Pointer Networks.” In Proceedings Advances in Neural Information Processing Systems. 2015, 1–9.2015

    
#### 10.0.0.4. {Deep Multi-View Spatial-Temporal Network for Taxi Demand Prediction，AAAI18}
本文本文综合了`时间`、`空间`、`语义`三个方面来预测交通出行需求量， 并提出了出了一种综合多视角的模型（空间、时间、语义）。

1. 空间：local CNN，强调了邻近空间相似，较远的位置参与训练之间会有负作用(使用每个区域的需求量数据）
2. 时间：传统LSTM（使用时间序列数据比如天气）
3. 语义：使用“区域图”的边来表达区域对间需求模式的相似性，用graph embedding的方法作为环境特征参与训练（不同区域构建全连接图）

本文通过多视角的方法获得了很好的实验结果，对于其他领域有比较好的借鉴意义。

贡献：
1. 提出了一种综合多视角的模型（空间、时间、语义）
2. 提出局部CNN模型，用于捕捉邻近区域间的局部特征
3. 使用语义进行预测

#### 10.0.0.5. {Avin_PA_www18} Avin, Chen, et al. "Preferential attachment as a unique equilibrium." Proceedings of the 2018 World Wide Web Conference on World Wide Web. International World Wide Web Conferences Steering Committee, 2018.
- The connections between Nash equilibrium and preferential attachment.
- This paper is, up to our knowledge, the first paper providing formal
game-theoretic analytical arguments giving hints of why preferential attachment inherently pops up in the context of social networks. In short, there is no alternative: one must play preferential attachment for maximizing our social capital. This holds for a natural game capturing essential aspects of how connections between individuals are created in some realistic contexts.


#### 10.0.0.6. {geometric preferential attachment} Zuev K M, Boguna M, Bianconi G, et al. Emergence of soft communities from geometric preferential attachment.[J]. Scientific Reports, 2015, 5(1).

#### 10.0.0.7. {Graph maximum likelihood} Bezakova I, Kalai A T, Santhanam R, et al. Graph model selection using maximum likelihood[C]. international conference on machine learning, 2006: 105-112.

#### 10.0.0.8. {likelihood_network} Wiuf C, Brameier M, Hagberg O, et al. A likelihood approach to analysis of network data[J]. Proceedings of the National Academy of Sciences of the United States of America, 2006, 103(20): 7566-7570.

#### 10.0.0.9. {Mathematics_Internet} Willinger, Walter, David Alderson, and John C. Doyle. "Mathematics and the internet: A source of enormous confusion and great potential." Notices of the American Mathematical Society 56.5 (2009): 586-599.

#### 10.0.0.10. {Yao_multi_view_aaai18} Huaxiu Yao, Fei Wu, Jintao Ke, Xianfeng Tang, Yitian Jia, Siyu Lu, Pinghua Gong, Zhenhui Li, Jieping Ye, and Didi Chuxing. “Deep multi-view spatial-temporal network for taxi demand prediction.” 32nd AAAI Conf. Artif. Intell. AAAI 2018.2018
- 本文本文综合了`时间`、`空间`、`语义`三个方面来预测交通出行需求量， 并提出了出了一种综合多视角的模型（空间、时间、语义）。
    1. 空间：local CNN，强调了邻近空间相似，较远的位置参与训练之间会有负作用(使用每个区域的需求量数据）
    2. 时间：传统LSTM（使用时间序列数据比如天气）
    3. 语义：使用“区域图”的边来表达区域对间需求模式的相似性，用graph embedding的方法作为环境特征参与训练（不同区域构建全连接图）
- 本文通过多视角的方法获得了很好的实验结果，对于其他领域有比较好的借鉴意义。
- 贡献：
    1. 提出了一种综合多视角的模型（空间、时间、语义）
    2. 提出局部CNN模型，用于捕捉邻近区域间的局部特征
    3. 使用语义进行预测


# 11. 现实网络系统搭建
## 11.1. load balancing
#### 11.1.0.1. {Liu_MobileCDN_TON18} Jiayi Liu, Qinghai Yang, and Gwendal Simon. "Congestion Avoidance and Load Balancing in Content Placement and Request Redirection for Mobile CDN." IEEE/ACM Transactions on Networking 26, 2: 851–863. 2018.
- two problems
  - 1) the content **placement problem** decides which contents should be replicated on each BS storage; 
  - 2) the **user request redirection** problem determines to which BS the missing requests should be redirected.
- we propose a joint content placement and user request redirection mechanism to avoid network congestion and to provide load balancing in the Mobile CDNs
- ﬁrst attempt to formally address joint content placement and user request redirection

#### 11.1.0.2. {Bai_EfficientLB_FSKD09} Yun Bai, Bo Jia, Jixiang Zhang, and Qiangguo Pu. "An efficient load balancing technology in CDN." Prof. of FSKD, 510–514. 2009.
- make use of network topography information, file access history, and server load information
  - to define the popularity of files or the **hotness** of the file 
  - Algorithm for content distribution: file access history 
  - Algorithm for content routing: topography information and server load information

#### 11.1.0.3. {Mathew_energy_aware_INFOCOM12} Vimal Mathew, Ramesh K. Sitaraman, and Prashant Shenoy. "Energy-aware load balancing in content delivery networks." Proc. of INFOCOM: 954–962. 2012.
- CDN能源消耗很大，以能源优化作为一阶原则，依赖三个指标
  - 最大化能耗削减、
  - 最大限度地减少对客户端感知服务可用性 （SLA） 的影响，
  - 限制关闭服务器转换的频率，以减少磨损及其对硬件可靠性的影响。
- compared work: [13]. previous work didn't consider the SLAs (service availabilities), while this work consider it
  - SLAs are the most crucial of the three metrics since violations can result in revenue losses
- 我们的结果表明，CDN 的能耗可降低 51%
- local LB - the same cluster of the datacenter
  - offline algorithm
    - know the information of the all flows
    - local load balancing **algorithm OPT** using dynamic programming
    - Algorithm OPT is a optimization algorithm. it produces a schedule m t , 1 ≤ t ≤ n, that can serve the input load with the smallest energy usage.
  - online algorithm
    - just know the past and the current flow information
    - **algorithm Hibernate** that achieves the “sweet spot” with respect to all three metrics,
    - spare rules: spare capacity rule & hibernate rule
- global LB - the multiple cluster of the datacenters
  - view a cluster as a single cluster node in global setting
  - then run **algorithm Hibernate** 
  - energy savings due to global load balancing were modest in the 4% to 6% range
  - while a 10% to 25% reduction in the average transitions can be achieved by global load balancing

#### 11.1.0.4. {Zhang_wildLB_SIGCOMM17} Hong Zhang, Junxue Zhang, Wei Bai, Kai Chen, and Mosharaf Chowdhury. "Resilient datacenter load balancing in the wild." Proc. of SIGCOMM, 253–266. 2017.
- 提出了能够适应不确定性(动态流量、拓扑不对称和故障)的负载平衡方案
- 在拓扑不对称情况比同类方案优10%-20%
- **在故障情况比同类方案优32%以上**

#### 11.1.0.5. {Olteanu_beamerLB_NSDI18} Vladimir Olteanu, Alexandru Agache, Andrei Voinescu, et al. "Stateless Datacenter Load-balancing with Beamer." Proc. of NSDI. 2018.
- 实现了一个无状态和可扩展的数据中心负载均衡器
- **该软件的速度是google的两倍**
- 用于比较的吞吐量的定义：server中每个核的吞吐量
- https://github.com/Beamer-LB

#### 11.1.0.6. {Eisenbud_googleLB_NSDI16} Daniel E. Eisenbud, Cheng Yi, Carlo Contavalli, et al. "Maglev: A fast and reliable software network load balancer." Proc. of NSDI: 523–535. 2016.
- google实现的负载均衡。已经部署在google cloud上
- 这篇文章经常被paper的ref

#### 11.1.0.7. {Patel_Ananta_SIGCOMM13} Parveen Patel, Deepak Bansal, Lihua Yuan, et al. "Ananta: Cloud scale load balancing." Proc. of SIGCOMM, 207–218. 2013.
- Microsoft实现的负载均衡。部署在Windows Azure公有云
- 这篇文章经常被paper的ref

#### 11.1.0.8. {Gandhi_Duet_SIGCOMM14} Rohan Gandhi, Hongqiang Harry Liu, Y. Charlie Hu, et al. "Duet: Cloud scale load balancing with hardware and software." Computer Communication Review 44, 4: 27–38. 2015.
- 将负载平衡功能嵌入到硬件交换机, 比软件多10倍容量，减小10倍的延迟

#### 11.1.0.9. {Yu_SDLB_MECOMM17} Ye Yu, Xin Li, and Chen Qian. "SDLB: A scalable and dynamic software load balancer for fog and Mobile Edge Computing." Proc. of MECOMM, 55–60. 2017.
- 提出了一种可扩展的、动态的新负载均衡方案
- 满足移动边缘计算的要求
- 使用最小完美哈希实现算法

#### 11.1.0.10. {Ghorbani_Drill_SIGCOMM17} Soudeh Ghorbani, Zibin Yang, P. Brighten Godfrey, Yashar Ganjali, and Amin Firoozshahian. "Drill: Micro load balancing for low-latency data center networks." Proc. of SIGCOMM, 225–238. 2017.
- 在微秒时间尺度上尽可能均匀地分配负载
- 基于本地队列占用率+随机算法

#### 11.1.0.11. {Miao_silkroad_SIGCOMM17} Rui Miao, Hongyi Zeng, Changhoon Kim, Jeongkeun Lee, and Minlan Yu. "Silkroad: Making stateful layer-4 load balancing fast and cheap using switching asics." Proc. of SIGCOMM, 15–28. 2017.
- 切换专用集成电路来构建更快的负载均衡器
- 能同时负载平衡10^7个连接

#### 11.1.0.12. {Barbette_ConsistencyLB_NSDI20} Tom Barbette, Chen Tang, Haoran Yao, et al. "A High-Speed Load-Balancer Design with Guaranteed Per-Connection-Consistency." Proc. of NSDI: 667–683. 2020.
- 支持均匀的负载分布和每个连接的一致性
- 可扩展，内存效率高，对阻塞攻击有弹性，处理包速度快

#### 11.1.0.13. {Wang_weightedLB_SSNASC14} Weikun Wang and Giuliano Casale. "Evaluating weighted round robin load balancing for cloud web services." Proc. of SYNASC, 393–400. 2014.
- 对每个服务器分配权重
- 来实现加权轮询负载均衡策略

#### 11.1.0.14. {Duchene_TCP_LB_ICNP17} Fabien Duchene and Olivier Bonaventure. "Making multipath TCP friendlier to load balancers and anycast." Proc. of ICNP. 2017.
- 将多路径TCP与现有的无状态负载平衡器兼容
- 在Linux内核中实现了这个修改

#### 11.1.0.15. {Wang_LB_MSDN_APNOMS16} Ying Wang, Jinke Yu, Keke Pei, and Xuesong Qiu. "A Load Informing Based Load Balancing Mechanism for Multiple Controllers in SDN." Proc. of APNOMS, 2733–2740. 2017.
- 提出了一种基于负载通知策略的多分布式控制器负载均衡机制


#### 11.1.0.16. {Naseer_disruption-free_SIGCOMM20} Usama Naseer, Luca Niccolini, Alan Frindell, and Theophilus A Benson. Zero Downtime Release : Disruption-free Load Balancing of a Multi-Billion User Website. Proc. of SIGCOMM, 529–541. 2020.
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

#### 11.1.0.17. {Jaseemuddin_TE-Friendly_ICC06} Muhammad Jaseemuddin, Arun Nanthakumaran, and Alberto Leon-Garcia. "TE-friendly content delivery request routing in a CDN." IEEE International Conference on Communications 1, c: 323–330. 2006.
- proposed a CDN architecture that employs a TE-Friendly Request Routing (TFRR) system, which not only distributes the server load but also achieves network efficiency by balancing the path loads.
- Traffic Engineering (TE) objective of a network.

## 11.2. measurement for QoS
#### 11.2.0.1. {Wang_SPDY_NSDI14} Xiao Sophia Wang, Aruna Balasubramanian, Arvind Krishnamurthy, David Wetherall, and Implementation Nsdi. "How Speedy is SPDY?" Proc. of NSDI. 2014.
- 整体而言，这篇论文系统而全面地测量了SPDY相比于HTTP/1.1在各种情况下的优劣，分析了这些现象背后的原因；借助于自己开发的页面加载控制工具Epload系统地进行了大量的可重复实验；此外，对于SPDY服务端推送、优先级这两个优化，也进行了相关实验探究，并实现了基于dependency information的服务器推送机制。
- 详细要点如下：
    - 对于synthetic pages进行了SPDY和HTTP/1.1的对比实验，针对带宽、RTT、web object size等变量进行实验，使用基于决策树的方法进行预测。发现object size和loss rate是影响SPDY最重要的两个变量，因为SPDY对于小而多的objects的情况下表现良好，且得益于single TCP connection，但是在high loss rate的情况下并没有HTTP/1.1表现好（受限于TCP的拥塞窗口）
    - 对于real pages进行了SPDY和HTTP/1.1的对比实验，同样针对1.中的变量进行测量，发现SPDY在70%的真实网页上表现优于HTTP/1.1，且某些网页中速度提升了两倍左右；
    - 针对SPDY受限于high loss rate的情况（TCP拥塞窗口的问题），作者对TCP改进，加入机制在single connection中模仿并发的TCP connection，与SPDY结合使用后发现优化效果良好；
    - 基于之前的工作（Wprof）开发了页面加载控制工具Epload，它可以分离network operation和browser computation，用以更好地测量dependency和computation对于SPDY的影响。经实验发现这两者显著地影响了降低了SPDY的效率，而且RTT和带宽变成了影响SPDY的主要因素（相比于1）；
    - 对于SPDY的请求优先级机制，测试了Chrome-priority和dependency-priority两个请求优先机制，发现效果相差不多；
    - 对于SPDY服务器推送（server push）的机制，作者比较pushed-by-embedding和pushed-by-dependency两个不同的机制，虽然这两个机制速度相差不多，但是后者pushed bytes更少，相当于占用了更少的带宽资源，所以后者更好。
- 感想：本文亮点是使用决策树方法科学分析两种协议的优劣和影响因素，以及在Epload的帮助下避免误差，准确地分析dependency对于SPDY速度的影响，过程相当严谨。这是本人第一次阅读web protocol和system领域相关的文章，由于未形成系统的知识体系，暂时没有好的灵感和想法，不过认为这是一篇很严谨而全面的网络测量型文章，很具有标杆性。


#### 11.2.0.2. {Qian_WebCache_MobiSys12} Feng Qian, Kee Shen Quah, Junxian Huang, et al. "Web Caching on Smartphones : Ideal vs . Reality Categories and Subject Descriptors." Proc. of MobiSys, 127–140. 2012.
- 这篇论文是第一个研究network-wide redundant transfers（来源于inefficient HTTP Caching on cellular device）。主要探究的是在cellular device中应该使用怎样的HTTP caching。
- 详细要点如下：
    - 作者首先介绍了不理想的HTTP caching，主要来源于HTTP implementation的问题：
        - Caching logic 和HTTP的机制不和谐；
        - Cache size 很有限；
        - Non-persistent cache；
    - 实验测量数据来源于ISP和UMICH两个数据集。在一个simulator上进行部署，采用的是HTTP/1.1 的caching logic(RFC 2616)，把实验中每个user的HTTP transaction都导向这个cache simulator；
    - 关于Cacheability and Redundancy，作者发现在client端的redundancy包括Handset issues a request before local copies expire 或 file 未发生变化，redundancy在server端的原因是ot recognize revalidation after local copies expire，并对这些原因进行了分类，测量出其相应的比例；
    - 对于有限的cache size和non-persistent cache，作者发现真正有问题的仍然是caching logic，而且50MB的cache size已经能完成90%的unlimitied cache所能达到的数量；
    - 接着作者对于redundancy的resource impact进行了量化，进行了相关的测量；
    - 最后作者在HTTP libraries和browser上进行了实验验证，证明cache in cellular device的问题所在是problematic caching logic，而非其他因素。
- 感想：这是一篇纯测量型的文章，通过对两个dataset进行测量和分析，得知cache size 和 non-persistent cache并不是手机cache里的主要问题，其真正问题所在为移动设备里cache机制的不和谐。作者在分析中主要得益于对其中的redundancy做了原因分类，才能得到如此详细的结果。未来可能的工作应是针对存在问题的cache logic进行修改。


#### 11.2.0.3. {Han_Anatomy_CoNEXT15} Bo Han, Feng Qian, Shuai Hao, and Lusheng Ji. "An Anatomy of Mobile Web Performance over Multipath TCP." Proc. of CoNEXT, 189–190. 2015.
- 这是第一篇（2015年）系统地测量multipath TCP（MPTCP，即WIFI cellular同时使用）在mobile browsing中的performance，其中涉及了两个协议：HTTP/1.1 与 SPDY。其中，作者发现MPTCP的机制会减轻SPDY对于high loss和低带宽利用率中的缺点，但有时对于HTTP有负面影响。作者分析了其中的根本原因，并提出了相关建议。
- 详细要点如下：
    - 作者首先确定了三个此文要回答的问题：
        - MPTCP相比于single-path TCP，能多大程度减少page load time？
        - networking参数（latency，loss等）对于MPTCP中的每一路会产生怎样的影响？
        - 不同的web protocol（HTTP/1.1和SPDY）和MPTCP之间的interaction是怎样的？
    - 作者开发了一款名为tcpdump-mpw（即multipath web）的工具，来extract MPTCP中HTTP和SPDY的request&response；Testbed则是使用了Squid HTTP proxy，使用一台laptop来获取此proxy上的webpages（使用proxy是因为许多website都是不支持SPDY的，而且HTTP和SPDY的networking环境可控）；使用了Dummynet来模拟众多可能的network conditions（delay， loss等）；
    - webpages是从Alexa上top100中选取的25个网页。test对象包括：HTTP/单路/WIFI，SPDY/单路/WIFI，HTTP/单路/LTE，SPDY/单路/LTE，HTTP/多路，HTTP/多路。其中，PLT最短的是SPDY/多路，但是在单路的情况下，HTTP整体的情况比SPDY要好（可能是因为这些websites中bulk data比例较多）；改变多路控制的congestion control策略，发现CUBIC+SPDY的效果是最好的；对于real websites，MPTCP和SPDY的结合仍然能够达到最好的效果；
    - 作者把结论总结为，SPDY对于MPTCP的利用要比HTTP1.1更好，因为MPTCP解决了high loss 和bandwidth利用率的问题；是否使用MPTCP，取决于secondary path；MPTCP的使用可能受限于local/remote computation。
- 感想：这是第一篇系统测量MPTCP performance的论文，不但对于传统的HTTP/1.1进行了测量，而且也考虑了MPTCP对于SPDY这些新协议的影响。主要指出的问题在于，MPTCP可以解决high loss 和带宽利用率的问题。不过这篇论文面向的对象是mobile device，不知道PC端有没有类似的测量论文。



#### 11.2.0.4. {Balasubramanian_Energy_SIGCOMM09} Niranjan Balasubramanian, Aruna Balasubramanian, and Arun Venkataramani. "Energy Consumption in Mobile Phones: A Measurement Study and Implications for Network Applications." Proc. of IMC. 2009.
- 这是一篇测量手机3种mobile networking techs（3G, GSM, WIFI）的energy consumption情况。实验发现3G和GSM存在tail energy overhead 现象，作者对3种不同的tech都设计了energy consumption模型，利用这些模型，设计了TailEnder协议，用以减少energy consumption。
- 详细要点如下：
    - cellular device中的energy consumption主要起因于两个因素：1.transmission energy use 2. RRC （radio resource control）protocol；WIFI虽然在最开始和AP（access point）连接时会有一个较多的energy cost，但由于使用了Power Save Mode（PSM），后续的maintaining cost并不多；
    - 作者实验中用的是4部Nokia N95手机，energy profiling app用的是Nokia原生的Energy Profiler，在3G，GSM和WIFI中分别进行实验，涉及地理位置、时域等的迁移和变化，发现3G和GSM消耗的energy远高于WIFI，尤其对于一些big data transfer的mission。这是由于3G和GSM在完成一次data transfer后发生的tail energy overhead，这个问题主要导致了energy consumption；
    - 为此，作者设计了TailEnder protocol，用以限制energy consumption。对于delay-tolerant的app，例如发邮件，TaiEnder通过调度transmission在用户可以正常使用的范围内来减少energy use；对于某些受益于prefetching的activity（例如search），TailEnder通过尽可能多地使用Prefetching和saving来减少energy use；
    - 为了测试TailEnder的效果，作者在Email、news feeds和search三个case上进行study，发现使用TailEnder能prefetching更多的news 和 search results，并且在此基础上进行了显著的energy saving。
- 感想：应该是目前我能发现的最早系统进行测量手机energy consumption测量的论文，但是里面测量的依据用的是一个比较high level的Nokia原生API进行energy measurement，相比于昨天读的那篇fine-grained measurement有着明显的差距。不过这篇论文的主要内容是TailEnder的设计，目前对我而言还存在一定的门槛。不过这篇论文还是启发我可以尝试更多fine-grained tool进行网络测量。


#### 11.2.0.5. {Deng_LTE_IMC14} Shuo Deng, Ravi Netravali, Anirudh Sivaraman, and Hari Balakrishnan. "WiFi, LTE, or both? Measuring multi-homed wireless internet performance." Proc. of IMC, 181–194. 2014.
- 这篇论文探究的是which network should an application use, WIFI, LTE, or Multi-Path TCP(MPTCP) running over both? 作者探究了LTE和WIFI在不同size的data上传输的performance（包括上行和下行两个方向）；以及在flow-level上MPTCP的performance（相比于仅用LTE or WIFI），涉及不同的mobile apps进行实验。
- 详细要点如下：
    - 首先介绍了问题的背景。近年来的发展，LTE已经很常用了，其吞吐量也达到了很高的数量级，甚至在某些情况下比WIFI要高，于是就衍生出一个问题，对于app该怎样选择通讯方式——LTE, WIFI, MPTCP；
    - 作者首先对于cellular network和WIFI进行了对比测量。首先开发了一款crowdsourced mobile app，让分布在五大洲共16个不同国家的750名用户在180天内进行使用，经测量实验（包括donwlink和uplink），发现LTE相比于WIFI在速度上要快40%左右；
    - 接着作者开始探究MPTCP的表现。使用的是Linux MPTCP implementation，具体的部署是使用两部手机，一部处于飞行模式但是开启WIFI，一部则是关闭WIFI但使用LTE网络。作者探究了在不同flow size下，LTE、WIFI、MPTCP（LTE，Decoupled 拥塞控制）、MPTCP（WIFI, Coupled拥塞控制）、MPTCP（LTE，Decoupled 拥塞控制）、MPTCP（LTE, Coupled拥塞控制）的情况下，吞吐量的差异；也探究了Full-MPTCP和backup mode的差异；
    - 最终发现MPTCP的效果比TCP要差，而且MPTCP subflow的选择非常重要（可能会产生高达60%的差异）；此外，拥塞控制选用decoupled或coupled也会产生34%的差异；
    - 作者后续对于不同的mobile apps进行了实验，把这些app分为short-flow和long-flow dominated apps；对于前者，MPTCP并不会比exclusive TCP（仅使用WIFI或LTE）要好；而long-flow dominated app的话，MPTCP的帮助就很大，在使用合适的拥塞控制情况下，能够减少高达50%的时间。
- 感想：一篇IMC论文，测量的是WIFI、LTE和MPTCP的performance差异，其中主要的metric是吞吐量。论文前半部份侧重于探讨各种factor对于结果的影响（例如MPTCP拥塞控制等），在flow-level上展示了MPTCP的表现；后半部分则是在实际的应用场景中，对不同的app进行测量，对于这些app进行划分，用以更好地选择通讯方式。最近做的AI-protocol项目，也可以考虑扩展更多的实验场景，例如video stream，mobile app等。



#### 11.2.0.6. {Wang_How_WWW12} Zhen Wang, Felix Xiaozhu Lin, Lin Zhong, and Mansoor Chishtie. "How far can client-only solutions go for mobile browser speed?" Proc. of WWW, 31–40. 2012.
- 这篇论文探究的是client端的optimization和solution对mobile browser速度的影响。涉及caching、prefetching、speculative loading等client端solution，作者们发现prefetching相较于caching有更好的效果，且提供了他们怎么在浏览器Tempo上部署自己的实验的。
- 详细要点如下：
    - 关于背景知识。长久以来，mobile web browser的速度就远远跟不上PC browser的速度（因为设备较差），在如今large web page逐渐增多的情况下，如何提升mobile web browser就成了一个重要的问题，对于client端的solution而言，诸如caching这些optimization较为简单、安全、易于实现，于是作者开始探究这些client端的solution会怎样提升mobile browser speed；
    - 作者通过LiveLab上24个Iphone用户的数据作为dataset（从2010.02——2011.02一年的时间），首先作者探究了这24个用户的websites visiting behavior以及其相应的特征，作者发现同一网站下的网页在resource方面有很多重复的resource，且这些resource是经常随时间变化的；
    - 接着，作者研究了具体的client-only solution。例如，client端的caching，在不同的cache size情况下，会有怎样的结果；client端的web prefetching，以及Speculative loader；这些实验依赖于一个webkit based浏览器 Tempo部署，加以控制；
    - 作者通过Tempo进行subresource、revisits、以及overhead等问题及factors的实验，发现caching并不有效，因为很多当今的网页都共享large portion的resource，这些常常会expire；当huge data usage的情况下，prefetching也并不好，加重了手机的负担；但是在某些情况下，prefetching效果比较好。
- 感想：上周和上上周阅读的论文中都提到了手机web browser的效果之差来源于device的处理速度，比如object loading order等，这篇2012年的论文是第一次系统探究这些client-only solution是怎么影响mobile web browser的。此外，里面用到的Tempo浏览器和上周阅读的WProf一样，都是一款基于Webkit的浏览器或工具，也具有一定的借鉴意义。

#### 11.2.0.7. {Zaki_Dissecting_IMC14} Yasir Zaki, Jay Chen, Thomas Pötsch, Talal Ahmad, and Lakshminarayanan Subramanian. "Dissecting web latency in Ghana." Proc. of IMC, 241–247. 2014.
- 这是一篇测量在非洲加纳地区网络latency的论文，通过2012——2014两年间的测量实验，作者们发现加纳地区web latency的主要瓶颈不是带宽的限制，而是缺乏较良好的DNS server以及caching infrastructure。此外，作者也做了许多end-to-end的latency optimization，发现DNS caching、redirection caching、SPDY都能不同程度地减少web latency（客户端）。
- 详细要点如下：
    - 首先，作者介绍了这个测量文章的背景。他们指出许多发展中国家的网络设施基建经常跟不上如今世界上ICP网页结构的complexity，尽管相关地区的政府已经在提供高带宽、和network penetration，但是依然没有起到很显著的效果。作者们打算通过这次实验找出web latency中的瓶颈；
    - 对于数据收集部分，作者使用了Alexa上2012——2014加纳地区的top webpages，获取HTTP Archive（HAR），在世界上6个不同的location进行实验：NYU、Bremen、Abu Dhabi、Ghana等，实验在university campus network中进行，针对不同地区的情况，使用WIFI和3G HSPA蜂窝网络等；
    - 通过解析page download time，作者们发现其中content downloading只占一小部分，这说明bandwidth并不是资源限制的瓶颈，而其中的真正瓶颈在于DNS resolution阶段；
    - 作者针对DNS caching做了相关测量，发现caching以及root top level的domain DNS server占据了web latency中最关键的点；
    - 针对TLS/SSL做了测量，发现TLS/SSL handshake过程的latency也是一个重要的影响因素；
    - 针对redirection也做了测量，发现如今复杂的大型网页中繁多的redirection也是影响web latency的一个重要因素，而合理地使用caching redirection会降低latency约20%；
    - 最后，作者对于SPDY和HTTP也进行了测量，发现在不同地区、不同的网络条件下，SPDY会有不同程度的速度提升，其中对于非洲加纳地区，SPDY能够减少近30%的page load time。
- 感想：第一次阅读IMC相关的文章，论文较短，不过这篇文章中所做的工作也仅局限于测量，但是具有明显的现实意义。这个工作跨度约两年之久，且涉及的location较多，而且关于DNS瓶颈的测量，对于发展中国家的网络设施基建也给予了启发。目前对于IMC这种测量型会议还没有形成具体的观感，打算后续再读一部分此类的文章。


#### 11.2.0.8. {Qian_Characterizing_MobiSys14} Feng Qian, Subhabrata Sen, and Oliver Spatscheck. "Characterizing resource usage for mobile web browsing." Proc. of MobiSys, 218–231. 2014.
- 本文是一篇综合论述Mobile Web Browsing中resource usage的作用，主要侧重于两个类型的resource：带宽与energy consumption. 作者广泛地探究了许多因素对于mobile web browsing的影响，包括协议的overhead问题、TCP连接、web page content、cache、compression等，最终发现这些处于网络中不同层的因素都会影响resource utilization（对于mobile web browsing而言），而且它们通常与cellular network底层的机制有很差的interaction。此外，作者对于这些因素都相应地提出了自己的建议。
- 详细要点如下：
    - 在介绍过mobile web browsing后，作者指出他们将会focus on两个不同的方面，用以彰显使用者的mobile web browsing体验：bandwidth与battery life。其中，用户在mobile web browsing时，考虑到现实的意义，这个过程应该尽可能占用较少的bandwidth，同样，对于手机也应该消耗更少的power，即作者们关注于手机的radio interface消耗了多少的power；
    - 作者使用了手机上可以使用的measurement工具，UbiDump，它可以通过tcpdump traces来获取更多的网络信息，包括更底层的协议（TCP,IP,SSL等）；
    - 作者对于Alexa前500的网页进行了抓取，也分析了其中的mobile和non-mobile sites；
    - 作者对于protocol overhead进行了实验，对比了HTTPS和SPDY两种协议。分别在cold-cache和warm-cache（non-empty cache）的情况下实验，发现bandwidth的占用由于new TCP connection发生了增多；
    - 对于web contents也进行了实验。作者对于large webs、objects、images进行了测试，而且更深入地对于许多website都会access的hosts，这些一般都是第三方服务（user tracking等），作者们发现把这些东西删去会减少至少39%的带宽占用；
    - 作者深入研究了network idleness对于energy consumption的影响，发现这些idleness时间段内，无线接口仍然会保持工作状态，消耗很多能量，减少这些idle period后，power consumption会节约59%；
    - 作者对于cache和compression也进行了实验，并且对于HTTP、SSL、SPDY都进行了测试，发现SSL stream-level的compression会更有效。
- 感想：仍然是一篇分析mobile web browsing的文章，本文的亮点在于很综合地分析了各个方面对于mobile web browsing的影响，涉及web contents、protocol各个方面，而衡量指标为bandwidth和energy consumption也很合理，接近实际情况。未来可以在做手机相关的测量实验时，考虑用一下里面的UbiDump。



#### 11.2.0.9. {Nika_Energy_WWW15} Ana Nika, Yibo Zhu, Ning Ding, et al. "Energy and performance of Smartphone radio bundling in outdoor environments." Proc. of WWW, 809–819. 2015.
- 这篇论文讨论的话题与手机的radio bundling相关，作者深度地探究了使用手机通讯使用MPTCP会有怎样的影响，对这种影响进行了量化，此外，也衡量了CPU的energy consuming等相关内容。结果说明MPTCP对于performance整体的提高仅占了一小部分，但是期间造成的CPU energy 消耗却很多。
- 详细要点如下：
    - 首先，作者说明其研究背景是smartphone的radio bundling，介绍了两种不同的方式：both radio simultaneously 和 partitioning traffic between two radios. 其中MPTCP是一个传输层的协议，它是把traffic partitioning转移到传输层的一个典范；
    - 接着，作者介绍了他们的Energy Model。如果使用传统的power meter，其缺点在于只能获得整台机器的energy consumption，而不能进行细分。作者使用了更准确的Energy Model，主要包括更准确的CPU Drain、以及同时考虑信号强度：其中，CPU Power具体是实现细节是把两个核分开进行实验和测量，而WIFI和LTE的信号强度则是借助于安卓的API和power meter等工作进行；
    - 对于Data Collection部分，作者在美国的5个城市的63个户外环境内进行data transfer；对于实验主体，包括：LTE-only, WiFi-only, Best Radio, Radio Switching, MPTCP, and Bundling ；
    - 作者主要分析不同的实验主体之间，吞吐量的差异，作为分析performance的标准，发现MPTCP相对于其他方法，提升的performance很有限，且在某些environment中会呈现出较差的效果；
    - 对于energy consumption，作者针对每一次transfer进行测量，并探究data transfer size 对结果的影响，发现MPTCP产生了更多的instantaneous power draw，但是整体的energy consumption是降低的，因为transfer次数降低了；
- 感想：第一次阅读测量energy consumption的文章，这篇论文的亮点是第一次使用规范、准确的energy model用以衡量radio bundling中的energy。



#### 11.2.0.10. {Chan_3G_MobiCom02} Mun Choon Chan and Ramachandran Ramjee. "TCP/IP performance over 3G wireless links with rate and delay variation." Proc. of MobiCom. 2002.
- 这是一篇测量TCP/IP簇协议在3G无线网络中相关表现的文章，主要探究的是variable rate和variable delay对于TCP连接的影响，并且作者们设计了一个模型，根据rate和/或delay预测TCP在一个连接上的吞吐量。此外，作者们也提供了一个network-based solution——Ack Regulator，来降低variable rate和variable delay的影响。
- 详细要点如下：
    - 作者研究的动机是，在3G网络中rate和delay的波动较大（2002年），因此对于TCP/IP能否在3G上很好地运行，探究rate和delay较为重要；
    - 作者引用了前人的model，来模仿一个ideal的TCP场景，RTT、rate等都是constant，在可控的范围内；接着，作者分别model了highly variable 拥塞窗口的场景、two-loss event 和 three-loss event——用这些环境进行了实验；
    - 接着，作者使用Ack Regulator来降低rate和delay的影响，并做了相应的实验探究，它是一个基于3G network的implementation；
    - 作者分别在variable rate、variable bandwidth、variable delay and bandwidth、high data rate中做了相应的测量实验，得知了这些参数对于3G中TCP/IP簇协议的影响；
    - 最后作者对于Ack Regulator的相关参数也做了相应的实验测量。
- 感想：一篇2002年的文章，展示的是最早3G出现时，大家是怎么测量TCP/IP在新的通讯技术上进行测量的；不过论文中出现的适配于旧协议的相关算法，没有特别地细看。不过这篇论文里提醒我们在测量后，最好可以综合现有工作里的相关implementation，可能别人只是实现，但是没有详细测量，这些我们也可以顺便做一下。



#### 11.2.0.11. {Kakhki_QUIC_IMC17} Arash Molavi Kakhki, Samuel Jero, David Choffnes, Cristina Nita-Rotaru, and Alan Mislove. "Taking a long look at QUIC." Proc. of IMC, 86–94. 2019.
- 这篇论文主要探究了在不同的scenario下，QUIC各机制表现的优劣，其比较对象是TCP+HTTPS，在多个experiment场景中展现了QUIC的很多问题。
- 详细要点如下：
    - 在desktop的scenario中进行实验，发现几乎在任何的networking场景中，QUIC的表现都比TCP+HTTPS的效果要好，主要得益于记录服务器状态进行0RTT传输的机制；
    - 对于packet的重列序，基于UDP的QUIC对于所有的packet都有标识号，但是在out-of-order的情况下，QUIC协议会误判这些为packet loss，因此相比于TCP会减弱效果；
    - 对于不同的phone device做出了实验，发现在旧的手机设备上，QUIC的效果很差。可能的解释是，QUIC依赖于应用层，而且强制加密，对于旧设备上的表现效果可能会减弱；
    - 此外，相比于HTTP进行实验，作者们也发现QUIC的拥塞控制机制很不公平，可能会占用更多的带宽和传输资源；
    - Google第一篇QUIC相关的论文（06.29已阅读）中做了video stream相关的实验，本论文进一步拓展，发现仅在高分辨率的视频流上，QUIC的表现才更显著；
    - 对于Chromium v52版本，作者们也发现了一个关于拥塞控制窗口的bug，不知道目前有没有被修复；
- 感想：一篇更详细进行QUIC experiment的论文，其中的实验展示出了上周SPDY相关论文没有的实验，涉及不同的browser设备、视频流实验场景，而且不局限于Page load time，这也提醒我们以后如果做网络测量实验，可以用更多的实验场景，不要仅局限于PLT。不过这篇论文关于网络知识的细节，还有些没有搞懂，打算明天继续补一补。



#### 11.2.0.12. {Nejati_An_WWW16} Javad Nejati and Aruna Balasubramanian. "An in-depth study of mobile browser performance." Proc. of WWW, 1305–1315. 2016.
- 这篇论文系统地测量了mobile browser相比于non-mobile browser在加载网络页面上的速度情况，验证了前者速度明显比后者慢的事实，从宏观和微观的角度分析了mobile browser速度慢的原因为何，发现其主要瓶颈位于网络页面加载的computation过程中。
- 详细要点如下：
    - 作者借助于Wprof工具分析网页加载的dependency情况，提取其中的critical path；由于Wprof是面向non-mobile browser的，作者额外编写了Wprof-M，用于mobile browser的分析；
    - 作者把网页加载的activities分为两类：computation和network，前者涉及HTML parsing、js/css evaluation、rendering；‘后者涉及downloading object；希望能够在critical path中分析二者的比例找出mobile browser的瓶颈所在；
    - 对于networking情况的设置，作者设置了6种环境：Average/Poor WIFI/3G/4G；
    - 首先分别用mobile-browser和non-browser在emulated network中加载真实静态网页（电脑端页面），发现前者消耗时间很长，接着作者根据computation 和 network activity的分类观察它们在两种browser的critical path中所占的比例，发现mobile-browser中computation占的比例比network的要大，但是在non-mobile browser中情况恰好相反；
    - 接着作者在mobile-browser上加载手机端页面而非电脑端页面，发现结果和上一条一样；换了计算能力更强的手机，发现对computation在critical path中所占比例的影响并不大，说明手机能力强也不能积极地影响mobile-browser；
    - 接着作者在真实网络而非emulated network中进行相同的实验，得到了相同的结果，验证了这个性质，说明mobile browser速度慢的瓶颈确实在于computation；
    - 然后，作者在微观层面做更深入的分析。例如，比较mobile-browser和non-mobile-browser在critical path中，相似activity所占的比例（例如下载同一张图片），量化了二者critical path的相似度，发现虽然它俩的critical path涉及的每个object相似度很低，但是同类的object相似度很高；
    - 接着继续分析critical path，发现mobile-browser比non-mobile-browser的computation activity速度要慢4倍，而且对于mobile browser，HTML parsing是critical path中最主要的activity；
    - 继续调查webpage和networking的情况对于mobile-browser速度的影响，发现小网页(<250KB)mobile-browser和non-mobile-browser的表现相差不多；通过改变带宽和RTT改变networking的情况，发现non-mobile browser对于better networking的利用要比mobile browser好；
- 感想：一篇测量型文章，依然面向的是Page Load Time。这周看的前几篇论文都是探究SPDY和HTTP在不同环境中的表现差异，这一篇和它们不同，研究的是手机端的浏览器速度慢的原因。如今手机应用广泛，网络协议的优化只能在networking延迟上起到帮助，但是这篇论文发现影响手机网页浏览体验的关键根本不在于network activity（例如下载objects），而是在于computation activity，尤其是HTML parsing，所以即便以后会有更高效的网络协议，但是它们对于手机端体验的积极影响可能并不显著。这提醒我们要想提升手机端网络浏览的体验，要聚焦于网页本身的设计，这是对于ISP的考验。但是目前这个论文只是发现了这一现象，具体怎么优化没有详细讲述，后续我将看看有没有再深挖的文章。



#### 11.2.0.13. {Erman_towards_CoNEXT15} Jeffrey Erman, Vijay Gopalakrishnan, Rittwik Jana, and K K Ramakrishnan. "Towards a SPDY ’ ier Mobile Web ?" Proc. of CoNEXT, 303–314. 2015.
- 本篇论文是篇测量型论文，针对SPDY在cellular network中的表现做了系统而全面的测量，发现SPDY在cellular network中的性能提升并没有那么显著（相对于HTTP），最后归因于TCP相关机制与cellular network的intertact并不和谐，最后给出了一部分针对性优化的方法。论文的主体部分是通过各方面的实验，探究影响SPDY在cellular network中表现的真正原因。测量指标仍然是Page Load Time（PLT）。后续实验都是在cellular network中进行的。
- 详细要点如下：
    - 首先在20个网页上测试SPDY和Http的结果，通过比较没能比较出一个convincing winner。初步验证了，SPDY的优化效果，在cellular network中的表现没有在WIFI、wired network中那么好；
    - 研究object download times来深挖SPDY在cellular network中表现差的原因。作者把object download time拆解为4个阶段：init、send、wait、receive。发现SPDY的init时间比较短（得益于多路复用），但是wait阶段时间比HTTP的长。这个发现让作者注意力放到SPDY proxy->client的过程，说明更多的问题可能出在那里；
    - 研究Web Page design和objects dependency来深挖SPDY在cellular network中表现差的原因。真实网页中object之间的dependency、以及objects in different domain可能是影响SPDY的因素，作者把真实网页中的所有资源放在一个server上 vs 把所有资源都放在不同的domain上，在这两种情况下进行实验，发现object dependency并不是影响SPDY的因素，因此实际web page design对于SPDY的影响并不是主要因素，而且SPDY的prioritization机制对于SPDY在cellular network中的表现并不是全能的；
    - 研究server-proxy这段传输，观察数据传输和接收的瀑布图发现，server-proxy之间的传输也不是导致SPDY在cellular network中表现差的原因；
    - 接着开始调查proxy-client这段传输，测量传输过程中的unacknowledged bytes，发现问题在于proxy向client传输东西时，proxy端作为发送方时congestion window的问题；
    - 进一步开始研究proxy端congestion window growth的情况，发现connection有长时间的idle，这是导致SPDY在cellular network中表现差的主要原因。接着解释cellular network中的RRC状态机与TCP机制之间存在的问题，并指出retransmission对于单个TCP connection（SPDY）比多个 TCP connection（HTTP）的负面影响要更大；
    - 作者为了验证上一条结果，开始在SPDY中加入稳定而小量的额外数据传输，使得RRC状态机始终处于DCH mode，经实验发现，这个情况下SPDY的效果确实变好了；
    - 前面的实验都是在3G网络中进行，接着作者转移到LTE网络中进行同样的实验，发现LTE对于RRC状态机的优化确实表现出比3G网络更好的水平，这个结果再次验证了RRC状态机对于SPDY表现的影响；
    - 最后作者针对这个情况，选择优化TCP，来改善SPDY在cellular network中的表现，可能的TCP优化方式有：Resetting RTT Estimate after Idle 、Benefit of Slow Start after Idle、Cache TCP Statistics 。
- 感想：依然是SPDY系列的测量型文章，本文的侧重点在于发现和解释为什么SPDY在cellular network中表现没有那么好（虽然前人工作中SPDY在WIFI、wired network中表现良好）。作者探索原因的过程很系统，步步为营，涉及object download times、Web Page design、server-proxy传输、unacknowledged bytes等各个方面，一步一步地把问题锁定在proxy-client这段传输中，发现问题在于cellular network的RRC状态机和TCP之间存在的交互问题，这一问题成为了影响SPDY表现的主要因素。目前不太清楚有没有测量SPDY在5G中表现效果的文章，感觉可能是一个比较好的实验的方向。



#### 11.2.0.14. {Rosen_push_WWW17} Sanae Rosen, Bo Han, Shuai Hao, Z. Morley Mao, and Feng Qian. "Push or request: An investigation of HTTP/2 server push for improving mobile performance." Proc. of WWW, 459–468. 2017.
- 此文是一篇针对Http/2中server push机制，系统测量该机制在网络传输中表现的效果，测量标准是Page load time（PLT）。论文主要从三个方面论述server push的影响：content pushed、网络参数、网页本身的性质。此外也研究了sever push产生的energy impact。
- 详细要点如下：
    - 比较push everything和push only js/css，发现前者效果更好；此外，将实际网页中不存在于同一个域名（起因于domain sharding等）的content从server push中刨除后，发现server push的效果变差了，说明域名分片这些server push有阻碍；
    - 分别在 WIFI laptop、LTE tethering、LTE phone、Ethernet上做实验，发现在LTE和WIFI的条件下，server push相对于同条件下的no push的提升程度更显著；接着在不同的手机设备上进行实验，发现具有更好processing power的设备对于server push的效果也有影响；
    - 针对latency的变化做实验，发现在high latency的情况下，server push相比于no push的提升效果更显著；
    - 针对packet loss的变化做实验，发现在very high packet loss情况下，server push相比于同条件的no push的效果变差，不过在稍低的packet loss情况下，前者比后者效果要好；同时也分别对uplink和downlink的packet loss分别做不同的实验，发现downlink的packet loss是主要影响server push的因素；
    - 针对bandwidth的变化做实验，发现低带宽的情况下，server push相比于同条件no push的优化效果更显著；
    - 针对web page固有属性的变化进行实验，例如object loading time（eg. js computation）和web object size；
    - casestudy，根据chrome的waterfall diagram分析server push 和no push之间的差异，其实就是举了两三个例子给读者看；
    - 分别在LTE和WIFI环境下分析server push相比于no push的energy per page load，发现在LTE中server push的energy更低，但是在WIFI环境下两者相差不大；
- 感想：一篇测量型文章，非常系统而全面，从content、network参数、web page参数各个方面进行测量，甚至也进行了energy的测量和若干case study。不过这篇文章最大的刷子是，它是第一篇系统测量server push这一个特性对于HTTP/2的影响，server push仅仅是HTTP/2若干优化机制的其中之一而已，但是作者做的很详细且系统。



#### 11.2.0.15. {Saxce_faster_INFOCOM15} Hugues De Saxc. "Is HTTP / 2 Really Faster Than HTTP / 1 . 1 ?" Proc. of INFOCOM, 293–299. 2015.
- 此文是一篇对于Http/2的测量型文章，测量指标依然是page load time（PLT），比较对象为Http/1.1。分别在LAN和普通的Internet connection中比较两种协议对于dummy page和real page的PLT。验证了前人对于SPDY的测量结果，指出了Http/2的一些优缺点。详细要点如下：
- 对于Http/2 Multiplexing和Compression的特性进行测试。
    - 使用了一个仅有一张图片的网页，把它切分成n块来模拟n次requests，测试发现Http/2的multiplexing效果表现显著；
    - 对于real page，在global Internet中进行后续测量，发现Http/2对于大型网页的表现效果更优（因为图片等数据很多）；
    - 对于real page，在3G network中进行测量，发现Http/2的效果变弱了，证明了前人对于SPDY测量的工作中，SPDY在cellular network中表现查的结论。由于Http/2基于SPDY，所以也当然会有这个情况；
    - 在LAN中分别调整latency和packet loss测试它们对于PLT的影响。发现latency越大，Http/2表现优于Http/1.1的差距就越大；packet loss对Http/2的影响非常大，也验证了前人对于SPDY的测量结果；
- 对于Http/2 Server Push和Priority的特性进行测试：
    - 在仅有一个图片的dummy page上做实验，同样是把图片切分成n个piece，发现使用server push比不使用的效果要提升10%的效果；
    - 在priority规则：HTML > CSS > JS > images的条件下，发现比不使用priority的Http/2效果要好6%；
    - 整体而言，证明了server push和priority特性的潜力。但是指出目前（2015年）还没有很系统的server push和priority的规则或方法，还有很多的发掘空间。
- 感想：一篇测量型文章，对象是Http/2，主要验证了前人对于SPDY的测量结果，因为Http/2是基于SPDY实现的，所以前人对于SPDY的测量结果在Http/2中也显现出来。整体而言实验并没有“How Speedy is SPDY？”这篇文章那么系统而丰富，但是由于是最先（maybe）测试Http/2的文章，所以其贡献也是有意义的。此外，构造dummy page的过程中，使用图片切分来模拟multiple requests的方法较为巧妙。





#### 11.2.0.16. {Yan_Puffer_NSDI20} Francis Y. Yan, Hudson Ayers, Chenzhi Zhu, et al. "Learning in situ: a randomized experiment in video streaming." Proc. of NSDI. 2019.
- 分类：video stream; measurements; machine learning;
- 这篇论文，最主要的贡献是部署了一套自己的视频系统，并在该系统上收集了超过十万用户的观看数据，总的数据跨度超过两年。研究了视频流中不同方法在QoE中的表现，说明了传统方法ABR模型在实际表现中比之前的仿真预测结果要好。这篇文章的baseline选择都是很强的文章，比如今年的SIGCOMM论文，能说明他们的可拓展性差，也是一个很大的贡献。文章同时提出了自己的Fugu方法，在预测时使用了每日重训练的有监督学习，在QoE中表现好。
    - 这篇文章的主要贡献是部署了一套自己的视频浏览网站系统称为Puffer，它类似现有视频流的分块传输机制。收集了超过十万的用户观看数据，使用过去一年的6.3万用户观看总长38.6年的视频作为实验数据。该数据集同时对大众进行了公开。
    - 文章研究测量了之前多种方法在该数据集上的表现。评价指标为更高的视频质和更少的停顿，以SSIM和Time spent stall百分比作为两者的量化指标。并对概率样本的置信区间进行分析研究。发现置信区间的长度比之前在仿真中更大，且随着测量数据时长的增加，置信区间逐渐搜索变短。
    - 测量研究还发现了朴素的ABR算法表现好于预期结果。文章提出的可能解释是ABR算法提出了最少的假设，所以普适性更强。
    - 它们提出了自己的一种称为Fugu的算法，它能够在实际部署的网站上进行in place的训练，并每日重新训练校正新数据带来的偏差。结果表明新数据并未带来太大影响，整体模型鲁棒性强。同时，该方法在SSIM和stall上都表现比现有方法好。文章同时对于Fugu的局限性进行了讨论，比如不能确定未来随着数据量的增大该方法会不会突然变差，它对chunk的cache 方法和拥塞控制也使用了比较简单的方法。
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
- 感想：这篇文章属于偏系统化测量的视频流相关的工作。文章的最大贡献在于实现了Puffer，收集了大量数据并将其公开。在之后的研究中，新构建系统挑战太大，但可以考虑使用该公开数据集进行视频流数据的分析。（2020年发表的文章，对于该数据集的使用应该还不算太多）。对于SSIM和Stall以置信区间的方式分析QoE指标，考察对于不同用户跨度和时间维度的表现趋势，也是未来如果将视频流应用到我们工作上，可以参考考量的指标和分析方式。同时，对于之前的baseline工作，如果能证明在不同数据集它们的方法没那么好，可拓展性不佳，也是一个可思考方向。



#### 11.2.0.17. {Bocchi_QoS_SIGCOMM16} Enrico Bocchi, Luca De Cicco, and Dario Rossi. "Measuring the quality of experience of web users." Proc.of SIGCOMM Workshop on QoE, 37–42. 2016.
- We ﬁrst provide a complete taxonomy of the existing WebQoE metrics and tools, and introduce our proposed generalization of the SpeedIndex.
- **Table 1: Metrics to express user perceived quality**
  - Time-Instant metrics
  - Time-Integral metrics
  - Compound Scores
- they proposed two new metrics
  - the ByteIndex and the ObjectIndex,

#### 11.2.0.18. {Cicalese_ACDN_15} Danilo Cicalese, Danilo Giordano, Alessandro Finamore, Marco Mellia, Dario Rossi, and Diana Zeaiter Joumblatt. "A First Look at Anycast CDN Traffic." arXiv preprint arXiv:1505.00946 3, September: 1–9. 2015.
- provide a ﬁrst look at the trafﬁc of ACDNs
  - active and passive measurement
- findings
  - A-CDNs cover 3% web traffic 
  - 50% users encounter A-CDN cache 
  - Internet paths between A-CDNs and clients are stable.

#### 11.2.0.19. {Ruth_perceivingQUIC_CoNEXT19} Jan Rüth, Konrad Wolsing, Klaus Wehrle, and Oliver Hohlfeld. "Perceiving QUIC: Do users notice or even care?" Proc. of CoNEXT, 144–150. 2019.
- QUIC确实是额定速度比TCP甚至调整的TCP都要快
- 然而，我们的第二项研究表明，这种感知的性能提升大部分**不会对用户而言至关重要**，他们对QUIC和TCP的评价难以区分
- A/B test with the real users 
- 这篇论文的主要内容是QoE study，作者通过两个实验研究QUIC和TCP对于用户的使用体验是否有肉眼可见的影响，以及用户对二者的满意度。实验中作者的参数设置较为全面，既使用了普通的TCP，也使用了优化过的TCP。通过实验作者发现用户可以肉眼分辨QUIC和TCP的速度区别，但是对于二者速度的rating没有很大的差异。
- 详细要点如下：
    - 首先作者在related work中指出了前人工作的一些缺点。例如，使用google云服务器搭建实验，会由于信道中其他数据传输不可控的问题对结果产生影响；例如，把网页的资源数据放在同一个server上，违背了真实browsing resource中multi-server的特性；例如，使用Caddy作为server服务器，由于Caddy的quic协议实现的并不好，会产生较差的实验结果；
    - 在基于上述考虑的情况下，作者对于不同的网络协议配置进行了设置：QUIC， TCP， TCP+，以及相应的使用BBR拥塞控制技术的版本。作者使用了Mahimahi framework用来模仿真实browsing中multi-server的特性，保证实验更符合真实browsing的情况。接着在不同的networking情况下，使用各种协议加载网页，录制了加载网页的视频，用于QoE study；
    - 作者在lab、microworker、以及一些网上用户作为volunteer后，进行了QoE experiment。第一个实验是A/B selection，即把两个协议加载页面的视频同时呈现在用户面前，同时播放它们加载页面的情景，让用户回答哪个browsing更快，并给出确信度；第二个实验是单一地把一个协议加载页面的视频给用户看，让用户给加载速度的满意度打分，即rating。通过实验作者发现，大部分用户对于QUIC和TCP之间的差距都能肉眼辨别的出，但是在单独给它们rating时，二者没有很明显的差距。
- 感想：这篇研究web browsing的论文主要目的是探究用户对于不同protocol的满意度，即QoE study，论文里没有涉及技术上的创新，但是对于related work的反思，指出了其他论文方法的不合理性，比如使用单一的server、仅使用了最普通的TCP等。其中可以参考使用的工具是Mahimahi framework，更符合真实网络multi-server的特性。


#### 11.2.0.20. {Fan_Aﬃnity_IFIP15} Xun Fan, Ethan Katz-Bassett, and John Heidemann. "Assessing Affinity Between Users and CDN Sites." Proc. of IFIP Networking, 95–110. 2015.
- first to study the dynamics of the user-to-FE Cluster mapping for Google and Akamai from a large range of client prefixes

#### 11.2.0.21. {Torres_YouTubeCDN_ICDCS11} Ruben Torres, Alessandro Finamore, Jin Ryong Kim, Marco Mellia, Maurizio M. Munafò, and Sanjay Rao. "Dissecting video server selection strategies in the YouTube CDN." Proc. of ICDCS, 248–257. 2011.
- measure the video server selection strategies in YouTube CDN
- Our results reveal that while the RTT between users and data centers plays a role in the video server selection process

#### 11.2.0.22. {Naab_PrefixTopLists_IMC19} Johannes Naab, Patrick Sattler, Jonas Jelten, Oliver Gasser, and Georg Carle. "Prefix top lists: Gaining insights with prefixes from domain-based top lists on DNS deployment." Proc. of IMC: 351–357. 2019.

#### 11.2.0.23. {Luckie_Regex_IMC19} Matthew Luckie, Bradley Huffaker, and K. Claffy. "Learning regexes to extract router names from hostnames." Proc. of IMC: 337–350. 2019.

#### 11.2.0.24. {Müller_DNSSEC_IMC19} Moritz Müller, Wes Hardaker, Matthew Thomas, et al. "Roll, roll, roll your root: A comprehensive analysis of the first ever DNssec root KSK rollover." Proc. of IMC: 1–14. 2019.

#### 11.2.0.25. {Böttger_DoH_IMC19} Timm Böttger, Felix Cuadrado, Gianni Antichi, et al. "An empirical study of the cost of DNS-over-HTTPS." Proc. of IMC: 15–21. 2019.

#### 11.2.0.26. {Moura_DNS_DDos_IMC18} Giovane C.M. Moura, John Heidemann, Moritz Müller, Ricardo O. De Schmidt, and Marco Davids. "When the dike breaks: Dissecting DNS defenses during DDos." Proc. of IMC: 8–21. 2018.

#### 11.2.0.27. {Allman_RobustDNS_IMC18} Mark Allman. "Comments on DNS robustness." Proc. of IMC: 84–90. 2018.

#### 11.2.0.28. {Zhu_LDplayer_IMC18} Liang Zhu and John Heidemann. "LDPlayer: DNS experimentation at scale." Proc. of IMC: 119–132. 2018.

#### 11.2.0.29. {Moura_TTL_IMC19} Giovane C.M. Moura, John Heidemann, Ricardo de O. Schmidt, and Wes Hardaker. "Cache me if you can: Effects of DNS time-to-live." Proc. of IMC, 101–115. 2019.

#### 11.2.0.30. {Foremski_DNS_Observatory_IMC18} Pawel Foremski, Oliver Gasser, and Giovane C.M. Moura. "DNS Observatory: The big picture of the DNS." Proc. of IMC: 87–100. 2019.

#### 11.2.0.31. {Lu_DoE_IMC19} Chaoyi Lu, Baojun Liu, Zhou Li, et al. "An End-to-End , Large-Scale Measurement of DNS-over-Encryption : How Far Have We Come ?" Proc. of IMC, 22–35. 2019.

#### 11.2.0.32. {Li_Traffic_Differentiation_SiGCOMM19} Fangfan Li, Arian Akhavan Niaki, David Choffnes, Phillipa Gill, and Alan Mislove. "A large-scale analysis of deployed traffic differentiation practices." Proc. of SIGCOMM, 130–144. 2019.

#### 11.2.0.33. {Vaere_3bits_IMC19} Piet De Vaere, Tobias Bühler, Mirja Kühlewind, and Brian Trammell. "Three bits suffice: Explicit support for passive measurement of internet latency in QUIC and TCP." Proc. of IMC, 22–28. 2018.

#### 11.2.0.34. {Anderson_TLS_IMC19} Blake Anderson and David McGrew. "TLS beyond the browser: Combining end host and network data to understand application behavior." Proc. of IMC, 379–392. 2019.

#### 11.2.0.35. {Dasari_low_end_IMC18} Mallesham Dasari, Santiago Vargas, Arani Bhattacharya, Aruna Balasubramanian, Samir R. Das, and Michael Ferdman. "Impact of device performance on mobile internet QoE." Proc. of IMC, 1–7. 2018.

## 11.3. measure_tool
#### 11.3.0.1. {Netravali_Mahimahi_ATC15} Ravi Netravali, S Anirudh Sivaraman, Omak Das, et al. "Mahimahi : Accurate Record-and-Replay for HTTP." Proc. of ATC. 2015.
- 这个工作开发了一个framework，Mahimahi，用于record-and-replay HTTP data transfer。可以使用Mahimahi准确地在emulated network conditions（rtt capacity等）复现HTTP data transfer的过程（比如webpage browsing，video streaming等）。在使用Mahimahi的情况下，作者发现了multiplexing protocols（SPDY QUIC）中存在的问题，并在Mahimahi的基础上解决了这些问题，建立了另一个基于proxy的system，Cumulus。
- 详细要点如下：
    - Mahimahi的用途是record-and-replay，即对于HTTP data transfer的过程（例如网页加载、视频播放等）进行record，并在emulated network conditions 的情况下进行复现，以便于发现其中的问题。相对于同类的record-and-replay工具（例如Google's web-page-replay和Fiddler），Mahimahi有如下优点：
        - 准确性。由于现代的webpages上的resource通常是在多个服务器上的，因此如果在复现data transfer时把resource全部集中在同一个server上，将是不合理的。Mahimahi遵循了这个multi-server nature，进行了更准确的复现；作者在实验中也证明了，遵循/不遵循 multi-server nature的测量结果（PLT等）存在极大的差异；
        - Isolation。Mahimahi使用了Linux的network namespace，使得其中的shell和host system中其他的traffic分隔开来，因此可以并行地运行多个instances of Mahimahi shells；但是其他的工具常常会直接改变entire host的network config，因此不具有这个特性；
        - Composability and extensibility。Mahimahi整体由若干shell组成：RecordShell（用于record web browsing） 、ReplayShell（用于复现）  、DelayShell（用于emulates delay）、LinkShell（用于emulates both fixed-capacity and variable-capacity links）。它们之间可以相互嵌套，具有可组合性和可扩展性。
    - 在使用Mahimahi的基础上，作者对于webpages进行了实验，在各类multiplexing protocols（SPDY，QUIC等）的表现上，作者发现它们都不甚良好，其原因在于“request serialization caused by source-level object dependencies present in today’s Web pages”；
    - 于是，作者在Mahimahi的基础上建立了Cumulus system。它主要由两个proxy组成，remote proxy和local proxy，通过二者之间的交互使得objects dependencies的处理转移至origin web server，因此也减少了client和许多server之间建立连接的RTT 时间。通过实验证明，Mahimahi确实体现了显著的效果，相对于HTTP/1.1, SPDY , QUIC 更接近于optimal的表现。
- 感想：这篇论文最大的贡献是提供了Mahimahi这个工具，而它最大的亮点是遵循了现实网页中multi-server的特性，使得emulated网络测量更准确。这也提醒我们，把resource全部放在同一个server中进行emulated网络测量是不明智的，其结果不能准确地代表现实的情况。



#### 11.3.0.2. {Thiagarajan_Battery_WWW12} Narendran Thiagarajan, Gaurav Aggarwal, Angela Nicoara, Dan Boneh, and Jatinder Pal Singh. "Who Killed My Battery: Analyzing Mobile Browser Energy Consumption Narendran." Proc. of WWW. 2012.
- 这篇论文提供了一个infrastructure用以测量energy consumption of mobile browser 渲染网页的过程。这个工具可以详细地测量出手机渲染每个elements（包括CCS JS等）的过程中的energy consumption。通过实验作者们发现，对于CCS和JS的下载占据了energy consumption的主要部分，作者也相应地提出了建议，并在Wikipedia的mobile site上减少了30%的energy consumption。
- 详细要点如下：
    - 首先是问题背景。根据NetMarketShare平台的结果，3%的网页在手机上browsing，而当今的许多网页对于手机设备而言并不energy friendly。这个问题的原因是没有一个很好的方式能帮助developer们理解手机browsing的过程中energy use的详细过程；
    - 于是作者开始develop这个infrastructure用以揭示手机browsing的energy use。作者使用的是Android Developer Phone 2（ADP2），主要查看的是这个设备的battery capacity。如今的mobile device提供的大多都是high level的api，作者们使用了更fine-grained的Agilent34410A来精确地测量手机的的power consumption。在软件层面，在browser上加了一个基于WebKit的Network loader和Cache manager用以控制，在UI-layer加入了监听Browser Activity的函数，形成Metric URLs存入到log文件中；
    - 作者在许多top websites中进行实验，发现Rendering Energy占Total Energy中很大的一部分（但不同网站有显著差异），且分析了各种Web Components的energy consumption，发现相比于Img等其他资源，CSS+JS的download消耗了更多的energy；
    - 作者在实验结果的基础上，对于Wikipedia的手机网页做了改进。对其中的某两个js文件中的具体函数进行修改（关于ElementID的），但不影响正常的浏览效果，并把multiple CSS缩减到一个CSS文件上，以及把Image进行进一步优化，发现energy use被降低了30%，效果非常显著。
- 感想：较早的一篇关于深挖手机网页browsing中energy loss的文章。这个methodology主要得益于硬件测量设备的fine-grained的特点，可以对单个element进行energy use的测量，后续的实验没有太多的亮点，得到的结果很有意义，说明网页中CSS和JS的download有high energy consumption。


#### 11.3.0.3. {Qian_ARO-MobiSys11} Feng Qian, Zhaoguang Wang, Alexandre Gerber, Zhuoqing Mao, Subhabrata Sen, and Oliver Spatscheck. "Profiling resource usage for mobile applications: A cross-layer approach." Proc. of MobiSys, 321–334. 2011.
- 这篇论文介绍了一种cross network layer的方法——ARO，用以更准确地获取mobile app的resource usage。ARO 主要包括了三个重要的部分：（1）准确地推断底层layer的radio resource control states；（2）量化了app traffic patterns对于resource的影响；（3）可以找出energy和radio resource的瓶颈所在。
- 详细要点如下：
    - 首先，作者介绍了这个问题的背景。如今cellular network已经很深入人们的生活了，但是和PC端相比，mobile端还是存在很多challenge，例如对于cellular specific的resource constraints，大家还不能轻易地看到lower layer protocol的相关行为。因此，造成了mobile端radio utilization 或 power consumption并不是cellular network friendly的；
    - 于是，作者在这次工作中开发了一款工具，ARO（mobile Application Resource Optimizer），用以解决此类问题；
    - ARO可以准确地推断出TCP 中的RRC states。这里作者使用了一个基于simulation的方法，它通过直接从mobile上获取traces（而非仅从cellular core network上获取），使用fine-grained transmission模拟，来准确判断RRC states；
    - ARO对于data flow 中的short traffic burst，也可以进行分析，使用了一种算法结合TCP, HTTP, user input 层等各个layer的结果，判断user input、TCP loss 等哪一个factor真正影响了short traffic burst导致的power consumption；
    - ARO 量化了app traffic patterns对于resource utilization和power consumption的影响（例如traffic bursts），这个方法是在两种假设情况下（存在burst 和 不存在burst）比较它们结果的差异，从而量化traffic burst产生的impact；
    - 作者把ARO应用在6个mobile apps中进行实验，发现这些app里存在transfer duplication、scattered bursts、冗重的content prefetching等问题需要解决，并提出了相应的建议
- 感想：这是一篇聚焦于如何uncover手机app中resource usage的问题，虽然是app，但也是网络相关的问题，目前还没有调查普通的mobile web browsing有没有类似的工作，不过反过来也给我们提供一个思路，可以从app的角度入手做实验，例如AI-protocol能不能优化用户的app使用体验等。



#### 11.3.0.4. {Li_WebProphet_NSDI10} Narendran Thiagarajan, Gaurav Aggarwal, Angela Nicoara, Dan Boneh, and Jatinder Pal Singh. "Who Killed My Battery: Analyzing Mobile Browser Energy Consumption Narendran." Proc. of WWW. 2012.
Zhichun Li, Ming Zhang, Zhaosheng Zhu, Yan Chen, Albert Greenberg, and Yi Min Wang. "WebProphet: Automating performance prediction for web services." Proc. of NSDI, 143–158. 2010.
- 这篇论文介绍了一款名为WebProphet的工具，可以用来自动化地对web service进行performance prediction。它的核心是使用一种基于timing perturbation的方法来获得web object dependencies，进而使用这些dependencies来预测对于objects处理的变化，会怎样地影响performance。作者在Google Yahoo的搜索和地图service上进行了实验，用以检测WebProphet的效果。
- 详细要点如下：
    - large scale web service（例如 搜索引擎、地图、social networking等）常常包含了许多web objects，它们的结构和相互依赖是十分复杂的。web service的运营商常常需要在部署更新前，事先预测一下这些optimization对于performance会产生怎样的影响——这个是WebProphet产生的背景；
    - 接着，作者定义了web objects中的dependency，然后通过perturbing the download of individual objects，WebProphet可以获得webpage objects 的dependencies。具体到各个阶段，包括获得non-stream parents、stream parents and dependency offsets，以迭代的方式获得其中的dependency；
    - 在获得了web objects dependency后，进行performance prediction。WebProphet把basic object timing 分为三种：DNS、TCP、HTTP相关，借助于上一步获得的dependency，再考虑client端的delay info，然后在不同的new scenario（即不同的optimization）后，对新的performance进行预测
    - 作者最后在Google和Yahoo的Search、Maps服务上，对于不同的参数（optimization）进行实验，体现了WebProphet良好的预测效果。
- 感想：一篇关于Page Load Time的相关论文，但是作者的目的是为了预测performance，与之前的方法不同，这篇论文着重使用了web objects 的dependency信息来达到预测的目的，这也体现出ICP应该更注重于改善具体网页内容的规划（例如dependency），不过这篇与网络协议等相差很多，其实与我现在正在做的工作比较偏。



#### 11.3.0.5. {Wang_WProf_NSDI13} Xiao Sophia Wang, Aruna Balasubramanian, Arvind Krishnamurthy, and David Wetherall. "Demystifying page load performance with Wprof." Proc. of NSDI, 473–485. 2013.
- 这篇论文主要呈现了一个用于详细展示page load细节的轻量级工具——WProf。它可以用来显示网页请求过程中的许多事务：network load内的constraint、JS/CSS等的依赖、rendering activity等。作者同样用这个工具在不同的setting（end-host caching等）做了很多实验，通过找出网页加载中的critical path，发现computation占了其中35%的时间、以及Cache的重要作用、以及SPDY的相关表现。
- 详细要点如下：
    - 作者首先研究正常的load page过程，具体可以进行怎样的肢解。page load的workflow可以分为4个主要的部分：HTML Parser、Object Loader、Evaluator、Rendering Engine；
    - 接着，作者开始考虑怎么来衡量browser dependency：涉及到HTML Parser、JS/CSS相互依赖、DOM树形成等各方面。在理顺好这些dependency后，通过获取browser doc、browser code（如果开源的话）、以及进行test pages的实验来提取browser dependency；
    - 对于如何进行test pages的相关实验，作者对于network（loading objects in different orders等）、computation（HTML Parsing等）进行测试，成功获得了browser内的dependency policy，并把它们归类为：Flow dependency, Output dependency, Lazy/Eager binding dependency, and dependencies imposed by resource constraints；
    - 由上面的分析，作者们开发了WProf，主要用来测量Page Load每个阶段的时间和dependency 情况，还能够提供critical path。WProf基于Webkit开发，尽可能地做到了轻量化，对于Chrome、Safari仅修改/增加了2K行的代码；
    - 接着作者开始使用WProf进行相关的测量实验。在没有cache的情况下，通过critical path调查load page 过程的瓶颈所在，发现computation过程占了其中的35%，这里面包括了HTML Parsing和JS相关的请求；此外，通过实验发现在有cache的情况下，效果也并没有提高很多，因为critical path中并没有很多的object loads行为；此外，也对SPDY的效果做了实验，发现仅在high RTT的情况下，它的表现才比较显著。
- 感想：这个论文经常被引用，主要是因为大家会用这个WProf工具进行网络测量，获得更详细的数据。这个论文最重要的是系统地解释了page load的过程，并且开发了一款工具来分析它。用WProf进行实验的内容算是一个具体的应用实例，说明WProf确实可以帮助大家发现很多事实。最近在做AI+Protocol的问题，如果能在实验中用到WProf这个工具衡量critical path（因为page load过程比较复杂，影响因素太多了），那么实验过程会比较全面而有说服力。


## 11.4. MLforNet

#### 11.4.0.1. {Dukic_flow_size_NSDI19} Vojislav Ðukić, Zurich Sangeetha, Abdu Jyothi, Bojan Karlaš, Muhsen Owaida, Ce Zhang, Ankit Singla, Eth Zurich, Vojislav Ðuki´cðuki´c, and Sangeetha Abdu Jyothi. “Is advance knowledge of flow sizes a plausible assumption?” In Proc. of NSDI, 565–580.2019
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


#### 11.4.0.2. {Liu_edge_MobiCom19} Luyang Liu, Hongyu Li, and Marco Gruteser. “Edge assisted real-time object detection for mobile augmented reality.” In Proc. of MobiCom.2019
- [这篇有detail的prescript]
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


#### 11.4.0.3. {Liang_NeuroCuts_SIGCOMM19} Eric Lian, Hang Zhu, Xin Jin, Ion Stoica. Neural Packet Classifications. SIGCOMM 2019.
- RL 应用在数据包分类问题上


#### 11.4.0.4. {Xue_deepfussion_MobiHoc19} Hongfei Xue, Wenjun Jiang, Chenglin Miao, Ye Yuan, Fenglong Ma, Xin Ma, Yijiang Wang, Shuochao Yao, Wenyao Xu, Aidong Zhang, and Lu Su. “Deepfusion: A deep learning framework for the fusion of heterogeneous sensory data.” In Proc. of MobiHoc, 151–160.2019
- 更像是一篇人机交互的文章，有两个cite都是来自UbiComp的
- 作者EE的背景+data mining ability
- 用mutil-view sensors data 来检测人的Activity
    - sensors representation moudle：CNN，通过不同的kernel来解决不同sensor数据异构的问题
    - Weighted combination：一种attention机制，考虑到了不同sensor在不同的场景中的contribution不同
    - Cross-sensors correlation：考虑到了不同sensor之间的相关性，最后的实验也证明了相关性高的行为，准确度越高。

## 11.5. Security
#### {Li_Anomaly_MobiHoc19} Zhijing Li, Zhujun Xiao, Bolun Wang, Ben Y. Zhao, and Haitao Zheng. "Scaling deep learning models for spectrum anomaly detection." Proc. of MobiHoc: 291–300. 2019.
- 使用DNN，捕获IoT上LTE网络的物理频谱数据进行分析，通过频谱的信道噪声来预测是否有网络异常、错误使用、攻击等行为的发生
- 挑战性和主要的contribution来自于可拓展性，对于不同的cell和band上，对某个数据集训练的模型，而直接给其他数据集使用是争取率低的。而分别训练模型，开销巨大难以承受。
- 数据形式广，有固定的基站强信号，也有移动弱信号（比如行人、公交车），general模型用LSTM，通过[t-tp,t]时刻的测量数据，预测 [t,t+tq]时刻的频谱。
- 评价指标为频谱上的RMSE等，最后归一化为信道噪声db。
- 本文提出一个general的transfer learning模型，只需要本地短时间的数据，与teacher模型的dense层重新拟合，就能把信道噪声大大降低。
- 实验做了很多对比，包括但不限于本地模型、跨信道模型、迁移学习模型的比较，不同的频段，本地数据的时间长度，固定基站数据和移动测量数据，预测正确率与错误报警率等。显示了本文运用transfer learning的general模型，在做到实时的高效性上，保证了正确性几乎不下降，兼顾了实用性和可靠性
- Takeaways：
    - 比较少见的在信号频谱领域运用了DNN，第一个大规模网络的general模型，同时异常检测正确性较好。
    - 构建transfer learning模型，虽然简单但是高效，能做到实时检测，结合了实际的需求，同时保证了可靠性。

#### 11.5.0.1. {Liu_DNS_IMC19} Chaoyi Lu, Baojun Liu, Zhou Li, et al. "An End-to-End , Large-Scale Measurement of DNS-over-Encryption : How Far Have We Come ?" Proc. of IMC. 2019.
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

#### 11.5.0.2. {Zhang_Flash_MobiSys19} Tao Zhang, Donald E. Porter, Aviad Zuck, and Dan Tsafrir. "Apps can quickly destroy your mobile’s flash – Why they don’t, and how to keep it that way." Proc. of MobiSys, 535–536. 2019.
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



#### 11.5.0.3. {Liu_netfence-SIGCOMM10} Xin Liu, Xiaowei Yang, and Yong Xia. "NetFence: Preventing internet denial of service from inside out." Proc. of SIGCOMM, 255–266. 2010.

## 11.6. Service center

## 11.7. protocol
#### 11.7.0.1. {Nikravesh_An_MobiCom16} Ashkan Nikravesh, Yihua Guo, Feng Qian, Z. Morley Mao, and Subhabrata Sen. "An in-depth understanding of multipath TCP on mobile devices: Measurement and system design." Proc. of MobiCom, 189–201. 2016.
- 这篇论文主要有三个贡献：
  - 1. 对于MPTCP's performance on mobile device，作者们做了the most in-depth study（2016），不但涉及MPTCP本身的performance，而且还研究了cross-layer的情况；
  - 2. 作者发现multipath-aware CDN server selection是一个重要的新的研究问题，展示了这个问题的重要性；
  - 3. 作者根据先前的measurement设计了一个software architecture，MPFlex，来提升multipath performance，通过解耦high-level的调度算法和底层的OS protocol，使得开发者可以加入更多的multipath feature。
- 详细要点如下：
    - 作者对于MPTCP performance展开了in-depth study。使用了15部安卓手机，以及MPTCP of Linux kernel implementation，由于很多server都不支持MPTCP，于是采用了proxy来建立MPTCP；把所有的traffic都redirect到MPTCP proxy上，这个使用Socks5 protocol加以实现，会在每个packet中加一段很小的header；
    - 将15部手机给志愿者后，让他们正常地使用手机。其中的data collect被分为三类：1. passive measurement，即使用modified tcpdump来收集traces，每24小时会随机地挑选一种通信方式（MPTCP（primary path-WIFI）， MPTCP（primary path-cellular），SPTCP）；2. active measurement，每个小时会自动在后台进行预设的browsing行为，比如stream video或download file；3. data upload， 在夜晚充电的时候会上传数据。实验历时一共4个月；
    - 针对passive measurement，对于multipath availability，作者发现在用时上MPTCP是很常现的；对于Path Utilization，handshake latency，以及TCP 吞吐量，page load time，以及video streaming bitrate，作者都做出了详细的分析；对于MPTCP的performance，作者发现其缺点起因于short flow duration，excessive delay of subflows’ handshakes以及其中的调度算法；针对energy footprint，作者也展示了MPTCP的energy consumption的情况，相对于SPTCP有着更多的use；
    - 在Alexa top500的数据集上，作者对于CDN server selection的importance做了证明，发现这个问题对于MPTCP的performance有着一定比重的影响；
    - 基于先前的measurement设计了MPFlex，主要的思路是decouple高层的调度算法和底层的系统protocol，通过加入更多的multipath feature来优化MPTCP的表现。通过实验证明MPFlex对于short-lived flows能够提升63%的速度。
- 感想：这是一篇深入研究MPTCP performance的论文，主要阅读的是其中measurement的部分。作者对于实验的设计非常全面，通过passive measurement捕捉用户日常使用的真实数据，通过active measurement来测试特定scenario下的网络表现，非常persuasive，对于测量任务有借鉴意义。



#### 11.7.0.2. {Langley_QUIC_SIGDC17} Adam Langley, Alistair Riddoch, Alyssa Wilk, et al. "The quic transport protocol: Design and internet-scale deployment." Proc. of SIGDC, 183–196. 2017.
- 本篇论文是QUIC协议的开山之作，由Google公司的相关成员完成。整篇文章展现了QUIC出现的动机、详细设计、测试框架、Internet-Scale deployment，并且对于传输、search、video、Server CPU utilization等做了详尽的测量和梳理，最后对于部署QUIC的Packet Size、Forward Error Correction等做了详细的描述。
- 详细要点如下：
    - 阐述了研发QUIC的意义所在：网络协议及相关实现目前仍然沿用的是许多年前效果很差的方法，TCP的握手延迟、HTTP的head-of-line等问题，说明当下的网络协议存在很大的问题；
    - QUIC的详细设计包括：
        - 快速的连接建立机制。QUIC强制使用加密，通过1RTT或2RTT在客户端存储服务器的状态，下次连接同样的服务器时可以实现0RTT连接，节省连接时间；
        - Stream Multiplexing。使用UDP而非TCP，彻底解决了head-of-line问题，且进行了多路复用的传输；
        - Authentication and Encryption。强制使用加密
        - Loss Recovery。每个QUIC包都有一个packet number，包括那些携带重传数据的包；
        - Congestion Control。QUIC的拥塞控制更为合理，packet number可以用来判断重传包、衡量网络的参数（带宽、RTT等）用以辅助拥塞控制，此外，对于高packet loss的网络，使用多个ACK块指明连续接收的packet；
        - NAT Rebinding and Connection Migration。不同于TCP使用两端IP、端口号标识连接，QUIC是直接为每一条连接分配一个connection ID，所以当高速移动的情况下client的IP地址发生变化时，QUIC可以不断开连接进行connection migration。
    - 接着，作者在Chrome上实现了QUIC，借助于Chrome中良好的experimentation and analysis framework；
    - 作者首先对于handshake latency做了实验，初步发现QUIC有了显著的提升；之后以Search Latency作为新的metric，展示了QUIC帮助用户快速利用搜索引擎的场景；接着继续做了Video Latency、Video Rebuffer Rate的相关实验，并且在不同的Region下也进行了实验测试，也展示了Server CPU相关的参数；最后，作者指出QUIC现有的一些limitations：Pre-warmed connection、High bandwidth, low-delay, low-loss networks、Mobile device等；
    - 之后，作者更深入地研究了QUIC机制里的细节。比如，Packet Size以及 UDP blocking and throttling，对于QUIC的前向纠错机制也做了相应实验（使用了不同的packet protection policy）
- 感想：Google公司对于QUIC协议详细介绍和相关实验的一篇论文，详细解释了QUIC中的各种机制，对各种各样的应用场景、机制内的细节也做了详细的实验。个人认为，挑选Search Latency、Video Latency这些作为metrics是一个很好的选择，很接近真实的网络使用场景（偶然想到能不能用网络游戏来真实地呈现packets小而数量多的网络场景）。基本上这篇文章重点详细看的还是QUIC的design部分。



## 11.8. flow_data
#### 11.8.0.1. {Ray_Vantage_SIGCOMM19} Devdeep Ray, Jack Kosaian, K. V. Rashmi, and Srinivasan Seshan. "Vantage: Optimizing video upload for time-shifted viewing of social live streams." Proc. of SIGCOMM, 380–393. 2019.
- 背景：
    - Social live video streaming（SLVS)的应用日益广泛，主要是各类直播软件，由于移动网络环境不稳定（尤其指直播上传方），并且不同用户对网络延迟的需求不同，如何提高所有观众的用户体验QoE（让用户可以观看到流畅且清晰度尽可能高的直播）。
- 传统技术的缺点：
    - 无法提供不同时延的直播服务，无法利用不同时延来提供更好的清晰度，例如对高时延的需求，可以进行重传来获得更高的清晰度。
    - 针对传统技术的不足，文章设计了Vantage系统，来有效解决上述问题，进而提高各类用户的QoE，Vantage的设计思路如下：
    - 传输实时桢后剩余的带宽进行选择性质量增强重传，并优化编码来平衡可用带宽的分配；Vantage系统的输入有带宽估计、帧的统计信息，输出实时帧的比特率、增强帧及其比特率；
    - Vantage系统的核心时调度程序，用来决定哪些帧要调度重传，以及如何设定它的比特率。重传帧主要通过优先级队列决定，并限制队列的长度；对于重传帧的比特率，通过可用带宽与SSIM-比特率的关系，及相应的参数来计算数值。
- Vantage的优势：
    - 实验验证了Vantage利用延时可以有效缓解带宽不稳带来的卡顿，提高各用户在不同观看时延下的QoE；通过减少上传路径的变化，同时提高了实时观看的质量与延迟观看的质量。

#### 11.8.0.2. {Jiang_FESTIVE_CoNEXT12} Junchen Jiang, Vyas Sekar, and Hui Zhang. "Improving fairness, efficiency, and stability in HTTP-based adaptive video streaming with festive." Proc. of CoNEXT, 326–340. 2012.
- 这篇论文提供了一个新的player —— FESTIVE，来提升视频流的Fairness，Efficiency，Stability，其应用场景是HTTP-based 的Adaptive video streaming。其中作者们根据airness，Efficiency，Stability衡量了现有players中的可提升空间，然后针对bitrate selection和chunk scheduling进行了算法实现（包括带宽 estimation），最后通过实验证明FESTIVE要比其他player在airness，Efficiency，Stability三方面的效果要好。
- 详细要点如下：
    - 首先作者介绍了一下HTTP-based adaptive video streaming和connection-oriented video streaming的区别。其中后者使用的是streaming player，通过streaming control protocol进行流传输控制，均基于connection；前者则是使用了HTTP Adaptive Player, 经由web server or caches 通过传输中的load balancer进行流传输，包括重要的bitrate selection 和 chunk scheduling两个过程；
    - 作者系统地对于三个指标Fairness，Efficiency，Stability进行了解释，并针对现有的HTTP Adaptive Player进行测试，发现player中产生feedback loops的重要factors隐藏在其中bitrate selection 和 chunk scheduling的算法上；
    - 于是，作者设计了一个robust mechanisms进行chunk scheduling，其中包括一个重要的bandwidth estimation环节，对于带宽的variability进行了适应；
    - 通过实验，作者将FESTIVE与其他的players进行比较，发现FESTIVE能够提升40%的Fairness、50%的stability和10%的efficiency。对于带宽也具有一定的鲁棒性。
- 感想：这是一篇关于HTTP-based Adaptive video streaming的论文，其中关于streaming的算法部分没有很详细地看，主要想了解一下HTTP-based 的Adaptive video streaming是怎样的机制。其中对于带宽的鲁棒性监测可以考虑在AI-protocol的相关测量中。


#### 11.8.0.3. {Lee_Collaborative_KDD18} Joonseok Lee, Balakrishnan Varadarajan, Sami Abu-El-Haija, and Apostol Natsev. "Collaborative deep metric learning for video understanding." Proc. of KDD: 481–490. 2018.
- 分类：video stream; embedding; deep learning;
- 这篇论文，研究了视频数据流的视频分类问题。利用视频数据提取的图像和音频构建特征，建立了一个CDML模型，该模型训练出的embedding层能保持视频之间关联的相似性。根据模型的embedding层，文章对该模型应用到不同的视频理解任务，不同人物使用了CDML模型的embedding层，对结果都有很大的提升。
    - 这篇文章以考虑了视频流网站上的视频分类问题，提出了CDML模型，训练一个实用的embedding层保持视频之间的关联性，同时对于实际视频任务的提升较大。
    - 文中提取了视频流中的音频特征和图像特征，并将特征以滑动时间窗口的方式进行标准化并使用ResNet进行训练，最终获得一个embedding层。文章也讨论了对于不同的训练参数对结果的影响。
    - 根据该模型训练的结果，文中对个人视频推荐、多标签视频注释进行分析，同时考虑了模型的可拓展性和时间高效性，配合详细的案例说明，解释了该CDML的embedding层的加入对不同工作都有很大的提升。同时，线下预训练的embedding层，能使得在线上部署时具有很强的拓展性，并且计算代价低，耗时短。
- 感想：这篇文章考虑了视频流网站上的视频分类，构建了一个CDML模型，能同时结合视频流的图像特征和音频特征。对于我们之后的工作，可以考虑使用类似CDML模型，对于大量的视频流数据除了提取网络特征、用户聊天室特征、可视特征（如观看人数）外，还可以提取视频流中的图像特征和音频特征，增加视频流相关研究中的特征种类。同时，这篇文章的写作和对于模型的应用前景的详细分析方式，也是一个很值得学习的地方。


#### 11.8.0.4. {Zhang_Live_NSDI17} Haoyu Zhang, Ganesh Ananthanarayanan, Peter Bodik, Matthai Philipose, Paramvir Bahl, and Michael J. Freedman. "Live video analytics at scale with approximation and delay-tolerance." Proc. of NSDI, 377–392. 2017.
- 分类：video stream; online and offline; urban;
- 这篇论文，研究了大量的城市监控视频，考虑了视频质量和帧数等调取结果对识别精确度和网络环境的影响。文中首先进行了大量的测量，测量了调度策略对CPU使用率等影响的分布情况，并提供了一个整体调度模型。该模型将调度策略分为线上线下两个部分，线上进行小规模的设置处理，线下进行大规模的序列请求和对应的临界资源的请求。在101台机器上进行部署系统后进行测量，整体调度策略的资源消耗小，比现有部署的方法提高了80%的视频质量和7倍延迟降低。
    - 这篇文章以考虑了城市视频监控，在保证视频质量和帧数的情况下，提供一种好的调度方案能降低用户的查询延迟，同时降低服务器的资源消耗。
    - 文中首先详细分析了CPU和视频质量在当前方法下对查询延迟和资源消耗的影响， 并提出了当前方法在实际环境中存在的低分辨率、高延迟、高资源占有的问题，从而根据提出的挑战提出该文章的解决方案。
    - 主要模型VideoStorm分为线上和线下两个部分，线上部分是一个简单的聚类模型对于查询进行聚类，主要数据来源是查询的设置文件，对于相似的查询考虑更充分利用视频传输的资源。线上部分获取的数据量更大，利用启发式算法，它需要较长的运算时间，但周期性地进行数据处理并更新线上模型的聚类精度，提供更好的资源分配方式。
    - 文章提出的模型VideoStorm在101台Azure实际服务器上进行了部署，并进行了详细地实验测量，实验结果发现VideoStorm在最佳情况下的调度方案能提高80%的视频质量，同时降低了1/7的查询延迟；平均情况也能提升25%质量和1/5的延迟，同时能降低CPU的使用率。
- 感想：这篇文章属于偏调度类型的视频流分析文章。文章主要的亮点在于其实际部署在了较多的机器上，且实验的表现结果，在视频质量、预测延迟和资源消耗三个层面远好于之前的调度策略。一个值得学习参考的地方在于，该方法对于资源消耗和视频质量的相关性测量研究比较充分，对于CPU和视频质量的分析可以借鉴该方法。同时，这篇文章将调度大模型分成线上和线下两个部分，这对于之后的模型学习工作也可以考虑，用一个小的线上模型尽量保证较好方案，用一个大的线下模型定时地异步提高精度。


## 11.9. CDN 
#### 11.9.0.1. {Wang_CDNRobustness_SIGOPS02} Limin Wang, Vivek Pai, and Larry Peterson. "The effectiveness of request redirection on CDN Robustness." Operating Systems Review (ACM) 36, Special Issue: 345–360. 2002.
- This paper explores the design space of strategies employed to redirect requests, and deﬁnes a class of new algorithms that carefully balance load, locality, and proximity.
- CDNs are designed to improve two performance metrics: response time and system throughput.
- The idea of a CDN is to geographically distribute a collection of server surrogates that cache pages normally maintained in some set of backend servers. 

#### 11.9.0.2. {Alzoubi_ACDN_TWEB11} Hussein A. Alzoubi, Seungjoon Lee, Michael Rabinovich, Oliver Spatscheck, and Jacobus Van Der Merwe. "A Practical Architecture for an Anycast CDN." ACM Transactions on the Web 5, 4: 1–29. 2011.
- Anycast CDN的挑战：IP anycast 缺乏ware of load awareness


#### 11.9.0.3. {Biliris_CDNbrokering_CC02} Alexandros Biliris, Chuck Cranor, Fred Douglis, et al. "CDN brokering." Computer Communications 25, 4: 393–402. 2002.
- define CDN Brokering as the ability of one CDN to redirect clients dynamically among two or more CDNs.
- to achieve this, they implement DNS-based system the Intelligent Domain Name Server (**IDNS**). 
- IDNS responds to DNS requests intelligently based on a dynamic, load-sensitive con®guration rather than using static information.

## 11.10. schedule
#### {Gu_tiresias_NSDI19} Juncheng Gu, Mosharaf Chowdhury, Kang G. Shin, et al. "Tiresias: A GPU cluster manager for distributed deep learning." Proc. of NSDI, 485–500. 2019.
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

#### 11.10.0.1. {Jiao_Diversion_Mobihoc19} Lei Jiao, Ruiting Zhou, Xiaojun Lin, and Xu Chen. Online scheduling of trafic diversion and cloud scrubbing with uncertainty in current inputs. 2019. Proc. of MobiHoc, 271–280.
- [资源调度]
- 这篇解决的问题是：什么样的scrubbing center资源调度可以获得最小的成本。
- challenges：
  - 成本的形式化表达。重定向和调度过程中涉及到的因素和变量过多，如何全面、精准的定义这种变量，是一个挑战
  - 不确定输入。在成本的定义中有涉及到不确定因素，例如恶意流的占比等，如何在最优化求解的过程中消除这个不确定因素是一个难点
- 本文主要是一个理论优化问题。

#### 11.10.0.2. {Mao_Decima_SIGCOMM19} Hongzi Mao, Malte Schwarzkopf, Shaileshh Bojja Venkatakrishnan, Zili Meng ⋆ , Mohammad Alizadeh. Learning Scheduling Algorithms for Data Processing Clusters. SIGCOMM'19
本文针对目前分布式系统的schedule算法低效问题，设计了一套寄去学习系统Decima，通过学习日志和目前系统状态，发出调度指令最小化任务运行时间。结果显示Decima能够很好胜任这项任务。

本文主要有以下几点贡献：

1. 设计了一套网络模型能够有效处理任意的形状和规模的DAG输入，并对于每个DAG输出高效的并行度结果；
2. 通过一些训练方法，第一次将RL用于schedule任务，特别是这种连续任务（continuous stochastic job arrivals)
3. 基于RL的Decima实现，无需人为介入。评估结果显示非常好。

本文对DAG任务做了很好的抽象和embedding；challenge在于如何有效训练RL模型。论文内容翔实，比较清晰。

## 11.11. routing
#### 11.11.0.1. {Sanadhya_Adaptive_INFOCOM11} Shruti Sanadhya and Raghupathy Sivakumar. "Adaptive flow control for TCP on mobile phones." Proc. of INFOCOM, 2912–2920. 2011.
- 这篇论文主要研究的是在移动设备上TCP flow control的表现，特别是在特定环境下（例如资源受限）flow control的表现情况。作者发现了其中的limitation，并且提出了一个新的方法来进行flow control：adaptive flow control（AFC），并实验证明了该方法能表现得更好。
- 详细要点如下：
    - 首先作者介绍了TCP原有的flow control机制，其中的问题包括，对于资源受限的手机移动设备，这个flow control机制表现不够良好（相比于PC等），此外原有的TCP flow control不能很好地适配reader方的read rate；
    - TCP的flow control问题还包括：application rate较不稳定，因此存在zero window advertisement的问题，此外，经实验，network rate也不稳定（相比于PC）；
    - 作者接着对现有的（2011年）buffer-based solution也做了实验，发现效果仍然微不足道；
    - 接着，在分析过现有的control机制后，作者剔除了adaptive flow control （AFC），它不但使用了buffer，而且依赖于application的read rate，处理了overflow的问题、以及真实场景中burst control的问题；
    - 通过吞吐量等实验证明它的效果很好。
- 感想：一篇比较短的文章，当作是教课书类的材料阅读了。主要是上周考虑到可能会有mobile device实验的想法，观察了一下早年大家是怎么改TCP的。



#### 11.11.0.2. {Wang_flash_coNEXT19} Peng Wang,Hong Xu,Xin Jin,Tao Wang "Flash: efficient dynamic routing for offchain networks" CoNEXT '19
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

## 11.12. QoS
#### 11.12.0.1. {Li_Bridging_SIGCOMM19} Yuanjie Li, Kyu Han Kim, Christina Vlachou, and Junqing Xie. "Bridging the data charging gap in the cellular edge." Proc. of SIGCOMM: 15–28. 2019.
- 随着移动网络技术的发展，越来越多的设备使用蜂窝网络实现低延迟无线接入。它们接入到蜂窝网的边缘，需要使用蜂窝网的流量，并向运营商缴费。这个蜂窝边缘的流量统计是否精准？答案时否定的，由于数据间隙的存在，蜂窝运营商和边缘应用供应商在数据费用上并不总是达成一致的。
- 为什么有这个数据间隙，原因就在于数据丢失（用户发送文件时丢包）和selfish charging的存在。
- 针对上述情况，文章提出了TLC算法：Trusted,Loss-tolerant Charging算法，原理就是让数据丢失和selfish charging相互抵消。大体的思路就是应用商实际所用通常大于它所宣称的使用量，运营商反之。例如，应用商实际发送流量10M，运营商实际发送流量5M，但真实收取流量费用应该统一为8M，但双方开始并没有达到一致，应用商想尽可能的少交，但该算法限制应用商提出的费用必须大于运营商实际发送流量，故他可以发送5-8M之间的请求，运营商同理，他可以申请8-10M的请求；如果双方没有统一请求，便进入下一轮请求，此时范围从5-10M收缩至8m附近，继续进行收敛，直至统一，最终获得实际流量使用情况。
- 文章后面又用实验验证了该方法可以有效的统一实际流量消耗。
- 总结：为了处理运营商和应用商流量计费不统一问题，作者添加了两个条件让一个复杂、难处理的问题变得可解；在分析算法过程中，推导过程很严谨。


#### 11.12.0.2. {Zhang_E2E_SIGCOMM19} Xu Zhang, Siddhartha Sen, Daniar Kurniawan, Haryadi Gunawi, and Junchen Jiang. "E2E: Embracing user heterogeneity to improve quality of experience on theweb." Proc. of SIGCOMM: 289–302. 2019.
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

#### 11.12.0.3. {Gaudette_Guarantee_HPCA16} Benjamin Gaudette, Carole Jean Wu, and Sarma Vrudhula. "Improving smartphone user experience by balancing performance and energy with probabilistic QoS guarantee." Proc. of HPCA, 52–63. 2016.
- 这篇论文使用了一个statistical methods来characterizing，profiling 和 predicting mobile browsing/application中的execution time，把energy save 问题化为一个user satisfaction约束条件下的非线性优化问题。整体而言，这个method的目标是为了减少energy consumption。
- 详细要点如下：
    - 作者首先在背景知识里描述了问题：现代的手机在browsing和app中使用了较多的energy，着重与减少energy use是一个重要的措施，但是根据前人研究结果显示，当一个网页超过10秒后用户就不想继续看了，这说明energy save要受到user satisfaction的约束；
    - 作者详细地定义了这个问题。整体而言这是个statistical model，作者对于UoC（unit of computation）进行了划分（通常对应于手机中的core），使用了概率分布F来表示这个UoC在特定频率下其进行计算任务的execution time，然后在给定计算时间总和的阈值（user satisfaction restriction）的情况下，使得number of objects per second per watt（即单位时间单位瓦特内，能够加载多少的网络资源）最大化；
    - 在给定Computations on a Single Core 、Parallel Computations, Independent Cores  、Parallel Computations, Interacting Cores  三种情况下，作者针对上述的最优化模型进行了建模和分析，给出了最优化的策略；
    - 最后在实验中，这个control scheme达到了29%的power saving，并且能把page load time保持在2秒钟内（90% likelihood）。
- 感想：这篇论文的策略是把多个core的计算规划为UoC，通过预测execution time进行control。但是其中的约束是，如果一味地选择降低energy consumption，那么可以想到execution time可以被尽可能地延长，这样就遇到了PLT 过大的问题，因此作者加入了user satisfaction 作为约束，构建了这样一个statistical model。然而之前减少energy use的方法，很多都是从resource usage的层面入手（比如减少redundant downloading），所以它们本身就有减少PLT的成分，和这个论文的工作不甚相同。



#### 11.12.0.4. {Zhao_Energy-Aware_TPDS15} Bo Zhao, Wenjie Hu, Qiang Zheng, and Guohong Cao. "Energy-aware web browsing on smartphones." IEEE Transactions on Parallel and Distributed Systems 26, 3: 761–774. 2015.
- 对于mobile browsing中Energy-consumption的问题，作者设计了两个techs来解决问题：
    1. 使用一个energy-aware的机制来获取browsing的computation sequence，然后进行重组，使得radio resource可以被release；
    2. 实现了一个prediction method来预测webpage 的reading time，然后在这个期间切换到low power state状态。
- 详细要点如下：
    - 首先作者介绍了3g radio 中的power consumption以及web browser design的背景知识，针对3g radio中的DCH和FACH state，作者指出了其中可以存在的power saving的方法；
    - 针对于mobile browsing中减少energy consumption的问题，作者首先获取web browser中resource的computation sequence，在传统的浏览器中，data transmission computation和layout computation常常是混在一起的，这种情况下对它们的顺序进行reorganize后，可以积攒出整块的时间留出来切换到low power state，达到减少power consumption的目的，在一定程度上也减少了page load time；
    - 设计了一个predictor来预测user reading time。使用的是一个gradient boosted regression tree（GRBT），来进行data mining的工作，其输入是user的historical data（webpage size，transmission time、download objects等），然后预测用户的reading time，如果这个reading time在大于某个阈值的情况下，则可以把手机切换到low power state，来减少energy use；
    - 最后作者通过在安卓手机上构建prototype，使用alexa上的top sites进行实验，证明这些方法能够减少30%的energy consumption，并且在一定程度上也减少了page load time且增加了一定量的network capacity。
- 感想：这篇论文的第二个tech，使用了一个machine learning的方法，依然是借助于webpage properties、transmission time等来源于user的historical data预测reading time，在准确预测这个信息后可以让手机switch to low power state。这又是一个典例，即使用webpage data、和历史访问数据通过机器学习达到某个特征工程or预测的目的。


#### 11.12.0.5. {Liu_SWAROVsky_TMC16} Xuanzhe Liu, Yun Ma, Xinyang Wang, Yunxin Liu, Tao Xie, and Gang Huang. "SWAROVsky: Optimizing Resource Loading for Mobile Web Browsing." IEEE Transactions on Mobile Computing 16, 10: 2941–2954. 2017.
- 这篇论文开发了一个system，SWAROVsky，用以提升mobile browsing的速度，主要解决了3个问题：on-demand loading of sub-resource、redundant resource loading of different URL but same content、redundant loading due to imperfect cache configurations。SWAROVsky的design主要由两个proxy组成——remote cloud-side proxy与local proxy，通过二者对于resource的组合和判断，能够解决上述的问题。最终作者通过50个网页的实验证明了SWAROVsky的有效性。
- 详细要点如下：
    - 首先，作者介绍了SWAROVsky应对的三个问题。
    - on-demand loading of sub-resource。当网页中的sub-resource被需求时（例如img，css等），它们就会在某些时刻被下载，这些sub-resource的下载会产生新的RTT，增加了browsing 耗时；
    - redundant resource loading of different URL but same content。由于CDN和网页开发者本身的考虑（比如强制刷新），有一些具有不同URL的资源被重复地下载，但是他们的content是相同的；
    - redundant loading due to imperfect cache configurations。有时候本地cache的expiration time很短，会导致一些unchanged resource会从cache中丢失，引发了重复下载；
    - 作者通过4个motivating example来展示上述问题。有一个网页HTML的实例及相应的cache configuration，还有它的resource loading sequence以及可能存在的improvement；
    - SWAROVsky的主要结构是dual-proxy architecture。分别是一个remote proxy和一个local proxy。
    - remote proxy始终保持revisiting web server的状态，把其中的resource information记录下来。这里使用了一个resource loading graph来记录这些resource，将它们放到remote repository中。它主要负责鉴别哪些不同URL的resource有着相同content，；
    - local proxy位于浏览器端，包含一个resource matcher，用来接收browser的请求，通过local synchronizer来检查resource是否发生了更新，并由local synchronizer和remote proxy进行交互用来更新和维护local的信息，通过resource loading graph来合理地load 资源，并且处理可能包含相同content的different URLs。
    - 作者通过Alexa中的50个网页做了实验，发现data traffic能够减少17.1%和66.4%（cold start and warm load，respectively），能够减少43.1%的page load time。
- 感想：这是一篇和ReWAP非常相似的论文。而SWAROVsky在design上的不同点是，使用了两个proxy，通过在local proxy能够更专一化地针对本地手机进行resource loading。其中值得借鉴的点是，这篇论文在介绍最开始的三个问题时，没有用大规模的实验去证明，而是在引用前人工作后，加上了类似于case study的motivating example，缩小了自己的工作量，也保证了直观性。

#### 11.12.0.6. {Wang_Similarity_WWW14} Haoyu Wang, Mengxin Liu, Yao Guo, and Xiangqun Chen. "Similarity-based web browser optimization." Proc. of WWW, 575–584. 2014.
- 这篇论文设计了一个technique，基于不同网页里的style similarity（主要来源于CSS）的性质来优化和加速web browsing过程。作者首先分析了不同网页存在相似style的性质，然后基于这个现象设计了tree-structured style graph来组织cache中的style storage，从而达到加速web browsing的目的。
- 详细要点如下：
    - 作者首先分析style similarity在不同网页之间是存在的。比如对于wikipedia，来自同一个domain的两个网页，其CSS和elements都几乎是一样的，除了图片和文字内容有所不同。前人的工作也发现有近40%的网页数据是templates，这说明很容易产生redundancy；
    - 对于Alexa上top8的网页，作者分析了在同一sub-directory下不同网页的HTML data repetition ratio和style matching ratio。最后发现HTML data repetition的不同情况存在较大波动，而style properties却能达到超过80%的相似性；
    - 于是作者基于style similarity来优化web browsing，被称为 similarity-based style reuse。其中主要包括了style storage and management，style retrieving， matching三个阶段；
    - 对于style storage and management，作者设计了一个tree-structured style graph来组织网页的style storage，对于每个website都会建立其一个style graph。这个tree-structured style graph和DOM tree很相似，每个node是<TagName, ID, Class>
    - 当每次visit 新网页时，首先在style tree里搜索有没有已经存好的在同一个sub-directory下的网页的style tree，如果没有的话，就从tree里找其他的style tree，搜索可以reuse的元素和style，在搜索到后就可以直接使用cache，不用再去download了；
    - 作者使用QtWebKit实现了prototype，最后通过实验和user study证明了其方法的优越性。
- 感想：此论文使用的方法和我上个月阅读的所有论文都不太一样，其核心思想是依赖于网页的high style similarity的现象，来为不同网页的style properties建立树结构，在下次新网页访问时可以直接使用cache，避免redundant transfer。其中使用的QtWebKit可以参考一下。


#### 11.12.0.7. {Wang_energy_CN13} Le Wang and Jukka Manner. "Energy-efficient mobile web in a bundle." Computer Networks 57, 17: 3581–3600. 2013.
- 这篇论文实现了一个energy-efficient proxy system来减少mobile browsing的energy consumption，它的核心思路是使用proxy来进行bundling过程，使得信道中不需要再维护multiple TCP connections，而且可以显著减少client端手机的电量消耗。通过实验，作者证明这个基于bundling的proxy system能够良好地save energy，且减少了HTML各类objects的下载时间。
- 详细要点如下：
    - 作者首先通过实验证明现有mobile browsing中存在能量消耗过大的问题。在3G和WLAN的不同网络中，首先探究了两类网络在不同RTT下的goodput（有效吞吐量）情况，接着在两类网络中实时测量它们的energy consumption，拆解为PCH 、FACH、DCH等各个阶段的state进行分析，最终作者总结，由于HTTP statelessness的特性，它依赖于cookies和Etags等来维护client-server之间的状态，这会产生一定量的数据，而且在如今网页objects如此繁多（很多第三方服务在不同的domain上），需要建立多个TCP connections，这会造成high latency，也会产生较多的energy use；
    - 作者设计了energy-efficient proxy system来缓解这种情况。其核心思想是使用bundling的机制来避免上述情况的发生。在client 和 web server之间建立一个proxy，该proxy包含了UTRAN（UMTS Terrestrial Radio Access Network）、Core Network和Access Network三个部分，采用bundling机制使得DNS解析和HTTP fetching等可以全部从proxy这一个地方获得（其中也采用了compression等机制），始终保持link是在工作状态，而且不需要进行multiple TCP connections，减少了client端能量的消耗；
    - 作者分别在3G和WLAN上进行了实验，发现这个system可以显著地减少energy consumption，而且也减少了networking latency。
- 感想：这篇论文和上周阅读的WebPro有些相似，同样是利用了Proxy来优化web browsing，但是策略有所不同：WebPro侧重于减少page load time，这篇论文则是侧重于减少energy use。以后可以参考这篇论文建立proxy和搭建prototype的方法。




#### 11.12.0.8. {Sehati_WebPro_IWQoS15} Ali Sehati and Majid Ghaderi. "WebPro: A proxy-based approach for low latency web browsing on mobile devices." Proc. of IWQoS, 319–328. 2016.
- 这篇论文介绍的是一种使用proxy来减少mobile web browsing time的方法，WebPro。WebPro的核心思路是通过预先的整合和刷新HTML所需的resource，从而在client请求时将HTML和这些resource一起发送给client，从而减少page load time。通过实验，WebRro能够减少26%的page load time。
- 详细要点如下：
    - 作者首先介绍了WebPro的工作背景。正常情况下，当一个client向server端请求网页数据时，先请求一个HTML file，在查找其中需要的objects后，由得到的resource list，再对其中的url进行获取。整个过程需要耗费约1-RTT的时间，对于手机网络通讯（尤其suffer from longer access）则占据了一个较长的时间；
    - 于是，作者以减少上述过程的时间为目标设计了WebPro。WebPro的工作机制就是，建立一个proxy，它和server端处于wired network中，预先地储存好server端HTML所需的各类resource，在HTML更新的情况下，能够更新proxy中的resource，或直接定时地更新。那么在client端request网页时，就可以通过proxy来同时获取HTML和相应的resource；
    - 作者在相应的laptop中建立了proxy作为WebPro的prototype，通过在WIFI和LTE，对于不同的resource内容，例如新闻网站、购物网站等，进行了相应的实验。作者发现在平均情况下，对于这些top websites使用WebPro可以减少约26%的page load time，并且相对于其他的proxy-based solution也减少了5%—51%的page load time。
- 感想：这篇基于proxy提升mobile browsing速度的方法较为简单，感觉早在2015年之前就应该有类似的尝试。不过作者可以在背景知识部分再补充一个实验，证明最开始通过HTML找resource list并下载的过程占据了较长的时间，用这类实验能够证明其工作方向的重要性。



#### 11.12.0.9. {Singh_FlexiWeb_MobiCom15} Shailendra Singh, Harsha V. Madhyastha, Srikanth V. Krishnamurthy, and Ramesh Govindan. "Flexiweb: Network-aware compaction for accelerating mobile web transfers." Proc. of MobiCom, 604–616. 2015.
- 这篇论文介绍了一款工具，FlexiWeb，用以减少mobile page load time，它可以根据client端的networking conditions来判断 是否需要/怎样使用 middlebox技术来压缩page contents，从而达到缩短用时的目的。通过实验发现，FlexiWeb可以减少大约35—42%的mobile PLT。
- 详细要点如下：
    - 作者首先通过实验分析，使用middlebox来压缩web contents（即to proxy or not to proxy）对实际的PLT是怎样的影响。client端使用了一台安卓手机，及chromedriver，server端用了Alexa top500网页作为dataset，使用Web Page Replay tool来缓存web contents，使用AT&T和T-Mobile真实的4G网络作为网络环境；通过实验发现，如今使用middlebox的compression proxies有时会增加用户的PLT，在网络条件好的情况下，使用middlebox进行compression的效果是负面的；但是在网络情况差的情况下，有必要使用middlebox；
    - 于是作者设计FlexiWeb来决定是否需要使用middlebox——根据client的网络环境状况来决定。mobile browser中包括了一个重要的object size prediction module，用以推测相应的request splitting，在client直接向proxy进行request后，proxy会根据内部的network measurement module来处理它遇到的网络环境，进而向server请求数据——如果需要进行compression则在proxy进行compression，否则直接由server不经过proxy返回给client。其中，client端的object size prediction module是一个预测object size的模块，使用了random forest classifier进行了offline training。
    - 作者分别在可控的网络环境和真实的AT&T中进行了实验，涉及中间环节的许多参数，例如mobility，发现FlexiWeb可以显著地减少PLT。
- 感想：这是一篇减少mobile PLT的论文，其中关于网络环境参数的测量以及开发framework的方式对于AI-protocol有一定的参考意义。


#### 11.12.0.10. {Lymberopoulos_PocketWeb_ASPLOS12} Dimitrios Lymberopoulos, Oriana Riva, Karin Strauss, Akshay Mittal, and Alexandros Ntoulas. "PocketWeb: Instant web browsing for mobile devices." Proc. of ASPLOS, 1–12. 2012.
- 作者在这篇论文里介绍了面向mobile device的PocketWeb model，一个基于机器学习方法来预测用户可能访问的next websites/resource，通过prefetching机制来减少web access time，同时也可以降低energy consumption。通过48000个user individual model的实验，对于80—90%的用户，PocketWeb可以准确地预测并prefetch 60%的URL，减少80%的web access time，而且对于50%的用户而言它可以保持same or lower energy dissipation。
- 详细要点如下：
    - 首先，作者通过8000个用户的实验，来证明用户的browsing behavior存在极大的差异，且有着明显的individual spatiotemporal 特点。作者使用了8000个用户的mobile web access logs（历时3个月），分析了其中的repeatability of URLs以及top most frequently visited URLs，根据访问频率把URLs分成两类：untargeted URL和targeted URL——发现8000名用户的数据存在很大的variability；但是通过分析单个用户的访问各类URL时间的特点，作者发现具有strong spatiotemporal features；
    - 接着作者打算使用一个offline training model来预测单个用户的web access behavior（即每个用户有自己的专属model）。从一个用户的历史targeted URL visits数据中，提取其中的时空features以及popularity features，将每一个URL和对应的访问时间根据一定的encode策略形成feature vector，在MART（multiple additive regression trees）中进行training，得到一个预测模型；每次用户在某一时刻执行手机行为（访问url、unlock phone等），先generate出对应的feature，然后在offline model中输入，得到每个URL的访问概率，挑选其中最高访问可能性的URL进行prefetch；
    - 作者为48000个用户训练了对应的model，通过实验发现，对于80—90%的用户可以准确预测60%的URL，因为进行了prefetch，所以对于作者定义的web access time也相应地减少了；通过测量radio's energy dissipation，作者发现采用PocketWeb由于受益于prefetching scheme，可以保持same or lower的energy dissipation。
- 感想：这篇论文简而言之是应用prediction model预测用户下一次可能访问的url，借助于prefetching机制来减少手机用户的网络访问时间，一定程度上也可以减少energy consumption。这篇论文之所以成功，是因为其中的数据量很大、实验做的规模很大，不过其中应用的只是一个较为简单的stochastic gradient boosting tech，在现有那么多机器学习的模型实例中，如果加入一定的创新也许可以获得更好的效果。

#### 11.12.0.11. {Liu_ReWAP_TMC17} Xuanzhe Liu, Yun Ma, Shuailiang Dong, Yunxin Liu, Tao Xie, and Gang Huang. "ReWAP: Reducing Redundant Transfers for Mobile Web Browsing via App-Specific Resource Packaging." IEEE Transactions on Mobile Computing, 2625–2638. 2017.
- 这篇论文介绍了一款名为ReWAP的工具，它可以通过减少redundant transfer来减少mobile web apps的load time。ReWAP的核心思想是，使用resource packaging，把stable resources保存在本地，通过检测resource的更新来维护这个resource package，并能准确发现哪些resource可以locally load，从而减少mobile web apps 中的redundant transfer。通过与使用普通cache机制的浏览器比较，在中位数的情况中ReWAP能够减少51%的load time。
- 详细要点如下：
    - 作者首先介绍了之前他们研究redundant transfer的工作。简而言之，redundant transfer是指resource被重复地下载多次，即便这个resource并没有发生更新。根据作者之前的工作，虽然目前的浏览器cache机制能够缓存70%的resource（Alexa top100的网页），但是实际上其中只有不到50%的resource会从cache中被load；
    - redundant transfer现象的原因在于，现有的cache机制有明显的缺陷：比如cache configuration存在问题，heuristic expiration以及conservative expiration time会影响对于是否load cache的决策；此外web development中也有自身的问题，比如resource命名中加入random strings进行强制刷新；
    - 于是作者设计了ReWAP来减少redundant transfer。作者的灵感来源于native apps，即使用一个resource package来储存和判断哪些resource可以被locally cached，把这个机制应用到Web apps上面。ReWAP只需要在web apps的server端进行modification，即在server端额外的维护一个wrapper（每个网页都有一个unique wrapper），这个wrapper其实就是一个HTML page，当client访问server上网页时，首先访问的是这个wrapper，由它来决定是否需要进行locally loaded（即client本地浏览器的cache）。这个wrapper主要包括两个部分：
        - package manifest：用以储存哪些资源是在package resource里的；
        - package mapping：将url和对应的package resource里的资源进行对应，
    - 通过与wrapper的交互，client就可以知道哪些cache的资源是不需要重新下载的（其实client端用的还是浏览器自带的cache，但是由wrapper来决定是否load cache），在这种情况下，redundant transfer就大大地减少了；
    - 作者经过15天的50个web apps的数据，发现在中位数的情况下ReWAP能够减少51%的load time。
- 感想：这篇论文介绍的ReWAP实际上是在原有的browser cache基础上，通过一个额外的wrapper HTML决定哪些resource可以进行locally load。阅读这篇论文主要加深了我对于cache机制的理解，对于目前项目的工作暂时没有什么启发。但是我认为这个ReWAP对于server端的web develpment还是有一定要求的，因为除了web app installation，还要考虑wrapper的内容。





#### 11.12.0.12. {Wang_Shandian_NSDI16} Xiao Sophia Wang, Arvind Krishnamurthy, and David Wetherall. "Speeding up web page loads with Shandian." Proc. of NSDI, 109–122. 2016.
- 这篇论文介绍了一个工具——Shandian，它可以通过restructure page load的过程来加速page load。其中，作者首先通过实验说明page load inefficiency来源于contents & structures of webpage，而且来源于page load的具体流程（例如resource中的blocking限制了加载的顺序）。针对这两个问题作者设计了Shandian，可以控制page load contents的portion以及order，来加速page load过程。
- 详细要点如下：
    - 作者首先研究page load inefficiency的原因（详细规范地介绍了page load 过程 以后可以参考）。从Alexa上top100的网页进行抓取，下载到自己的server上并且使用Dummynet进行networking conditions的调控，通过browsing发现了如下问题：
    - CSS未能完全使用。对于median case，作者发现近四分之三的CSS rules没有使用，这说明CSS对于很多应用场景下是redundant的，因为网页会进行多余的CSS loads从而为future interaction做准备；
    - Blocking JS/CSS。作者使用WProf来测量additional round trips和parsing-blocking object downloads and evaluations，发现15%的page load time是等待critical path中CSS和JS的load时间，而5%的时间是用来evaluating CSS/JS的；
    - Additional round trips。作者发现page load常常会导致很多round trips，因为object load常常会导致sequence of latency-inflating operation（DNS查询，TCP/SSL handshake等）；
    - Shandian的design是这样的：现在proxy server上pre-process网页的信息，并把page state发送到client，由客户端进一步决定怎样进行streamline——其中的核心就是怎样确立并传输这些state。作者确定其中的state包括load-time state in CSS/JS（它们由server端的Shandian在proxy server中进行递归式地进行序列化，并由client端的Shandian进行解序列化），以及post-load state in CSS/JS。通过这些states可以由client端的Shandian重新进行restructure，解决CSS redundant和JS/CSS blocking的问题；
    - 作者分别在mobile device，desktop VM上进行了实验，涉及RTT、带宽、CPU、内存、以及data大小等参数，发现Shandian相比于普通的browsing缩短了PLT，并且对于caching、CDN、以及security features都有良好的兼容，其中对于mobile device，Shandian能缩短近一半的PLT。
- 感想：Shandian通过在服务端进行预处理，migrating至client端后，进行restructure来解决CSS redundant和JS/CSS blocking的问题。实验部分作者先进行实验发现问题，再提出Shandian进行解决，最后不但做出了PC端的实验，也做了mobile端的实验，参数非常全面。这给我们做实验的一个启发是，即便不是面向mobile的工具，也可以在mobile端进行实验发现更多的information。


#### 11.12.0.13. {Butkiewicz_Klotski_NSDI15} Michael Butkiewicz, Daimeng Wang, Zhe Wu, Harsha V Madhyastha, and Vyas Sekar. "Klotski: Reprioritizing Web Content to Improve User Experience on Mobile Devices." Proc. of NSDI. 2015.
- 这篇论文介绍了一个提升mobile device browsing 用户体验的方法——Klotski，这个方法的实现过程主要涉及3大环节：获取网页contents的dependencies、快速预测各类resource的load time、在不影响网页内容的情况下根据用户的preference把最有可能的content优先load。
- 详细要点如下：
    - 作者最开始介绍了Klotski的方法思路：dynamically reprioritize web content。即把网页中对用户最critical的resource最先load，用以提升用户的体验；
    - 首先作者首先通过user study说明用户的preference是因人而异的，所以要建立一个根据不同用户的preference进行dynamically handling；
    - 第一个问题是，如何查看网页中的inter dependencies。作者没有使用类似于WProf那种方法，而是依赖于不同的URLs进行merge各路loads，从而提取其中的dependency；
    - 第二个问题是，如何进行预测其中的load time，并且进行reprioritize。作者使用了一个高效的greedy的算法（这一部分暂时有点没看懂），进行快速的预测和筛选；
    - 通过alexa上的网页实验，Klotski可以把critical的resource在两秒内从25%提升至60%，load time的预测模型也达到了80%的accuracy（近乎理想）。
- 感想：这篇论文介绍的依然是如何在Mobile browsing中提升用户体验。与其他的论文不同，这篇不是直接提高整体的networking 速度或者rendering速度，而是查找哪些resource较为重要，然后进行reprioritize，影响用户的直接体验。对于AI-Protocol的一个启发是，提取webpage feature时可以考虑用户的preference。



#### 11.12.0.14. {Zhu_High-Performance_HPCA13} Yuhao Zhu and Vijay Janapa Reddi. "High-performance and energy-efficient mobile web browsing on big/little systems." Proc. of HPCA, 13–24. 2013.
- 这篇论文使用了regression modeling的方法来预测mobile webpage的load time和energy consumption，利用这些预测信息，底层的scheduler可以使用这些信息决定processors的使用策略，即使用哪一个处理器、处理器的频率是多大，由此来减少webpage的load time和energy use。
- 详细要点如下：
    - 与昨日阅读的论文类似，这篇论文解决的是mobile web browsing的速度和energy 消耗的问题，同样是通过影响scheduler的处理器调度策略来达到更好的performance；
    - 作者使用的仍然是big.LITTLE的异构处理器系统，其中包括Cortex-A9的big core和Cortex-A8的little core；网页数据来源于alexa上top5,000的网页数据；使用Firefox 12.0的rendering engine进行load time 测量；设计了power-sensing circuitry来测量energy consumption；
    - 作者的目标是，达到一个良好的Energy consumption与load time之间的trade-off。通过实验可以看出，用高性能处理器渲染网页速度快，但是能耗较高；
    - 作者使用了regression model来预测load time和 energy consumption，从而决定调度策略。Features涉及HTML DOM nodes、tags、CSS styles等相关properties。最后通过实验发现，这种webpage-aware 调度方法可以save 83%的energy，相比于OS DVFS scheduler，也产生了8.6%的energy saving和4.0%的load time improvement。
- 感想：这是一篇和昨日阅读论文（{Ren17}）高度近似的一篇文章，在Ren等人的文章中，这篇论文的方法被当做baseline。虽然二者都是使用了AI的方法解决问题，而且features也都十分相近（取材于webpage的features），但是方法不同，这篇论文用的是regression，Ren用的是SVM，而且Ren是直接一步到位，模型的output即是调度策略，且三种不同的目标（load time，energy，二者折中）有三个数值不同的模型。我觉得，AI-Protocol也可以参考做这种一步到位的模型。



#### 11.12.0.15. {Ren_Optimise_INFOCOM17} Jie Ren, Ling Gao, Hai Wang, and Zheng Wang. "Optimise web browsing on heterogeneous mobile platforms: A machine learning based approach." Proc. of INFOCOM. 2017.
- 这篇论文介绍了一种AI的方法，以手机网页的web contents为输入，得到处理器的调度方式作为输出，从而达到减少render load time、或energy consumption、或两者折中的目的。相比于其他降低渲染时间的相关工作，该方法的亮点在于使用了每个网站网页的properties作为输入的feature，然后借助于AI方法进行求解。
- 详细要点如下：
    - 首先作者介绍了问题背景。手机网页渲染作为一个重要的话题，存在渲染速度慢、电池能耗高的问题。如今ARM big.LITTLE 多核架构可以将渲染任务分散在高性能或低性能的处理器上进行，也可以改变处理器的频率。而Linux自带的调度器Linux Heterogeneous Multi-Processing (HMP)仅能在OS的层面上对渲染任务进行调度，不会考虑每个网站网页的elements和properties；
    - 于是，作者设计了一个AI的方法，把每个网站网页的properties作为输入，把最优的处理器调度方式（包括处理器频率）作为输出，解决速度慢、能耗高的问题；
    - 该方法使用的是SVM classifier，通过leave-one-out cross-validation进行训练。训练集来自于Alexa上top400 websites的properties，这些properties包括DOM tree的节点数、深度、tag等70多个features。训练的目标有三种，分别是load time、energy consumption、EDP（前两者的折中），因此其实是三个分类器来解决目标不同的三种任务。这个SVM classifier 进行off-line training，训练好的模型以chrome 插件的形式放入到浏览器中，在新的网页输入时，提取feature，输入模型得到调度策略；
    - 作者将该AI方法与2017年当时最好的WS方法、以及Linux自带的Linux Heterogeneous Multi-Processing (HMP)方法进行实验比较。发现AI方法在Load time、energy consumption以及EDP上都能达到最佳的效果。此外，作者也分析了实验结果的比例分布、各个网页feature对于结果的影响比重，再次详细论证了AI方法的有效性。
- 感想：整体而言，网页browsing包括两个procedure：1. networking 2. rendering。这篇论文的工作是在第二个rendering阶段使用AI的方法进行提速，而我们当下AI-protocol做的工作是用AI的方法在第一个阶段networking进行提速，可以参考这篇论文的工作增加模型输入的features。例如，除了RTT、带宽这些输入feature外，还可以模仿这篇论文，加入网页的properties（DOM nodes、tags等）作为feature，可能会带来更好的效果。


#### 11.12.0.16. {Netravali_Polaris_NSDI16} Ravi Netravali, Ameesh Goyal, James Mickens, and Hari Balakrishnan. "Polaris: Faster page loads using fine-grained dependency tracking." Proc. of NSDI, 123–136. 2016.
- 这篇论文主要有两个贡献：1. 使用一个叫做Scout的platform，对js heap和DOM的data flow进行细粒度测量；2. 构建了Polaris，一个client端、由js编写的调度器，使用fine-grained dependency graph来动态地决定网页加载过程中具体的object何时被加载。整体而言，这篇论文使page load变得更快。
- 详细要点如下：
    - 首先，作者详细讲解了page load的过程，包括各个不同的tag（js、img等）是怎么正常地被browser识别和加载的；接着作者指出HTML使用lexical dependencies，这会产生若干问题影响page load 速度；
    - 作者把dependency分为：Write/read dependencies  、Read/write dependencies 、Write/write dependencies 、Traditional dependencies based on HTML tag constraints ；而后使用Scout更细粒度地跟踪记录其中的data dependency，并把产生的dependency graph与其他工具作比较（WProf等），发现更细粒度的data flow能发掘出更多的优化空间；
    - 接着，作者讲述Polaris，一个动态的client-side的调度器，用于决定何时加载何种objects。它包括scheduler、Scout dependency graph、DNS prefetch hints、page's original HTML等四个模块；
    - 最后，作者通过实验证明Polaris缩短了page load 时间。例如在不同的RTT下，在不同的网站上显示了一定程度的time reduction，并且调研了Polaris和browser caching、SPDY的影响。
- 感想：这是一篇从客户端的角度进行探究的文章，之前看各种网络协议的测量文章，发现它们经常用page load time来衡量自己的工作。但是其中有一些论文也发现，如果仅仅针对PLT这个问题，真正占主要因素的其实不是网络协议、网络传输等，而是客户端浏览器的问题（对于手机设备尤其如此），这篇论文就提供了一个典范，从客户端浏览器的角度缩短page load time




## 11.13. others
#### {Zhou_Slim_NSDI19} Danyang Zhuo, Kaiyuan Zhang, Yibo Zhu, et al. "SlIM: OS kernel support for a low-overhead container overlay network." Proc. of NSDI: 331–344. 2019.
- 这篇文章是NSDI19的一篇文章，针对的是分布式容器基础架构下网络系统的加速，是贴近工业界需求的研究项目。
- 文章的思路很正常，首先回顾了当前容器中网络的几种模式，bridge, host，macvlan，overlay, 指出其中的优劣，例如bridge针对local machine，host会遇到端口映射的麻烦，macvlan会遇到容器迁移的问题，overlay是目前最为成熟的方案。然后列出了overlay的实现，接着指出了overlay相对host mode带来的performance overheads，通过研究overlay的实现得出是两次经过host 网络内核栈带来的性能开销，于是作者提出了SlimOS来进行优化。
- 首先文章对overlay网络的performance进行了分析，分几个部分，首先是无优化的，然后是通过fine tuning的方式做优化之后的，最后是利用网络工具更细粒度的确定了性能的瓶颈在多次经过内核栈。
- 于是作者提出来SlimOS系统，由三个部分组成，SlimSocket，SlimRouter, SlimKernelModule.第一个是为了使用户态（container中的应用）无感知设计的和POSIX socket完全一致的API，他会拦截socket调用，并通过IPC转发到SlimRounter，第二个部分Rounter是跑在host上的，将会在host上得到拦截到的guest调用，处理网络包，并且转发给其他的host，重要的是一旦连接建立，会使用dup2讲host和guest的套接字复制粘贴，TCP之后的传输就会在host中进行，这就是性能提升的原因。
- 至于SlimKernelModule这是一个可选项，他需要嵌入到linux内核中去，会调用linux系统cgroup和traffic control的模块在数据面进行QoS的控制，在控制面可以做到access control list的实现。
- 最后文章在不同类型的workload上测量，获得了throughput和CPU cycle的优化。
- 其中文章也指出了不足之处，不支持动态容器迁移，会花费更长的启动时间。

#### {Perino_Experience_MobiCom20} Diego Perino, Xiaoyuan Yang, Joan Serra, Andra Lutu, and Ilias Leontiadis. "Experience: Advanced network operations in (Un)-connected remote communities." Proc. of MobiCom, 204–213. 2020.
1. 这篇论文主要是介绍提供基础网络通信服务的公司 Internet Para Todos 的运营经验。该公司主要为拉丁美洲的偏远地区提供网络基础设施。为了在有限的成本范围内提供移动互联网服务，该公司主要使用蜂窝网络来提供网络服务，各地的站点硬件配置都根据当地条件进行合理设置。
2. 在各地都有与该公司合作的本地网络服务提供商，这些提供商使用公司提供的网络基础设施来为用户提供网络。并且提供商与公司之间共享用户利润。
3. 论文的重点部分在于公司的网络监控平台。该平台收集各地站点发来的网络设备警报，而这些数据又为机器学习和决策制定提供了输入数据。平台内部采用模块化设计，各模块之间使用 REST API 通信。
4. 各种设备警报经过正则表达式提取有用信息，并进行数据清洗后被保存到数据库中。这些警报根据异常情况分为不同等级，其中 故障 是最严重的。而故障又根据故障持续时间分为临时故障和永久性故障，对于无法自动恢复的永久性故障需要派遣人员到实地进行设备维修。
5. 由于地处偏远，维修需要的人力物力较大。通过训练模型可以结合过去警告数据以及当地的天气状况等条件，预测某次故障是否为永久性故障，永久性故障的原因以及所需维修配件。并且对于大量的维修需求，可以合理分配不同维修小队的维修路线解决沿途上的各种故障。通过以上这些策略可以大幅减少网络维修所需的成本。


#### 11.13.0.1. {Hu_CableMon_NSDI20} Jiyao Hu, Zhenyu Zhou, Xiaowei Yang, Jacob Malone, Jonathan W Williams, Chapel Hill, Implementation Nsdi, and Jacob Malone. “CableMon : Improving the Reliability of Cable Broadband Networks via Proactive Network Maintenance.” In Proc. of NSDI.2020.
- Details：
​	这篇文章，帮助网络服务商ISP处理有限拨号网络(broadband)的不稳定检测问题，提高检测成功率并确保能实时检测的运行效率要求。

​	对于用户提供的ticket数据，根据类别去除噪声点。而对于PNM数据，对每一个feature都用相同的算法，以Ticket Prediction Rate作为评价指标，找到对于statistic算法处理的数据后的最好的threshold。类似扫描线方式的探测方式，枚举快速处理所有的threshold，认为threshold之下的点为网络错误的点。选取五个Ticket Prediction Rate最大的feature，合并这五个feature来预测，认为只要有一个feature预测结果为网络错误，就认为该数据点网络错误。

​	没有标签的数据，通过和用户提交的ticket的时间上的对比，找到对训练集最优的feature和对应的thresholds.

​	对预测结果，提出实时有效的Sliding Window方法，帮助ISP使用预测结果，有很强的运用性。同时，对比实验显示，几乎在所有的方面，该方法都比ISP使用的现有方法更优，也比几种传统机器学习的分类结果优。 有很重要的应用前景。

- Takeaway
1. 对于实际在使用中的处理方式，提出一种保障效率前提下，准确率更高的预测方法，有很强的现实意义。
2. 对于给定预测结果，提出实际有效的应用方案，方便实际应用对象可以真正有效实验结果提高服务质量，落地前景好。
3. 对于没有标签的数据，找到可以类比的结果，映射到相同的时间序列上，通过对每个时间节点的对比来判别，预测和训练。



#### 11.13.0.2. {Kalia_eRPC_NSDI19} Anuj Kalia, Michael Kaminsky, Intel Labs, David Andersen, Implementation Nsdi, and David G Andersen. “Datacenter RPCs can be General and Fast” In Proc. of NSDI.2019
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


#### 11.13.0.3. {Kim_FreeFlow_NSDI19} Daehyeok Kim, Tianlong Yu, Hongqiang Harry Liu, Yibo Zhu, Jitu Padhye, Shachar Raindel, Chuanxiong Guo, Vyas Sekar, and Srinivasan Seshan. “Freeflow: Software-based virtual RDMA networking for containerized clouds.” In Proc. of NSDI, 113–125.2019
- NSDI 19 FreeFlow 这篇文章主要讲了如何在container的场景下enable RDMA。主要提到了四点：
    - 隔离：每个容器都应该有其专用的网络命名空间（包括端口空间、路由表、接口等），以消除与同一主机上其他容器的冲突。
    - 可移植性：容器应该使用虚拟网络与其他容器通信，并且与它的虚拟IP保持关联，而不管它被调度到哪个主机上或迁移到哪个主机上。
    - 可控性：编排器可以容易地执行控制平面策略(例如，准入控制、路由)和数据平面策略(例如，QoS、计费)。此属性在(多租户)云环境中尤其需要
    - 性能：如何能够达到Native RDMA的延迟和吞吐？
- 问题的解决主要分成两部分，隔离是容器本身利用linux决定的，可移植性是容器网络达到（当然包括对RDMA库的一些hacking， FFI），可控性是通过FFR和FFO达成， 性能主要是在FFL和FFR的数据转移（进程通信和内存复制）
- 主要freeflow有三个模块，
    - FFR：用来起到硬件switch的作用，做转发和QOS
    - FFO：用zookeeper实现，起到记录不同host的container信息的作用
    - FFL：用来intercept RDMA原语，使其转化到container的virtual NIC上，
- 性能问题：
    - 1.共享内存零拷贝
    - 2.在更低层做内存拷贝（防止复杂数据结构的复制）
    3.利用汇编讲存储写回main memory中，防止cache的问题
    4.利用某个CPU polling来减少latency


#### 11.13.0.4. {Woo_Elastic_NSDI18} Shinae Woo, Justine Sherry, Sangjin Han, Sue Moon, Sylvia Ratnasamy, and Scott Shenker. “Elastic Scaling of Stateful Network Functions.” In Proc. of NSDI.2018


#### 11.13.0.5. {Wang_PLOVER_NSDI18} Cheng Wang, Xusheng Chen, Weiwei Jia, Boxuan Li, Haoran Qiu, Shixiong Zhao, and Heming Cui. “PLOVER: Fast, Multi-core Scalable Virtual Machine Fault-tolerance.” In Proc. of NSDI.2018
- Details：
​	这篇文章，主要解决以虚拟机为主体的数据中心，在满足备份的时候，尽量提高效率、减少消耗和错误率。

​	模型的主要方法是参考了两个已有的方法，分别是Remus [NSDI’08]和SMR systems: Chubby, Zookeeper, Raft [ATC’14]，并通过优化和结合这两种方法，使得新模型在效率、CPU消耗和错误率上得到提升。

​	首先使用状态机，将每次需要向备份服务器同步的状态记录。状态机是SMR方法的核心，能解决Remus方法的脑裂问题。通过状态机的实验发现，Remus相邻的状态很相似，有些高达97%相同，所以不需要向之前把所有memory pages全部同步，而需要用hash等方法，将需要修改的部分信息压缩到尽量少的memory pages里。

​	其次是关于阶段性同步，对于多久同步一次，并没有固定的时间。根据计算memory pages页的差异性，当两次状态之间的差异很大时再同步。减小同步开支。

​	最后是关于计算和测量。该方法相比于Remus，用状态机完全解决了脑裂问题。同时，对于通量（每秒服务器能处理的requests数量），该方法也比现有方法提高了约50%以上。另外，关于latency延迟，该方法的传输延迟数约为2.8ms，比较经典算法50~60ms提升巨大，传输时间的减少也能有效降低错误的发生率。

- Takeaway

1. 对于已有的经典算法，可以尝试将优点取出并尝试合并，摒弃缺点。
2. 性能上的巨大提升而仅仅多使用了极少量的资源，是一个很好的两点。


#### 11.13.0.6. {Chen_BikeGPS_MobiSys18} Kongyang Chen and Guang Tan. “BikeGPS: Accurate localization of shared bikes in street canyons via low-level GPS cooperation.” In Proc. of MobiSys, 150–162.2018
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

