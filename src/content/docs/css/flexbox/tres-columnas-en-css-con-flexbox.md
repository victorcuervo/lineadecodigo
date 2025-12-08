---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOPBKPM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3RbacMAKNQJImcfRA1fBAk6kcsSGMc7CZAJkYA%2F5DRAIgRsKG5HkVaS%2FyEh46S92zh3%2BLIEiSzHmvPsF497f%2FPbQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJlIwZjlxHDncTnDircA6QeKWAFVKXuRGLr9Aa1CPS9KHBJCJDIyFKlehWTFyHcV%2Bnehgd7ikoLAosaoCzxc8A1kvhLNkeX724oxaQuZ3L4mSgeHIAy9yAt6WwrZiUs0xsm2qySYwsJqbagPt6fcuxVfCfHqc7CLUljQf2cAjRYnE7nQWCl3hAoQrp%2FeKR3A%2FW02hP8EDepSzB3yJ2XT1yymx9L8l2qocGxL8UmSAHNnMMLHVqBvqkWlEYhYJ5bek2aw182ZHuGUyOACMCv84FgX4Xh%2FlBJvdYlha%2FcHlcPCpQrGFruYkxuHIUYbnm067GYiXd6Zhv%2FTW%2F82iEJSGkQdccG4KHt9jH1yj8LBYWzjsfOZe%2BmDGgj6nAbMJGXiD8ujBXRf0DDSkIwOzfcq95hqkVBTTPObRi%2Fgo7bXQ7%2BnekWrHozi68IzbVpbVn%2Fm4QBw7T8oJ6JCCT5WFZTWz8HHjnXqEtbxu1UKBUt1f2Kx5PsWODoMxyNt3eL3z0Bgd%2Bp%2BNwiI34DU0Zs6BN%2B1W1yg%2FK1XTA517C8iUdHRbS%2FkYhY9DbHJhdf%2F2rt1aGR3Q%2BZieKOE12jq2ei7qL8j3XEGpwWMjhoIVEsqvUkWFhdrTe1fKRnRskivHxSRtuqabQ0g5d6bj5oYFykMNih3ckGOqUBQy3q%2FgUpEYoag4DxJskWZ6X1X5BliIth71gNeMD%2FY5Rcq4FwajsyH3KYZF9sIdVbuy0FqWA6bD%2Fwa7DGoFMknI%2FIWsnmzFgpAHYzdf5ki0tu5Sb5SL50GSLJe2o61JOiMMPPuLWGbxmRy6JKGgHXxmgNCFDBdUMYQIEuzsz9%2BYOdryK4FN93ElUl0sJHdwntqOJC6fSjy2hg739AS53jSokYLYCz&X-Amz-Signature=cfbfe809a9d56d347dde633fe2402a9a838d0c95aca84621fd2367c73ed7fbff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOPBKPM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3RbacMAKNQJImcfRA1fBAk6kcsSGMc7CZAJkYA%2F5DRAIgRsKG5HkVaS%2FyEh46S92zh3%2BLIEiSzHmvPsF497f%2FPbQqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJlIwZjlxHDncTnDircA6QeKWAFVKXuRGLr9Aa1CPS9KHBJCJDIyFKlehWTFyHcV%2Bnehgd7ikoLAosaoCzxc8A1kvhLNkeX724oxaQuZ3L4mSgeHIAy9yAt6WwrZiUs0xsm2qySYwsJqbagPt6fcuxVfCfHqc7CLUljQf2cAjRYnE7nQWCl3hAoQrp%2FeKR3A%2FW02hP8EDepSzB3yJ2XT1yymx9L8l2qocGxL8UmSAHNnMMLHVqBvqkWlEYhYJ5bek2aw182ZHuGUyOACMCv84FgX4Xh%2FlBJvdYlha%2FcHlcPCpQrGFruYkxuHIUYbnm067GYiXd6Zhv%2FTW%2F82iEJSGkQdccG4KHt9jH1yj8LBYWzjsfOZe%2BmDGgj6nAbMJGXiD8ujBXRf0DDSkIwOzfcq95hqkVBTTPObRi%2Fgo7bXQ7%2BnekWrHozi68IzbVpbVn%2Fm4QBw7T8oJ6JCCT5WFZTWz8HHjnXqEtbxu1UKBUt1f2Kx5PsWODoMxyNt3eL3z0Bgd%2Bp%2BNwiI34DU0Zs6BN%2B1W1yg%2FK1XTA517C8iUdHRbS%2FkYhY9DbHJhdf%2F2rt1aGR3Q%2BZieKOE12jq2ei7qL8j3XEGpwWMjhoIVEsqvUkWFhdrTe1fKRnRskivHxSRtuqabQ0g5d6bj5oYFykMNih3ckGOqUBQy3q%2FgUpEYoag4DxJskWZ6X1X5BliIth71gNeMD%2FY5Rcq4FwajsyH3KYZF9sIdVbuy0FqWA6bD%2Fwa7DGoFMknI%2FIWsnmzFgpAHYzdf5ki0tu5Sb5SL50GSLJe2o61JOiMMPPuLWGbxmRy6JKGgHXxmgNCFDBdUMYQIEuzsz9%2BYOdryK4FN93ElUl0sJHdwntqOJC6fSjy2hg739AS53jSokYLYCz&X-Amz-Signature=31915da8f16f58fa7d1131c08400d584389d1377f38e5b31134b6a26e8d97694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

