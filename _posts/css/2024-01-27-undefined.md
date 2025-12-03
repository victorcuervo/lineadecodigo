---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAM7IYNF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID3b9vLJqK7zeVsQuJ8S4emtbsOmHysFfJeGd6XQf%2FoDAiEAqpiDHObqjvhIVqS1IoJthyUfvVBi9rXLoY0S5V7Iatoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMXSkiIGyFqtrBeWXSrcA7SIRMTw5eokHEEz7fUT3IJFmFfFwJ96F2xwfdMvBUoVchqn%2BMX%2BLQwGzIlw6cMVYBA7KyLfxfnzkoQIjxKYVYgWVo2wBePGXH0w5ppzNS0wPFdoX9dwPcKL5gsqu6qqF2%2BvRRBhY2o%2Fth5VjF4Lc%2Fb4mDPmkc1Ofc0qEWNHJKcYtO7eNo%2Fb6%2BVc2xmL23KvRSbtPb85HJYIljHvw%2FMVtWkSKOkfavHSqh%2BZ6DYqemOx93mN0GSfLEFmOaqOKyDG2FWJ9MMfhXFc%2BOw7QmkTvzu1wg7vEZXu%2FD74Y5fb2p4lTO4zr7IeO%2BJGjrwsk998hfc5jmzc6RzrBTd6qF2A11Ui4TowmcJptS2YXcJhXr%2F0Ua%2FFD%2F5xhcQeZ4Ym43v78eRq7ChxXPcYt8heRI1Zle77%2B%2BRTuf7drN8J89KiAxaNNUMUQBWUI0S3aACk3rhaidxdZY98oA39oV45sAuejuAhRaSPDX54mSu6EtYP3zq%2FffyN%2BvsjGx8yoC%2BlMTZXY8WTlnizo7XvdjGjAY4WJPwAKG%2FKxQNoZaKsHPQwh%2F%2FTg8Xistpoa8KerDRdnPEuhOecpbEfoaAycFg2er8bNlNl0o3GmV%2BLT%2FnV8DdAMsB2UhWA7juBXZyp7HoEMMSXvskGOqUB4L0DYPrVy3U8Eb7iWWGOYVfYpoX4sp6ElUai%2BqfRxtkJlbWVXW8ylwsnoBNmLf43JtdpNnVusb%2FKUQUC%2FC7cCMRuYEwcb3Nn5MQi%2FZd2lK1l4Y9HZWY3pwhde%2BI%2BqN54xKRkxl2vnBPdAC8LSfF9WwJQtANpbH5x2JgIgAn1G6qxcXPdgB7ZQ9bwK86DyqqHXjdEua%2FCF0ESK0SF10t4bZg8tnWj&X-Amz-Signature=72f33be1c04d444ebf17e16daa10d8935c01a81575b83ee788744797b0d7d2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAM7IYNF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T050206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID3b9vLJqK7zeVsQuJ8S4emtbsOmHysFfJeGd6XQf%2FoDAiEAqpiDHObqjvhIVqS1IoJthyUfvVBi9rXLoY0S5V7Iatoq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMXSkiIGyFqtrBeWXSrcA7SIRMTw5eokHEEz7fUT3IJFmFfFwJ96F2xwfdMvBUoVchqn%2BMX%2BLQwGzIlw6cMVYBA7KyLfxfnzkoQIjxKYVYgWVo2wBePGXH0w5ppzNS0wPFdoX9dwPcKL5gsqu6qqF2%2BvRRBhY2o%2Fth5VjF4Lc%2Fb4mDPmkc1Ofc0qEWNHJKcYtO7eNo%2Fb6%2BVc2xmL23KvRSbtPb85HJYIljHvw%2FMVtWkSKOkfavHSqh%2BZ6DYqemOx93mN0GSfLEFmOaqOKyDG2FWJ9MMfhXFc%2BOw7QmkTvzu1wg7vEZXu%2FD74Y5fb2p4lTO4zr7IeO%2BJGjrwsk998hfc5jmzc6RzrBTd6qF2A11Ui4TowmcJptS2YXcJhXr%2F0Ua%2FFD%2F5xhcQeZ4Ym43v78eRq7ChxXPcYt8heRI1Zle77%2B%2BRTuf7drN8J89KiAxaNNUMUQBWUI0S3aACk3rhaidxdZY98oA39oV45sAuejuAhRaSPDX54mSu6EtYP3zq%2FffyN%2BvsjGx8yoC%2BlMTZXY8WTlnizo7XvdjGjAY4WJPwAKG%2FKxQNoZaKsHPQwh%2F%2FTg8Xistpoa8KerDRdnPEuhOecpbEfoaAycFg2er8bNlNl0o3GmV%2BLT%2FnV8DdAMsB2UhWA7juBXZyp7HoEMMSXvskGOqUB4L0DYPrVy3U8Eb7iWWGOYVfYpoX4sp6ElUai%2BqfRxtkJlbWVXW8ylwsnoBNmLf43JtdpNnVusb%2FKUQUC%2FC7cCMRuYEwcb3Nn5MQi%2FZd2lK1l4Y9HZWY3pwhde%2BI%2BqN54xKRkxl2vnBPdAC8LSfF9WwJQtANpbH5x2JgIgAn1G6qxcXPdgB7ZQ9bwK86DyqqHXjdEua%2FCF0ESK0SF10t4bZg8tnWj&X-Amz-Signature=f4055980217ec32a1d151b4c9f685036004ee4c259f32ad8e44b345abd2a3b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

