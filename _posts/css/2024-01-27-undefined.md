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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624FEIAR7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD9exRfSn2rWiFGXNwnN8I7%2FLe5SC81jQk3DGqAMwWtOgIgTPPHAhE2poJRRDVl%2BdIbfTsCcHlcAoTyzJpoPdMp6swq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJYvd5yebEQ8Tyx6LCrcA9M62bW8Z1TR9AoFaRZuQVgi%2FmQ1cFt1kcSL428PiZCbE7TUwjU4JCcCXfYkWwvCmruXO%2FjUYkWebMN3aGT6DfUfhF7xAuwaghP1O4rd0QUBpA926YAAsEctGRq50%2BXKfwLoycQX%2FGo9YSZ3jTRr%2FhP7GiOvozLhH1qoHoGqnDoqdap86bnXbVCB6mDyZHmW4Vodb7f6w%2FY%2BzLdqAlPpHCF2uyieM1wxdMi0roCOMpULFWfJShV%2FWDSagJRYeqOx9yyyeYFcguMzqY4N7JofuCRJ49ceh7I5QB4RjDP9bUvm7xQ8S4fGo%2Ft5E7R5BtOdNpvLfafAAAG7FVAThboDYanj9BOZP3iSOojqAgqw6uTRXIIqThHREnXswrPpU9xlyb4waZx44aftA5IMDZqWY29FWS5BUyjB3gajYLTGzNguzsoAxQ12wniHm2GTKRded2uMg4juo9oJjuj5%2B1tcC%2FnV4RSpyBbDlSXyyQGTnP41w4Ez1CaBEKvod1RL%2FVqdEzaK0BVswcyWE0zxHvDI4k3AdqqtBncuwuEixkbNANfxXrA1si6%2F1p2jIu8hnKSBOj%2BhdmYTxMLOe4WkBNB5VhNM1t2LFUOYRPrQBlSu3g2I1ezzHRTGJwqJpgimMP6VvskGOqUBVwIIBFC%2FDIBIpP7dZilxlHDYP4RzJNiiWeDcaEDUbRvL5ki4%2F9SLW5vd05ZEZpjryyLsdZZnrr1%2FuUsNshKg6O7G5qHXA3NpzRI9pHGooaRlDfzR4%2FvOrrQ%2FM%2FuDHqomd1Jb7ozfeKxr6MRy0TSz1Lz7ECpauyjaPv%2FRetnVMsTFC%2BV0RVANJve4JakPQOwiWZFpm8VKTpJnzuRPXX8SQ9e%2F0HNh&X-Amz-Signature=c16f6e644201ca2a3e0f18e22a045458270b74ea99c28c33258b28f045dd1543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624FEIAR7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T045545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD9exRfSn2rWiFGXNwnN8I7%2FLe5SC81jQk3DGqAMwWtOgIgTPPHAhE2poJRRDVl%2BdIbfTsCcHlcAoTyzJpoPdMp6swq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJYvd5yebEQ8Tyx6LCrcA9M62bW8Z1TR9AoFaRZuQVgi%2FmQ1cFt1kcSL428PiZCbE7TUwjU4JCcCXfYkWwvCmruXO%2FjUYkWebMN3aGT6DfUfhF7xAuwaghP1O4rd0QUBpA926YAAsEctGRq50%2BXKfwLoycQX%2FGo9YSZ3jTRr%2FhP7GiOvozLhH1qoHoGqnDoqdap86bnXbVCB6mDyZHmW4Vodb7f6w%2FY%2BzLdqAlPpHCF2uyieM1wxdMi0roCOMpULFWfJShV%2FWDSagJRYeqOx9yyyeYFcguMzqY4N7JofuCRJ49ceh7I5QB4RjDP9bUvm7xQ8S4fGo%2Ft5E7R5BtOdNpvLfafAAAG7FVAThboDYanj9BOZP3iSOojqAgqw6uTRXIIqThHREnXswrPpU9xlyb4waZx44aftA5IMDZqWY29FWS5BUyjB3gajYLTGzNguzsoAxQ12wniHm2GTKRded2uMg4juo9oJjuj5%2B1tcC%2FnV4RSpyBbDlSXyyQGTnP41w4Ez1CaBEKvod1RL%2FVqdEzaK0BVswcyWE0zxHvDI4k3AdqqtBncuwuEixkbNANfxXrA1si6%2F1p2jIu8hnKSBOj%2BhdmYTxMLOe4WkBNB5VhNM1t2LFUOYRPrQBlSu3g2I1ezzHRTGJwqJpgimMP6VvskGOqUBVwIIBFC%2FDIBIpP7dZilxlHDYP4RzJNiiWeDcaEDUbRvL5ki4%2F9SLW5vd05ZEZpjryyLsdZZnrr1%2FuUsNshKg6O7G5qHXA3NpzRI9pHGooaRlDfzR4%2FvOrrQ%2FM%2FuDHqomd1Jb7ozfeKxr6MRy0TSz1Lz7ECpauyjaPv%2FRetnVMsTFC%2BV0RVANJve4JakPQOwiWZFpm8VKTpJnzuRPXX8SQ9e%2F0HNh&X-Amz-Signature=7a68368b11ea059d0b0ba73e33e42319128e893f8285ae21469053d2ced00872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

