---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOP4K2F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCebAIYSELDAj3e70ZJY3E65HvlFId2qope45YK2wxRaQIhANpiD7Nbo%2FCgl%2F0eWTJ19nt2Cq3zg9BRbTa6qQRNrd%2FPKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRFO8bykn%2Bo7oMU4Qq3ANYEw4cV5FvO4SAUrG1AMDwi08UqoSGnoj%2BqAtg7aa8xzAz%2FoVopFMAMEILcDY35CqXMwVWapPrmf%2FGvV1HDIN1rwJ56Yb27JegnYL%2BM2GS4JNbC%2Fv29yoabcBLuf56pxQKDBXAdDXRLaSMl%2FCWPqJm%2FzlHL55aqAXDXaUkFCoT7idRmzU0MB26%2BPZqDME%2FqIh6FK4WWAobcFdFmX7WJFaU8SIuCmmkwv%2F4dZHuqxAisIJWOP0%2FjEefsekPf5J9aZNSV5CiBBeWe7%2BU74tlhdsOz9%2BjGRCbJ5N8C9PSXK7P6STG5QV9sbOW4XDEbWtgypjg3AgfoldNhIlhdcT8WBMsZDoMtJs50glr22T84zLhFB%2FlPk3x4dzRjS%2BygNfVJ1R0wnqSFWr7zqZImHERAzHEa3JMWvy0zzgg%2BInC5G1xSJjhA%2BvJ6Cfezo75JlZ4%2FgcdiZhXSMl%2B7hwOb6krVO%2Fy20jir6tRsjgDGIzwiydrBTnUuaDAeEzctmsudDA25WpZI3d5VFOwAyrfBrHSL0dAMUFBSpxdcLUhjTZc%2BfNi6Hgt%2Ft0Q%2F%2FOrEWTVKfYQ8ulbN6BzaJizsRxmqpZP9wx9kO%2Bz8WLg%2FmfZv%2Ba0rvG%2BhD1axIYG7ZfBweICnjCPw93JBjqkAR%2F8KEx7peYao9KWnKlUjVV5nP7SgUG3I1X06KIMTZxBnZMII4rv6QBpPZ8AIMH2SynJchM%2F54xMx0EUJ0rtO1umtPLQgUjB6oCmYeYX8fx14cGkO%2FZwOuxCS407db0fnC%2BUKoS55zzau2jWHsWeoCXTZCSsGOoOOznhwV8jc9g24p%2BPI36rEIikZWM1Lvh3jm5v2gKgAaIOl%2FAG5PNF5hl5PwZq&X-Amz-Signature=1010bcf71299a19a2c7449569a1f9b00dacc961309a42c7333b61bea06f0ac74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOOP4K2F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCebAIYSELDAj3e70ZJY3E65HvlFId2qope45YK2wxRaQIhANpiD7Nbo%2FCgl%2F0eWTJ19nt2Cq3zg9BRbTa6qQRNrd%2FPKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRFO8bykn%2Bo7oMU4Qq3ANYEw4cV5FvO4SAUrG1AMDwi08UqoSGnoj%2BqAtg7aa8xzAz%2FoVopFMAMEILcDY35CqXMwVWapPrmf%2FGvV1HDIN1rwJ56Yb27JegnYL%2BM2GS4JNbC%2Fv29yoabcBLuf56pxQKDBXAdDXRLaSMl%2FCWPqJm%2FzlHL55aqAXDXaUkFCoT7idRmzU0MB26%2BPZqDME%2FqIh6FK4WWAobcFdFmX7WJFaU8SIuCmmkwv%2F4dZHuqxAisIJWOP0%2FjEefsekPf5J9aZNSV5CiBBeWe7%2BU74tlhdsOz9%2BjGRCbJ5N8C9PSXK7P6STG5QV9sbOW4XDEbWtgypjg3AgfoldNhIlhdcT8WBMsZDoMtJs50glr22T84zLhFB%2FlPk3x4dzRjS%2BygNfVJ1R0wnqSFWr7zqZImHERAzHEa3JMWvy0zzgg%2BInC5G1xSJjhA%2BvJ6Cfezo75JlZ4%2FgcdiZhXSMl%2B7hwOb6krVO%2Fy20jir6tRsjgDGIzwiydrBTnUuaDAeEzctmsudDA25WpZI3d5VFOwAyrfBrHSL0dAMUFBSpxdcLUhjTZc%2BfNi6Hgt%2Ft0Q%2F%2FOrEWTVKfYQ8ulbN6BzaJizsRxmqpZP9wx9kO%2Bz8WLg%2FmfZv%2Ba0rvG%2BhD1axIYG7ZfBweICnjCPw93JBjqkAR%2F8KEx7peYao9KWnKlUjVV5nP7SgUG3I1X06KIMTZxBnZMII4rv6QBpPZ8AIMH2SynJchM%2F54xMx0EUJ0rtO1umtPLQgUjB6oCmYeYX8fx14cGkO%2FZwOuxCS407db0fnC%2BUKoS55zzau2jWHsWeoCXTZCSsGOoOOznhwV8jc9g24p%2BPI36rEIikZWM1Lvh3jm5v2gKgAaIOl%2FAG5PNF5hl5PwZq&X-Amz-Signature=583a2c4b20085e16965ac78a2665b9dfbde8c119ad8bf6d6e195465411f51c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

