---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BLRHGNC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALdexehqtakXXRbh9reUvFzkRPPnGyU8M6%2BjWPeOczIAiAszmWY6BqYFWtFQgx7%2Fi3OBZ4FzuSc9ipSbf4HL6WFICqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7JPsdbCS3JwHc9wdKtwDN8Qsr%2FioGlGIvZC3jVruiegGRacjTDNfOpEizPCkf9rsOzSUU%2Bo2dc3JU4Ed5wAjjrhYuRSuX4FjFKJai86625%2F8pnjxxd9RZDFsJyk%2Bu7Ioiuh2DpCR2qMhlztFelkh7lWgV8pil87DZa6H%2BiqOFYqB7906ipBX2nSBtakwX3SIO3RYljIrAtVtrlakVK%2BAieK%2BVasg22dKTplMVnGiZBTkKaRX6tH0Q5k1MjeEDMJWu5uWqby5YaJzh0ZvTHMq4d8dCDnq189LKNtjKpq1%2Fro5b9WcUIKAfoCmq%2B9uwZ%2Bjwt7pnIx4xl9dp9p3lY8ostIaT4PVyV15wUL5PGm6MVOApPc%2FDFkcOUf56ipraqrTueL4%2B2YBCo2r7Mw1pqHBist17Ro0B9NfS03x2Y6kuakVCcsep5hsxpO%2Bh182vk1%2B%2Fs%2B4sfIU91cHt2uKLWtHhRRor5LNCaab2wTOaWhsw%2FARqaYWShMUimOIXJheS2%2BMKhKbWc4FShowTLCIFIBGwRoG8igNccIB9WbdtgFk5BzNhMZXp0pQSVjcBpH3fGs9Ff3jrEaXk0Jw7mJnYHcLQM0rkPbsnHDWvcTgXkecMMHOGhTRyqwqZRv%2BparuXI7Gf%2BtTgN6WQR7Tvhswt7TcyQY6pgH8L%2FHN7h71Tdom2XI9DNbfU%2FqMS5MmqKVUO67pjQY209hLDAr8QrMp66esqvXuz3Q1QzQOM6vRIr0%2FwZFgNFI%2Fh%2FtLeVBTvFo8eqKEViZHdoy6ZOrcusQDe2n3D%2BDzoy7mcFsg%2B3t7UsdYVLcYr2210rNZeEQLXLRbiE%2B%2F6fi%2FlqH6O7RlMpDrrBV4YhudGPj%2B4TS6CJ3phld3HJdnBYizDdmrrjFP&X-Amz-Signature=28321262b42e639f293170eae8e3f197a4a17da93e66b0fcf6266ee7fc461a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BLRHGNC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALdexehqtakXXRbh9reUvFzkRPPnGyU8M6%2BjWPeOczIAiAszmWY6BqYFWtFQgx7%2Fi3OBZ4FzuSc9ipSbf4HL6WFICqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7JPsdbCS3JwHc9wdKtwDN8Qsr%2FioGlGIvZC3jVruiegGRacjTDNfOpEizPCkf9rsOzSUU%2Bo2dc3JU4Ed5wAjjrhYuRSuX4FjFKJai86625%2F8pnjxxd9RZDFsJyk%2Bu7Ioiuh2DpCR2qMhlztFelkh7lWgV8pil87DZa6H%2BiqOFYqB7906ipBX2nSBtakwX3SIO3RYljIrAtVtrlakVK%2BAieK%2BVasg22dKTplMVnGiZBTkKaRX6tH0Q5k1MjeEDMJWu5uWqby5YaJzh0ZvTHMq4d8dCDnq189LKNtjKpq1%2Fro5b9WcUIKAfoCmq%2B9uwZ%2Bjwt7pnIx4xl9dp9p3lY8ostIaT4PVyV15wUL5PGm6MVOApPc%2FDFkcOUf56ipraqrTueL4%2B2YBCo2r7Mw1pqHBist17Ro0B9NfS03x2Y6kuakVCcsep5hsxpO%2Bh182vk1%2B%2Fs%2B4sfIU91cHt2uKLWtHhRRor5LNCaab2wTOaWhsw%2FARqaYWShMUimOIXJheS2%2BMKhKbWc4FShowTLCIFIBGwRoG8igNccIB9WbdtgFk5BzNhMZXp0pQSVjcBpH3fGs9Ff3jrEaXk0Jw7mJnYHcLQM0rkPbsnHDWvcTgXkecMMHOGhTRyqwqZRv%2BparuXI7Gf%2BtTgN6WQR7Tvhswt7TcyQY6pgH8L%2FHN7h71Tdom2XI9DNbfU%2FqMS5MmqKVUO67pjQY209hLDAr8QrMp66esqvXuz3Q1QzQOM6vRIr0%2FwZFgNFI%2Fh%2FtLeVBTvFo8eqKEViZHdoy6ZOrcusQDe2n3D%2BDzoy7mcFsg%2B3t7UsdYVLcYr2210rNZeEQLXLRbiE%2B%2F6fi%2FlqH6O7RlMpDrrBV4YhudGPj%2B4TS6CJ3phld3HJdnBYizDdmrrjFP&X-Amz-Signature=ed6e97c7c802d0aa14e7f0121fcd22f00ade7563800c67209b4660a1f9cef900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

