// pages/About.tsx
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Typewriter from "../../components/layout/Typewriter";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import TechCard from "../../components/layout/TechCard";
import reactIcon from "../../assets/icon/science.png";
import mysqlIcon from "../../assets/icon/programing.png";
import javaIcon from "../../assets/icon/java.png";
import jsIcon from "../../assets/icon/java-script.png";
import pythonIcon from "../../assets/icon/python.png";
import { motion } from "framer-motion";
import Carousel3D from "../../components/animations/Carousel3D";
import { useLocation } from "react-router-dom";
import SplitTextScatter from "../../components/animations/SplitTextScatter";
import ScrambleTextHover from "../../components/animations/ScrambleTextHover";
import guitar from "../../../public/images/guitar.png";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("1Location changed:", location);
  }, [location]);

  const textList = [
    "西留蝙蝠",
    "Xiliubat",
    "离不开 AI 的程序员",
    "正在学习的半成品全栈开发新手",
    "还在和手指较劲的电吉他玩家",
  ];
  const [useYoutube, setUseYoutube] = useState(true);
  const theme = useTheme();
  const testYoutube = () => {
    return new Promise<boolean>((resolve) => {
      const img = new Image();
      img.src = "https://www.youtube.com/favicon.ico?" + Date.now();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  };

  useEffect(() => {
    const check = async () => {
      const ok = await testYoutube();
      setUseYoutube(ok);
    };
    check();
  }, []);

  const [index, setIndex] = useState(0);
  const navItems = [
    { label: "程序员", targetId: "section-programmer" },
    { label: "游戏玩家", targetId: "section-developer" },
    { label: "共产主义者", targetId: "section-communist" },
    { label: "电吉他初学者", targetId: "section-guitarist" },
  ];
  const games = [
    {
      label: "黑神话-悟空",
      images: [
        "images/wukong.jpg",
        "images/wukong1.jpg",
        "images/wukong2.jpg",
        "images/wukong3.jpg",
      ],
    },
    {
      label: "英雄联盟",
      images: ["images/lol2.jpg", "images/lol1.jpg", "images/lol3.jpg"],
    },
    {
      label: "GTA5",
      images: ["images/gta5.png", "images/gta5_1.png", "images/gta5_2.png"],
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${guitar})`,
        backgroundPosition: "right -670px top 3680px",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }} // 这里改成 once: false
      >
        <Card
          raised
          sx={{
            width: { xs: "92vw", sm: "600px", md: "830px" },
            zIndex: 100,
            margin: { xs: "16px auto 80px auto", md: "30px auto 300px auto" },
            padding: { xs: 1, md: 2 },
            overflow: "visible",
          }}
        >
          <CardContent>
            <Typography
              variant="h3"
              style={{ userSelect: "none", marginBottom: 16 }}
            >
              我是：
            </Typography>

            <Typewriter
              sx={{ ml: { xs: "16px", md: "90px" } }}
              text={textList[index]}
              speed={150}
              variance={0.4}
              backspaceDelay={60}
              pauseDelay={1000}
              cursorBlinkSpeed={0.8}
              Size={"h2"}
              showCursor
              onCycleComplete={() =>
                setIndex((prev) => (prev + 1) % textList.length)
              }
            />
            <Typography variant="h3" sx={{}}>
              一个:
            </Typography>
            <Stack alignItems="flex-end" spacing={2} sx={{ mt: 2 }}>
              {navItems.map((item, index) => (
                <Box
                  key={index}
                  onClick={() => {
                    const section = document.getElementById(item.targetId);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  sx={{
                    transition: "transform 0.2s ease, color 0.2s",
                    "&:hover": {
                      transform: "scale(1.5)",
                      color: "primary.main",
                      cursor: "pointer",
                    },
                    "&:active": {
                      transform: "scale(1.3)",
                    },
                  }}
                >
                  <Typography variant="h3">{item.label}</Typography>
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }} // 这里改成 once: false
      >
        <Box
          justifyContent="center"
          id="section-programmer"
          m={0}
          sx={{ scrollMarginTop: "150px" }}
        >
          <Box sx={{ m: { xs: 2, md: 10 } }}>
            <Typography variant="h4" gutterBottom>
              一直想自己做一个网站,拖了很久很久,不过还好,总算在7月开始动手了。
            </Typography>
            <Typography variant="h4">
              从搭建页面到调试功能，边做边学，过程虽然折腾，但学到了很多东西，也找回了久违的成就感。
            </Typography>
          </Box>
          <Grid container spacing={2} justifyContent="center">
            <Typography variant="h4">技术栈：</Typography>
            <TechCard
              icon={reactIcon}
              name="React"
              level={45}
              desc="用于构建现代 Web UI"
              hoverDesc="在前两个项目中用的都是React,已掌握组件、状态、Hook 等基础,Redux只做过修改,还需精进。"
            />
            <TechCard
              icon={jsIcon}
              name="JS/TS"
              level={45}
              desc="网页开发的基础语言"
              hoverDesc="现在主要在React中使用 JS/TS 编写业务逻辑，原生用得较少"
            />
            <TechCard
              icon={javaIcon}
              name="Java"
              level={25}
              desc="后端语言基础"
              hoverDesc="作为最早接触的语言,但是我实际用的不多,在工作中也只做过小部分的修改,不过理解到了面向对象编程。目前正在学习 Spring Boot、接口开发"
            />
            <TechCard
              icon={mysqlIcon}
              name="Mysql"
              level={30}
              desc="关系型数据库"
              hoverDesc="掌握基本的增删改查、索引、临时表使用，正在深入学习中间表设计和多表联查"
            />
            <TechCard
              icon={pythonIcon}
              name="Python"
              level={20}
              desc="语法简洁的编程语言"
              hoverDesc="用过 Python 开发自动化测试系统，目前掌握还不多，适合做小工具，正在继续学习"
            />
            <Box
              sx={{ width: "100%", overflowX: "auto", px: { xs: 1, md: 0 } }}
            >
              <GitHubCalendar
                username="xiliu2529"
                blockSize={22}
                blockMargin={6}
                fontSize={14}
              />
            </Box>
            ;
          </Grid>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.85 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Box
          justifyContent="center"
          id="section-developer"
          sx={{
            mx: { xs: 2, md: 10 },
            my: { xs: 4, md: 10 },
            scrollMarginTop: "200px",
          }}
        >
          <Box sx={{ m: { xs: 2, md: 10 } }}>
            <Typography variant="h4" gutterBottom>
              作为一个游戏玩家，我喜欢探索各种类型的游戏，从角色扮演到策略游戏，每个游戏都有其独特的魅力。
            </Typography>
            <Typography variant="h4">
              游戏不仅是我的娱乐方式，也是我学习编程和设计思维的重要来源。
            </Typography>
            <Carousel3D imagesdata={games} />
          </Box>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.85 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Box
          id="section-communist"
          sx={{
            mx: { xs: 2, md: 10 },
            mt: { xs: 6, md: 30 },
            scrollMarginTop: "150px",
          }}
          justifyContent="center"
        >
          <Typography variant="h4" sx={{ lineHeight: 1.8, mb: 2 }}>
            劳动者是世界的真正创造者，
            但在资本主义制度下，他们往往被剥削：用自己的劳动换来的只是一份勉强维持生活的工资，
            而剩余价值却被资本家占有。
          </Typography>

          <Typography
            variant="h4"
            sx={{
              lineHeight: 1.7,
              maxWidth: "1200px",
            }}
          >
            共产主义意味着要反对这种不公正，追求一个没有剥削和压迫的社会。
            在那个社会里，劳动者能够平等地分享自己创造的财富，
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                color: "#CC0000",
              }}
            >
              每个人的自由发展都成为一切人的自由发展的条件。
            </Box>
          </Typography>

          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="h5" sx={{ display: "block", mt: 1 }}>
              推荐观看: 【中文字幕】资本 or 共产？做出你的选择
            </Typography>
            {useYoutube ? (
              <iframe
                src="https://www.youtube.com/embed/LtsbQiPY2dA?si=dj0PnM4sxxgzG6T0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  borderRadius: 8,
                  aspectRatio: "16/9",
                  height: "auto",
                  width: "100%",
                  maxWidth: "900px",
                }}
              ></iframe>
            ) : (
              <iframe
                src="//player.bilibili.com/player.html?isOutside=true&bvid=BV1Vy4y1B7V2&autoplay=0"
                allowFullScreen
                style={{
                  aspectRatio: "16/9",
                  height: "auto",
                  width: "100%",
                  maxWidth: "900px",
                  borderRadius: 8,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              ></iframe>
            )}
          </Box>
        </Box>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.85 }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Box
          id="section-guitarist"
          sx={{
            mx: { xs: 2, md: 10 },
            mt: { xs: 6, md: 30 },
            mb: { xs: 4, md: 10 },
            scrollMarginTop: "150px",
            minHeight: { xs: "auto", md: "700px" },
            WebkitTextStroke: "0.5px ",
            WebkitTextStrokeColor: theme.palette.background.paper,
          }}
          justifyContent="center"
        >
          <Typography
            variant="h4"
            sx={{
              lineHeight: 1.8,
              mb: 2,
            }}
          >
            <SplitTextScatter text="偶然在" />
            <SplitTextScatter style={{ WebkitTextStroke: "0px " }} text="B" />
            <SplitTextScatter text="站刷到一个电吉他视频・" />

            <Typography
              component="span"
              sx={{
                fontSize: "40px",
                color: "primary.main",
              }}
              onClick={() =>
                window.open(
                  "https://www.bilibili.com/video/BV1CdeRzAEKm/?spm_id_from=333.337.search-card.all.click",
                  "_blank",
                )
              }
            >
              <SplitTextScatter text="《钢铁洪流进行曲》" />
            </Typography>

            <SplitTextScatter text="电吉他版，当时就觉得非常带感。起初没太在意，后来发现自己被吸引了，又去历史记录找来看，甚至想学会电吉他弹这个曲子。" />
          </Typography>
          <Typography variant="h4" sx={{ lineHeight: 1.8, mb: 2 }}>
            <SplitTextScatter text="经过一周的考虑买了一把电吉他，开始了我的电吉他之路。" />
          </Typography>
          <Typography variant="h4" sx={{ lineHeight: 1.8, mb: 2 }}>
            <SplitTextScatter text="本来打算自学，但学了一个月发现自己没什么动力，进步也很慢。" />
            <SplitTextScatter
              style={{ WebkitTextStroke: "0px " }}
              text="2025"
            />
            <SplitTextScatter text="年末报了网课，跟着老师学了一段时间，得到了鼓励，感觉进步了很多。" />
          </Typography>
          <Typography variant="h4" sx={{ lineHeight: 1.8, mb: 2 }}>
            <SplitTextScatter text="无数次幻想自己也可以那么耀眼，虽然现在还差的远。" />
          </Typography>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ lineHeight: 1.8, mb: 2 }}
          >
            <ScrambleTextHover text="但至少，我已经能看见那个未来的自己了。" />
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default About;
