# 全局异常处理
## @ControllerAdvice
使用
`@ControllerAdvice`注解类可以捕获全局的异常，类中方法需要用`@ExceptionHandler`注解修饰，
`@ExceptionHandler(Exception.class)`可以捕获所有异常。

# 错误处理
有时有一些异常并没有处理抛出，所以`@ControllerAdvice`修饰的类无法处理。这时需要一个Controller来拦截error页面，来处理所有漏掉的异常。这个Controller需要继承ErrorController接口



