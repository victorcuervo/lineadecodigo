---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H6IDIA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH97ER2TPG5gw1k%2BIQzVDXQ20Gejx4MvjIin5nTUaq4hAiEAgT7yg1u9PUPTYReTMFndLuIruIS8MuoI3gKJPW47i%2FwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4Sgvbh589i9LLxrircA4hZzv5A6zW%2B76p0o0Q7TSmJeFmes9f8fDzcCJ7Am4rB69J%2FbMHJMZBPRC4EbOZi9%2BpdD12uR37gQZ9pS%2BiG5lxDoK7IL0lEQYk%2FCa%2BYG3j0KTFi8S6xwU5E53s5pc0sZvskJNIFlAXyJuQWW7PCQ9RPke4QAEoXB4jIH2ciq0NIbewkRApL8NXQ5e0yqdxoBGD1UbCIsglJtxqz4Z6a0OwbAw9KHtx0BMFerMHqbYtRxe5YdDN7H4s5qFMghB8J7fOZpSqFLOn5ULDbXoPNQN64Srucfut39sOvW70C1MCX4xSo1dKB0x5b0oaj%2BCvZftezoo%2FiS7z4frz5HHxjBVDkflEqx%2BoD52KXtriS3gTW6IaKHI%2BGV21zmDrrURgtewBpw%2BF5rREzCh79ODKfYWtz1AO33lSN%2FtDgwHQl2Ws9Mv9SHcxgOFVTXuCD9Hmve1NLc1lVwEzeXZ2%2FEs2%2Fi%2BvkEq9a4dcFPnkZvp5kUEz%2B%2B1SqDFwAbFb%2BywGu31kzZJvvkfvd5q%2B9Aw2AwZVwttk5i5y225IMpwpAi2pO%2B6fjeI%2BrJHUlULQozuwewCR1utP9jbKk0%2FrkTyWW0ZD43hmO9obe%2B890fd88Cs4mKqjXqJQr1s9Zus9WFmDgMICi2MkGOqUBIrSVINTpAMFk%2FHdEln6RRebJTSJoI%2BEQXWu4dmzDyRtlXpUOjk%2B3u1wd2Fmi0tYwN1Zn%2FRtrrDG6%2Bbxb%2BkY32e5vJEs9pk%2BATafQuM15Yb3BZGts11tIGxFwTX5MUNFSUmAxDZDhFFipVZIDcgWuIWBaAjM4ccQigGjtltJeLgyY6JGW0PgRjrhgU0dNFuy74R4Z7Xl8VimCTR7rUZMe2DayqEP4&X-Amz-Signature=e1b6d396ac84891f7e3b13d13fad96fceb568beff297a6a995f9bd44b05b419d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7H6IDIA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH97ER2TPG5gw1k%2BIQzVDXQ20Gejx4MvjIin5nTUaq4hAiEAgT7yg1u9PUPTYReTMFndLuIruIS8MuoI3gKJPW47i%2FwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4Sgvbh589i9LLxrircA4hZzv5A6zW%2B76p0o0Q7TSmJeFmes9f8fDzcCJ7Am4rB69J%2FbMHJMZBPRC4EbOZi9%2BpdD12uR37gQZ9pS%2BiG5lxDoK7IL0lEQYk%2FCa%2BYG3j0KTFi8S6xwU5E53s5pc0sZvskJNIFlAXyJuQWW7PCQ9RPke4QAEoXB4jIH2ciq0NIbewkRApL8NXQ5e0yqdxoBGD1UbCIsglJtxqz4Z6a0OwbAw9KHtx0BMFerMHqbYtRxe5YdDN7H4s5qFMghB8J7fOZpSqFLOn5ULDbXoPNQN64Srucfut39sOvW70C1MCX4xSo1dKB0x5b0oaj%2BCvZftezoo%2FiS7z4frz5HHxjBVDkflEqx%2BoD52KXtriS3gTW6IaKHI%2BGV21zmDrrURgtewBpw%2BF5rREzCh79ODKfYWtz1AO33lSN%2FtDgwHQl2Ws9Mv9SHcxgOFVTXuCD9Hmve1NLc1lVwEzeXZ2%2FEs2%2Fi%2BvkEq9a4dcFPnkZvp5kUEz%2B%2B1SqDFwAbFb%2BywGu31kzZJvvkfvd5q%2B9Aw2AwZVwttk5i5y225IMpwpAi2pO%2B6fjeI%2BrJHUlULQozuwewCR1utP9jbKk0%2FrkTyWW0ZD43hmO9obe%2B890fd88Cs4mKqjXqJQr1s9Zus9WFmDgMICi2MkGOqUBIrSVINTpAMFk%2FHdEln6RRebJTSJoI%2BEQXWu4dmzDyRtlXpUOjk%2B3u1wd2Fmi0tYwN1Zn%2FRtrrDG6%2Bbxb%2BkY32e5vJEs9pk%2BATafQuM15Yb3BZGts11tIGxFwTX5MUNFSUmAxDZDhFFipVZIDcgWuIWBaAjM4ccQigGjtltJeLgyY6JGW0PgRjrhgU0dNFuy74R4Z7Xl8VimCTR7rUZMe2DayqEP4&X-Amz-Signature=09204863d12f7d7d668d134dae9a03485da3cbed22ba9046f271badfa9d14157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

