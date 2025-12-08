---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUCQW5ND%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BSqM3OKzMo6%2B%2Bq3ddMYUJG8thsFAKpDRGLD%2F7epeOvQIhAMO9OlE3wzfoUB2nN8npPyLHaBAKk%2BX0atQO4wDpyvAvKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwOczhImcR81Xrxkgq3ANzl%2FL7iIXNyMv6clmKcmi55ubPpYPeICfTWQtyPJXyn661diPo0OoqDO1b4XnO%2BcVOuZQk%2BFDpP0v1aR3MJXE6nOlKBkn6U2w23qFhVmRWP7O5c1TCqRLPq6pdgPdTExE0M9lraCrERorUo9H73DNv6a3x6Bw64zF%2BF1jgZ%2B0ThIj%2FhsVwN2cwXgaWh3Ha3GUVvZmo3ngJLXUYMgRP91l37DIkekelJhPpXy4Ig1BylcVc%2FxdgLLUHYhlnmgo5mJEbjRwFgCOx0iIhG%2B5FThoyyoEKl3OFBJ6Jr0wSFpz1h01KLDiyxToN5E45jMpBtew4ONBI4Kp2izgHmnUH7fM2JmlyJGX%2BFd74PcWLT1OuuUIGdQvlDJ%2FZdAkeGXkVOg53EA21lutanSlzaYgKu2qtXLjWwYcbG3J1VjVAkgzSneSMrEcWOmnpVxu5DIYAFAVzn7Ak%2Bm4I4p2rUG1GxhAfnRb%2F8KXJHf4xJc0wrXOBlHyCo1x2t9XyACbnEhvxjDmXwZ2tONmvN7XKZoCjDSsROVRePbTBR%2BPhMojeF4cibM%2FCqcQUrAsr9PHncMnC1nUZmkyko8E5V5M6sRZ1zEadFQcbBiq6IiRJXgIafspVaEyNYT%2Bo0Vhw2eXZtTCo7dnJBjqkAVGXiTnM3M2pI%2B88eiM7%2FB32YceTUj01F7MfTZpg7Kdv0bho3N2TlS9v9%2F%2Fb2Y1ULdW6P0gTxdiEP7yK%2FpYrVcCCse7RoPifH6bYn7JerYVPwnTecicgTKWtFLDcxVl%2FC6ZZxQ7X50dOv7Pd3sAHTbpIbiQSTfOg7LiQwZmY2xsJ%2Fs3w%2FzkoB04Dp6MagthaZfjqLhPI9EtuFA6d2wHc1GWa2EgC&X-Amz-Signature=aca50eaa55ad0d186567733c1d40762cf14ea089dd520e4d291b852ad7eeac92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUCQW5ND%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BSqM3OKzMo6%2B%2Bq3ddMYUJG8thsFAKpDRGLD%2F7epeOvQIhAMO9OlE3wzfoUB2nN8npPyLHaBAKk%2BX0atQO4wDpyvAvKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwOczhImcR81Xrxkgq3ANzl%2FL7iIXNyMv6clmKcmi55ubPpYPeICfTWQtyPJXyn661diPo0OoqDO1b4XnO%2BcVOuZQk%2BFDpP0v1aR3MJXE6nOlKBkn6U2w23qFhVmRWP7O5c1TCqRLPq6pdgPdTExE0M9lraCrERorUo9H73DNv6a3x6Bw64zF%2BF1jgZ%2B0ThIj%2FhsVwN2cwXgaWh3Ha3GUVvZmo3ngJLXUYMgRP91l37DIkekelJhPpXy4Ig1BylcVc%2FxdgLLUHYhlnmgo5mJEbjRwFgCOx0iIhG%2B5FThoyyoEKl3OFBJ6Jr0wSFpz1h01KLDiyxToN5E45jMpBtew4ONBI4Kp2izgHmnUH7fM2JmlyJGX%2BFd74PcWLT1OuuUIGdQvlDJ%2FZdAkeGXkVOg53EA21lutanSlzaYgKu2qtXLjWwYcbG3J1VjVAkgzSneSMrEcWOmnpVxu5DIYAFAVzn7Ak%2Bm4I4p2rUG1GxhAfnRb%2F8KXJHf4xJc0wrXOBlHyCo1x2t9XyACbnEhvxjDmXwZ2tONmvN7XKZoCjDSsROVRePbTBR%2BPhMojeF4cibM%2FCqcQUrAsr9PHncMnC1nUZmkyko8E5V5M6sRZ1zEadFQcbBiq6IiRJXgIafspVaEyNYT%2Bo0Vhw2eXZtTCo7dnJBjqkAVGXiTnM3M2pI%2B88eiM7%2FB32YceTUj01F7MfTZpg7Kdv0bho3N2TlS9v9%2F%2Fb2Y1ULdW6P0gTxdiEP7yK%2FpYrVcCCse7RoPifH6bYn7JerYVPwnTecicgTKWtFLDcxVl%2FC6ZZxQ7X50dOv7Pd3sAHTbpIbiQSTfOg7LiQwZmY2xsJ%2Fs3w%2FzkoB04Dp6MagthaZfjqLhPI9EtuFA6d2wHc1GWa2EgC&X-Amz-Signature=f98ab900da496a32726734914f561cc67c84ac6d568f04db4e7d9d1995c5d89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

