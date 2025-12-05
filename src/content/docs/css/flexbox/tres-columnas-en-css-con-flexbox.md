---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ52GOK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVFwij8mVH0tntOikfifUZ5IflLzB%2FK9ldPY%2BVhz%2B9oAiEAveUSxzAmRU5E%2BJlhxTngeYRih5J2u5D1CKXpIlX959gq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDN00KVVVlYEu7XQb%2FircA5bRc398wldxRyjQJtT767oJoMbQ3fnSjDmpWKmdftYV%2Fke%2BT4TMblqJ%2B6m2UGahSLVplWcKIOobz%2FVIRjmyoLC5sxFhyNjBv8wYtV5CYELA0Vp71SelLpU%2FcEtcCNWrHY6ofmf5r8Vc%2BJ7IMxtf7b0bFt0zDwr8%2BtLWATUId4rDikcoUPmd%2BOGUPOMjWBs9WG20XCJtdq%2BUb%2F7OowURqibfVoZxfXmfyvtqUgaGSRcl9wV%2FHR8K8dQUJkKxbozOWnQFu6V%2FVFudjm3k5AsxrKSugplH2WWSvXqGa2oNJLzprcrpstjfzIBPIowThvm6WvLbqwwm5P7VeLVTPncZ60E10VRlRH0Un55SpQvgBj1STN3njZybhX7oFn7VJheiOm2wZIKDBjOt7le8Bx07CPzWjVc%2FsP%2B3KK8Kp6FmSBcCt%2BieCW9LR26kg%2F54At5TIuIkd6dWrtjG35apcZP1p9TM0pw6yETnyB81mYiE%2Flocg599YShuTtRAQS8mkbCA6ejOwbwEkcJvM13aY5NNXB12r1yF%2Bve8krMflEjXAvoQPHXBXFh3SPyzUkdzfg8mhfJH0afRsLBYyFVve975OSnLBQvcoxF7W62OBLf2QWu1f3yRwztpA%2FysgeeIML%2BMyMkGOqUBWcJXuuf2mLHk%2BfioRnPHOKI9Ns%2B1RklAFA3wLmDWqvVLgNWeqUUCjG4n2ahTtz%2BbrZE4UVEjHOkAhYLZHYvjufGtsmx1ZGKhvLGkqSzfc2oxCxuia1hssjLf0y5pTt8Fnxu2j9YLQ8zV3a%2FcB2qfr7os6tOhs80dvtq%2B7COgHIL1Il%2F4fp1Cxhq%2B%2F7bc7znYJAjHwlIB26ZmPOm1jCIvNos%2FF46n&X-Amz-Signature=19fc8df7e82136c1e9f5811e7290f975613fdb90d4f0eb89086e2b56c7f8f589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZ52GOK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T033716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVFwij8mVH0tntOikfifUZ5IflLzB%2FK9ldPY%2BVhz%2B9oAiEAveUSxzAmRU5E%2BJlhxTngeYRih5J2u5D1CKXpIlX959gq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDN00KVVVlYEu7XQb%2FircA5bRc398wldxRyjQJtT767oJoMbQ3fnSjDmpWKmdftYV%2Fke%2BT4TMblqJ%2B6m2UGahSLVplWcKIOobz%2FVIRjmyoLC5sxFhyNjBv8wYtV5CYELA0Vp71SelLpU%2FcEtcCNWrHY6ofmf5r8Vc%2BJ7IMxtf7b0bFt0zDwr8%2BtLWATUId4rDikcoUPmd%2BOGUPOMjWBs9WG20XCJtdq%2BUb%2F7OowURqibfVoZxfXmfyvtqUgaGSRcl9wV%2FHR8K8dQUJkKxbozOWnQFu6V%2FVFudjm3k5AsxrKSugplH2WWSvXqGa2oNJLzprcrpstjfzIBPIowThvm6WvLbqwwm5P7VeLVTPncZ60E10VRlRH0Un55SpQvgBj1STN3njZybhX7oFn7VJheiOm2wZIKDBjOt7le8Bx07CPzWjVc%2FsP%2B3KK8Kp6FmSBcCt%2BieCW9LR26kg%2F54At5TIuIkd6dWrtjG35apcZP1p9TM0pw6yETnyB81mYiE%2Flocg599YShuTtRAQS8mkbCA6ejOwbwEkcJvM13aY5NNXB12r1yF%2Bve8krMflEjXAvoQPHXBXFh3SPyzUkdzfg8mhfJH0afRsLBYyFVve975OSnLBQvcoxF7W62OBLf2QWu1f3yRwztpA%2FysgeeIML%2BMyMkGOqUBWcJXuuf2mLHk%2BfioRnPHOKI9Ns%2B1RklAFA3wLmDWqvVLgNWeqUUCjG4n2ahTtz%2BbrZE4UVEjHOkAhYLZHYvjufGtsmx1ZGKhvLGkqSzfc2oxCxuia1hssjLf0y5pTt8Fnxu2j9YLQ8zV3a%2FcB2qfr7os6tOhs80dvtq%2B7COgHIL1Il%2F4fp1Cxhq%2B%2F7bc7znYJAjHwlIB26ZmPOm1jCIvNos%2FF46n&X-Amz-Signature=1b88c8fdc4b2e6d5a685d44581f7ea88d783a04599184d76948265fa5e2a79c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

