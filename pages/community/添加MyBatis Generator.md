# MyBatis Generator

使用注解的方式，简约同时也会带来很多的不方便。每次都需要自己添加新的查改增删。

[官方文档地址](http://mybatis.org/generator/)

### pom文件添加插件

            <plugin>
                <groupId>org.mybatis.generator</groupId>
                <artifactId>mybatis-generator-maven-plugin</artifactId>
                <version>1.3.7</version>
                <dependencies>
                    <dependency>
                        <groupId>com.h2database</groupId>
                        <artifactId>h2</artifactId>
                        <version>1.4.193</version>
                    </dependency>
                </dependencies>
            </plugin>
### properities

	//mapper的文件地址
	mybatis.type-aliases-package=life.ddt.community.mapper
	mybatis.mapper-locations=classpath:mapper/*.xml

### generatorConfig

	<?xml version="1.0" encoding="UTF-8"?>
	<!DOCTYPE generatorConfiguration
	        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
	        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
	
	<generatorConfiguration>
		<!-- id:此上下文的唯一标识符。该值将在某些错误消息中使用。-->
		<!--targetRuntime:此属性用于为生成的代码指定运行时目标。-->
	    <context id="H2Tables" targetRuntime="MyBatis3">
	        <plugin type = "org.mybatis.generator.plugins.RowBoundsPlugin"></plugin>
	        <jdbcConnection driverClass="org.h2.Driver"
	                        connectionURL="jdbc:h2:~/community"
	                        userId="sa"
	                        password="123">
	        </jdbcConnection>
	
	        <javaTypeResolver >
	            <property name="forceBigDecimals" value="false" />
	        </javaTypeResolver>
	
	        <javaModelGenerator targetPackage="life.ddt.community.model" targetProject="src/main/java">
	            <property name="enableSubPackages" value="true" />
	            <property name="trimStrings" value="true" />
	        </javaModelGenerator>
	
	        <sqlMapGenerator targetPackage="mapper"  targetProject="src/main/resources">
	            <property name="enableSubPackages" value="true" />
	        </sqlMapGenerator>
	
	        <javaClientGenerator type="XMLMAPPER" targetPackage="life.ddt.community.mapper"  targetProject="src/main/java">
	            <property name="enableSubPackages" value="true" />
	        </javaClientGenerator>
	
	        <table tableName="user" domainObjectName="User" >
	        </table>
	        <table tableName="question" domainObjectName="Question" >
	        </table>
	
	    </context>
	</generatorConfiguration>
