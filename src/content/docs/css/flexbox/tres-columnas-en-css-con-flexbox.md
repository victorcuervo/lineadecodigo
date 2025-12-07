---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OPLIRWP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeKRF5ntajK9fpwF1hNWzj1rgT3LX1zvnO4Ebdso6ddwIgErhsE0qyyvoQZea2g7jTkBGKvUIZ22TeLUPejTBrT7oqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPGpMnFyye9pFN0ACrcA9Cd5Mg4cvn5LW8bvkciet76yuJOEfKSEGft%2FANZkcRsIBpNAM48Ydgezb5rG8Fw5QRs9l0eV4gJMoGYd5orQO%2BX1O0ZkDQhnMI8f5agR%2BO7wTzt5JdkKU0cj36GCFKC4iGwjOyH2GxpDcuXDDQJ%2BmO9%2Fl530jiVNQikCrOQoJzyMCQead9COAHu4xwcDipK%2FWMHgXw1rWnNngjB9BTb79kzGDb%2BL72k6vYrd7k%2BG3Z6WsglockwHsdZxhzl9zNpCJ%2F4b%2BsuHXe%2FIemikH56%2FBmHArpyIrM8O49H9s8hqi2Rk6TAp1FbY36ORLGefZ3C1KRhHFKwXSm9qKPaXUuhJvSqvwhJn7U1chZUqphcf1useouRWcgVe5VWjUZZHHoVGAFhsf7Us9m7mzKqqFKmMZR7dg8vNhYir7BkEZkhuQ8mmzi2Ov1ODmWRCxUOHS47lZ3Km%2FhDKHsUUyoiA8T92Hd9cQGVHpgruoxg3qgb2sK6zprIUlgFNPr7RCxXu49dv8MJW1nk%2Bc89%2BnJVPx3%2FdRMWjPU4ZOuyo%2BeFFM5n64WZacwJJALGADQPEFeDzrf3RzqSR295wa0spqrDa1eSIjHLqJzxCU8uF2ObDxHMAj3m8iSqteCs3rW27NZwMKH90skGOqUBZcnB%2Fjv2yOQREtwLIPHDXgN6hziuPQ%2B8ANtIBdI%2FDx0Q%2FXmP3K5CKn%2BWCipi1E3G50vJPpmQsAPP4A8dBggSGSCyIKFvkk8LD8BbO%2FS7INKT5TOEdR5KLwhmtfZ2ZgW1W6hoJkIBLuxVlXMjFXiV864WFRvWdtnmQguyqa92HFKk7cNGw180uyFF%2F5Hy9qevlC%2Fw5DdMJBiFR08ARusoxlZRk%2F6Q&X-Amz-Signature=ab929b29b42ade603f9c8596fe6d1180e4436b6db1ae5c55692dff5ca408d381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OPLIRWP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeKRF5ntajK9fpwF1hNWzj1rgT3LX1zvnO4Ebdso6ddwIgErhsE0qyyvoQZea2g7jTkBGKvUIZ22TeLUPejTBrT7oqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPGpMnFyye9pFN0ACrcA9Cd5Mg4cvn5LW8bvkciet76yuJOEfKSEGft%2FANZkcRsIBpNAM48Ydgezb5rG8Fw5QRs9l0eV4gJMoGYd5orQO%2BX1O0ZkDQhnMI8f5agR%2BO7wTzt5JdkKU0cj36GCFKC4iGwjOyH2GxpDcuXDDQJ%2BmO9%2Fl530jiVNQikCrOQoJzyMCQead9COAHu4xwcDipK%2FWMHgXw1rWnNngjB9BTb79kzGDb%2BL72k6vYrd7k%2BG3Z6WsglockwHsdZxhzl9zNpCJ%2F4b%2BsuHXe%2FIemikH56%2FBmHArpyIrM8O49H9s8hqi2Rk6TAp1FbY36ORLGefZ3C1KRhHFKwXSm9qKPaXUuhJvSqvwhJn7U1chZUqphcf1useouRWcgVe5VWjUZZHHoVGAFhsf7Us9m7mzKqqFKmMZR7dg8vNhYir7BkEZkhuQ8mmzi2Ov1ODmWRCxUOHS47lZ3Km%2FhDKHsUUyoiA8T92Hd9cQGVHpgruoxg3qgb2sK6zprIUlgFNPr7RCxXu49dv8MJW1nk%2Bc89%2BnJVPx3%2FdRMWjPU4ZOuyo%2BeFFM5n64WZacwJJALGADQPEFeDzrf3RzqSR295wa0spqrDa1eSIjHLqJzxCU8uF2ObDxHMAj3m8iSqteCs3rW27NZwMKH90skGOqUBZcnB%2Fjv2yOQREtwLIPHDXgN6hziuPQ%2B8ANtIBdI%2FDx0Q%2FXmP3K5CKn%2BWCipi1E3G50vJPpmQsAPP4A8dBggSGSCyIKFvkk8LD8BbO%2FS7INKT5TOEdR5KLwhmtfZ2ZgW1W6hoJkIBLuxVlXMjFXiV864WFRvWdtnmQguyqa92HFKk7cNGw180uyFF%2F5Hy9qevlC%2Fw5DdMJBiFR08ARusoxlZRk%2F6Q&X-Amz-Signature=132fdea2490c26b4fb7affbcaf20097bfdafecbcda569c2a9ab2754bf1359327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

