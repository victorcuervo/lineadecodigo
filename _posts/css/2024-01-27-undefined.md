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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOFQH5Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDUPELx3nyqFeVfsJScBrSWIdA9AFtqlWwjZ4tLFW3peAiEAkOVbRjtXblRXOBo3PmD%2BXN8lqb%2BMbXQFJU0MJk%2FJJ2Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJsiZi9eMDnP1uDyCCrcA1VQxc0LfZQN9gzldxfnd9gBFLxjcZ%2BWReVawH7wQv64uoKOgk6hZuI%2B2PVNEf2dUEzvve9euqZZblsUlHu5ed6JTA43VjCNSJGx0Ow5GkrVIDa0Sc%2FaaqkGQpwpgg2Qoc%2BTIAqk9FSx7qZ2nw8BuooBX%2Bx1cM%2BzVAssTOMOmq8hAAYfMJDMF7SZ7HLyj%2B7glPHcO481Cfgir%2Bed%2BabU%2BHJ5jMsZsj6x733Q%2Baejt%2Flmccp7M%2B1Ajnte%2Fa3AJPq8he9dsvrtWqGfVRIugKBngzFnKChf5L1xVRzO8SwNEKQsHBvIldVAZObpl30pUagaeuicISWC7h4nWvMktJtkgrRik6y70tZhtnpq8rhLB%2BHcGUAcb8%2Bo2ossq5KD9g9qzftqj5P6uA2hDpvQ2LFNBedNB25%2BV1lag0HcpwvgMP5Lamo1ZkNxvfdSxNdPstaDaJvNEsBfuDyZmc8LSx9lPVgGfhQqk6BXg%2F0bigOgiGOiTDW19Zc%2FNOoD59G%2Bvx7NuSQNLETHfCY6wAL5E3KMGHXd3znQHmnac%2BPc4HTEbL1QbkLmieF8DMIDwx62ck7pae4uK6J1uHq0FUk694iDTlWOTn%2FYYOndQHkliu9eihtFKFARqRUrGIwFlnthMJKIwckGOqUBQXGsZg5kc%2FK0xxLmVS1LE1MuNbPu7fwwo%2FPkQAOf77hgdfA29biIDhiGtZeePwD3cqdn5KfoOfTWszn6WFfT5b2lPlXhfz%2BOx5wRh4tm9520S77l40IrbjVAqPBKPwqRVD%2BeumCkEgp5dnQJGrgUD3fa5ksUL8XWHxg%2Fztorg0ehiJ3eQq9Jh98Og37rWK46R5zbKt5J%2FmhljibleHSwzs1eKSAG&X-Amz-Signature=12df28d96a5a2d9aff68b2d643e69048c43110a0fbbd68a498044f639152af72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BOFQH5Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIDUPELx3nyqFeVfsJScBrSWIdA9AFtqlWwjZ4tLFW3peAiEAkOVbRjtXblRXOBo3PmD%2BXN8lqb%2BMbXQFJU0MJk%2FJJ2Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJsiZi9eMDnP1uDyCCrcA1VQxc0LfZQN9gzldxfnd9gBFLxjcZ%2BWReVawH7wQv64uoKOgk6hZuI%2B2PVNEf2dUEzvve9euqZZblsUlHu5ed6JTA43VjCNSJGx0Ow5GkrVIDa0Sc%2FaaqkGQpwpgg2Qoc%2BTIAqk9FSx7qZ2nw8BuooBX%2Bx1cM%2BzVAssTOMOmq8hAAYfMJDMF7SZ7HLyj%2B7glPHcO481Cfgir%2Bed%2BabU%2BHJ5jMsZsj6x733Q%2Baejt%2Flmccp7M%2B1Ajnte%2Fa3AJPq8he9dsvrtWqGfVRIugKBngzFnKChf5L1xVRzO8SwNEKQsHBvIldVAZObpl30pUagaeuicISWC7h4nWvMktJtkgrRik6y70tZhtnpq8rhLB%2BHcGUAcb8%2Bo2ossq5KD9g9qzftqj5P6uA2hDpvQ2LFNBedNB25%2BV1lag0HcpwvgMP5Lamo1ZkNxvfdSxNdPstaDaJvNEsBfuDyZmc8LSx9lPVgGfhQqk6BXg%2F0bigOgiGOiTDW19Zc%2FNOoD59G%2Bvx7NuSQNLETHfCY6wAL5E3KMGHXd3znQHmnac%2BPc4HTEbL1QbkLmieF8DMIDwx62ck7pae4uK6J1uHq0FUk694iDTlWOTn%2FYYOndQHkliu9eihtFKFARqRUrGIwFlnthMJKIwckGOqUBQXGsZg5kc%2FK0xxLmVS1LE1MuNbPu7fwwo%2FPkQAOf77hgdfA29biIDhiGtZeePwD3cqdn5KfoOfTWszn6WFfT5b2lPlXhfz%2BOx5wRh4tm9520S77l40IrbjVAqPBKPwqRVD%2BeumCkEgp5dnQJGrgUD3fa5ksUL8XWHxg%2Fztorg0ehiJ3eQq9Jh98Og37rWK46R5zbKt5J%2FmhljibleHSwzs1eKSAG&X-Amz-Signature=01063497dfb8212e087544f1871a882cbfd4e334a1258fff0caffe9958634f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

