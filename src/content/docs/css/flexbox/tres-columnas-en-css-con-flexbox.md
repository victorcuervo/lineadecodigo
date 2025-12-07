---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HVXOUIG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdPMTi8b5PhT1QXaws0nZsRce4OT6v3NZ7%2FqBk9uiVNAiEA0Pn9pzNFhueqynrdM71CDMWQjZYaExnyY7cAT%2BDMtzcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCI9B9Ygdor40mvuyrcA74MpW8kRSAFxRESiF%2FkHCKc5oeFr6G7f%2FmKbyRKSQqRewriceeuZgpfVc%2F54a6%2BqUWm%2F8m1BiRV2Uxk38v13Ni3F2nRPXi46e%2BQytujtiPUnIqyOAGMCU5rpilIlEQ1nRZJ5iI1moJ3%2FgGsSoHvs%2FvkFRV6ePF4ezNCpfknuCYg38CvS6yOOJIhPWdRNHC8HpB8w2nfbI0bGL6oP%2Bg0hcn848w0hmhjYopj02s0Sn1N2mlEWm2RoS9yfvgu6WLWXhp5eI9uZtozp6xD6roKig7ssTRyTprW4Gn6mUkdlmq99zs04EOBI2H%2BxeTmi1qChP9WhtkSYNv79BbHx5fa9jl1p2MQN4lTgYA%2B64KaRrGTSukVXh9h8aJNwmf%2BzZxHOYHr1pZVV5OAS1zBDFiwd1PL4QMChIxeUSYtCDugZFrGvQfWIaXNtQH9km%2Bdwbli0TNtoOVanjNq3hPNpOG2HLdnWpVB5bXN3ligueB5Ny7FOZNdLSU3qX2%2BacfMDWTpGf7OCdF7BTDT4bPSbpw71XQoLJG%2FIAvaRX23IFVk1jbvSbiwy4m4wAGJwjEBCpm7javW0tI%2BfDsZbiUeF0n1DSvPQr%2BJQ4G1hADmsFJxp4JN%2BfvuVjQU8Ri%2FHN4QMO3H18kGOqUBEpqOKUVtzDUI9QcrlZ%2FZozgpoJx3us%2F6Gmh132WA8ZfATwNIO7uqqrKjNJCwVMtVjur%2FMhke8XFsEMX8aUZRSDpKprroPeilX6G%2F5rf%2BSvj%2BnSSKl3eIDLia67BhU6fV5JO3zblXhmnVRVTe%2B0oUutXmhUhI1CZc95WNgNMxJ9qdxVN%2FJrQ8RfmewGAYQ4U9bXe2XjA%2Bup8m2JM2o9O8bnxwd666&X-Amz-Signature=a71661720663f970ae921eb22fee5e49e9d96e2573ffb70e775bf22f763b11ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HVXOUIG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdPMTi8b5PhT1QXaws0nZsRce4OT6v3NZ7%2FqBk9uiVNAiEA0Pn9pzNFhueqynrdM71CDMWQjZYaExnyY7cAT%2BDMtzcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCI9B9Ygdor40mvuyrcA74MpW8kRSAFxRESiF%2FkHCKc5oeFr6G7f%2FmKbyRKSQqRewriceeuZgpfVc%2F54a6%2BqUWm%2F8m1BiRV2Uxk38v13Ni3F2nRPXi46e%2BQytujtiPUnIqyOAGMCU5rpilIlEQ1nRZJ5iI1moJ3%2FgGsSoHvs%2FvkFRV6ePF4ezNCpfknuCYg38CvS6yOOJIhPWdRNHC8HpB8w2nfbI0bGL6oP%2Bg0hcn848w0hmhjYopj02s0Sn1N2mlEWm2RoS9yfvgu6WLWXhp5eI9uZtozp6xD6roKig7ssTRyTprW4Gn6mUkdlmq99zs04EOBI2H%2BxeTmi1qChP9WhtkSYNv79BbHx5fa9jl1p2MQN4lTgYA%2B64KaRrGTSukVXh9h8aJNwmf%2BzZxHOYHr1pZVV5OAS1zBDFiwd1PL4QMChIxeUSYtCDugZFrGvQfWIaXNtQH9km%2Bdwbli0TNtoOVanjNq3hPNpOG2HLdnWpVB5bXN3ligueB5Ny7FOZNdLSU3qX2%2BacfMDWTpGf7OCdF7BTDT4bPSbpw71XQoLJG%2FIAvaRX23IFVk1jbvSbiwy4m4wAGJwjEBCpm7javW0tI%2BfDsZbiUeF0n1DSvPQr%2BJQ4G1hADmsFJxp4JN%2BfvuVjQU8Ri%2FHN4QMO3H18kGOqUBEpqOKUVtzDUI9QcrlZ%2FZozgpoJx3us%2F6Gmh132WA8ZfATwNIO7uqqrKjNJCwVMtVjur%2FMhke8XFsEMX8aUZRSDpKprroPeilX6G%2F5rf%2BSvj%2BnSSKl3eIDLia67BhU6fV5JO3zblXhmnVRVTe%2B0oUutXmhUhI1CZc95WNgNMxJ9qdxVN%2FJrQ8RfmewGAYQ4U9bXe2XjA%2Bup8m2JM2o9O8bnxwd666&X-Amz-Signature=ec6fbfccb4e44b9f1359eaddc3b9bb3104fde826cf59be02538a8825c2eb0ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

