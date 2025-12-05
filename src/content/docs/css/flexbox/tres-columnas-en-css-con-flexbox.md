---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXD2XQHJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHlJ8v0ar15vHqZJdbOkE%2BzUPj%2FvcEJUoMHL1Ynqk6mAiEA09mUvWLREE4W6R1M%2FsdbECYK0HQpySMQB3gciEcGi9Iq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMhoqlZEQ8%2Fhx5mPiCrcAwsLD%2BjokvtSPYdksvggIER%2Ft61OWLT%2Bo2A2yNlq7%2F6njQavGccWoxCZJYPR62kz52%2B3a76Mg9RTTLMZnHG7pZcd4c98fRUtl45c05XuWsz8jhWibgEQfi1cDS2CUfrru282ebgBYd8B317CnBPtIn2XWrowTIdw6YEDAMgg%2BUj%2F8mzS02FRCR0aKAfxa%2B6YRWYbpqrQC52bPbJT6xvZTAhTSOktfzzOUYA%2FVFrMzDS1s5cxPS3a%2B79CXg485ybX4zMZkoOvMy%2BaAw7PFJhF7D7pt1JHg3DN6o3oEF33%2FV6wZaqSQB%2BxVvkaiFcHB00UHyfelGrabMlWEnRYbRoPvhHgAqYVDa5%2FVfJLNkiKkvtxA%2BFjG1XFgNNbmpdemwsiLB2VdoFh9sAceRgjKn00LpjzlXaE7MFeWZRO14md2Zm9J7LWreZ%2BRQzqg5Pt3uy2r5eIob970EKTEXL5ux8rVv2EblapSJI8mU%2BOe%2BHa%2B%2Bg79Dw96lyksn0VdCJn08kiSsigWBeNjtomYHxIIiJ1nSpCLCXoIYAerhlWtSz%2BMdh6Iqyow9dQFLsGFHrrWT8b8T7QSMzHvjtvwEGlFF7GK3wJa5%2FFe3sWgF22XqnsjmyVWgsrqGgOcqkkVn2bMP6LyMkGOqUBOHaw59qsBcMjAwMAJtafpnmgz%2BsttLpSVg94QMyns2KfMSTpcVc22MhlKKch2ymACw%2B6jAQdYHNvUCkyhTn1CsZeLN2GI567T2Yjgzqrfpi4qs08Qarcd1ACdNlcbJDkD9WJrfCC3QeieZPqolcl9KViVFgfJwhK52Oljfg5TpGstoNobR6Nw8UN5isrMzX%2B2UB6hJrAdMIpWuO9aAVASU9BihBP&X-Amz-Signature=5f9d5a204e43fc04b5ae40ebc83992d8b2650294cd780dd92ffd0f648aac8e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXD2XQHJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHlJ8v0ar15vHqZJdbOkE%2BzUPj%2FvcEJUoMHL1Ynqk6mAiEA09mUvWLREE4W6R1M%2FsdbECYK0HQpySMQB3gciEcGi9Iq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMhoqlZEQ8%2Fhx5mPiCrcAwsLD%2BjokvtSPYdksvggIER%2Ft61OWLT%2Bo2A2yNlq7%2F6njQavGccWoxCZJYPR62kz52%2B3a76Mg9RTTLMZnHG7pZcd4c98fRUtl45c05XuWsz8jhWibgEQfi1cDS2CUfrru282ebgBYd8B317CnBPtIn2XWrowTIdw6YEDAMgg%2BUj%2F8mzS02FRCR0aKAfxa%2B6YRWYbpqrQC52bPbJT6xvZTAhTSOktfzzOUYA%2FVFrMzDS1s5cxPS3a%2B79CXg485ybX4zMZkoOvMy%2BaAw7PFJhF7D7pt1JHg3DN6o3oEF33%2FV6wZaqSQB%2BxVvkaiFcHB00UHyfelGrabMlWEnRYbRoPvhHgAqYVDa5%2FVfJLNkiKkvtxA%2BFjG1XFgNNbmpdemwsiLB2VdoFh9sAceRgjKn00LpjzlXaE7MFeWZRO14md2Zm9J7LWreZ%2BRQzqg5Pt3uy2r5eIob970EKTEXL5ux8rVv2EblapSJI8mU%2BOe%2BHa%2B%2Bg79Dw96lyksn0VdCJn08kiSsigWBeNjtomYHxIIiJ1nSpCLCXoIYAerhlWtSz%2BMdh6Iqyow9dQFLsGFHrrWT8b8T7QSMzHvjtvwEGlFF7GK3wJa5%2FFe3sWgF22XqnsjmyVWgsrqGgOcqkkVn2bMP6LyMkGOqUBOHaw59qsBcMjAwMAJtafpnmgz%2BsttLpSVg94QMyns2KfMSTpcVc22MhlKKch2ymACw%2B6jAQdYHNvUCkyhTn1CsZeLN2GI567T2Yjgzqrfpi4qs08Qarcd1ACdNlcbJDkD9WJrfCC3QeieZPqolcl9KViVFgfJwhK52Oljfg5TpGstoNobR6Nw8UN5isrMzX%2B2UB6hJrAdMIpWuO9aAVASU9BihBP&X-Amz-Signature=873d2c33afb261a38c91e5c750489c3294821edb2b1867fe77afd0dee3a55c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

