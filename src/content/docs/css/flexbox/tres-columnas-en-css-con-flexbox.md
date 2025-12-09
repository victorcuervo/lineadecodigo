---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXEOE6C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF4O9oALKBRPcpmaqmTEVZLr6H8CiWRUCj3i9vaZGLoAiEApakAkkySO5qVJ1vxOn5X2G7%2BTqpE1e0EXH8cZSPSGVIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdyBp4xqPbgtZM7uCrcAzLAHu%2BnvJsSG9kVEXx5ZQhncsQPW%2B%2FyxFzw3%2FSBRwzWzRKFHqbH%2B%2BadVzJEKgbp%2BgBzXY9hi16kSOmK0HWp9d2yDNPS%2Fpuogbc2Lw4rV%2FZqauEGYpXuaA%2FhFR85LuZoQ4E49U0LrAIGwrbY4%2F1KqX9NiU8qtg0rqZ94TMNZs7Qfb%2FYqt0auNR%2F2stTGLhcTqpAPK8LRThryX%2FG0a9whsQwSpUxkq4mCNHXAqA5S1rpf%2FATEMRL4SaLFNHBoO1OIPvuM0V0%2Bz2g6zpEecKp%2FLliajoUMromjnuDB534cF3AbRDCRlLvomMBmI8gipbsgMxAs4wxsfHIsnPHDJfR%2FBdGANQKEblFV6MZHOpMpbovGZkRAxMP2nQ6WL6wG5F2bEmuFZi3esebow1vLp%2BRexOmWNX3SA%2BuWdUth2WW1qVxaY6OQsikPbsZtF3i1cl9bE%2B3WF0kcRrvnynOzHpCT8IHufl7c3v9wqZS7AzGr9LCFsjN%2B7sIRDXCK3hrZUQwr%2FX9AKRaBx8shJzC3rw%2FgW%2B%2BNFxFJFyS9s0O9%2BxZ0FByGfDU5xMS2eSae7SsqxbwUB%2F%2FBdF8Z3jmA%2Bn%2B864oY5u%2FoCrlkQRNflhXBme27ZttCF0IcfBc4nhv4TdsQMJCI38kGOqUB9YM7WnRzWSy7n4mAg5Q6dKbU6ZL1xiYNkJzMUFWgZytAzuGTOnQfb9a0Xec%2BLRnF6EAUVXtfHCwvCog6d97IDEtmZe2g05Vp1RIM9Tgh9TLSvyMIBGvZGFvNhwtQJvK0LKf01SKD4vN1enbdUcS2m3%2BscB5WJeorrH0NcKOqYYaWlyVNJohyxClL3guZe7vKygNli7lvsIM17erZbV1dNqt3O3uN&X-Amz-Signature=cddbb8137c0a5d6b50b91ee7667892e1a8bb92974608b814a88e402df94aae93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXEOE6C%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF4O9oALKBRPcpmaqmTEVZLr6H8CiWRUCj3i9vaZGLoAiEApakAkkySO5qVJ1vxOn5X2G7%2BTqpE1e0EXH8cZSPSGVIqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdyBp4xqPbgtZM7uCrcAzLAHu%2BnvJsSG9kVEXx5ZQhncsQPW%2B%2FyxFzw3%2FSBRwzWzRKFHqbH%2B%2BadVzJEKgbp%2BgBzXY9hi16kSOmK0HWp9d2yDNPS%2Fpuogbc2Lw4rV%2FZqauEGYpXuaA%2FhFR85LuZoQ4E49U0LrAIGwrbY4%2F1KqX9NiU8qtg0rqZ94TMNZs7Qfb%2FYqt0auNR%2F2stTGLhcTqpAPK8LRThryX%2FG0a9whsQwSpUxkq4mCNHXAqA5S1rpf%2FATEMRL4SaLFNHBoO1OIPvuM0V0%2Bz2g6zpEecKp%2FLliajoUMromjnuDB534cF3AbRDCRlLvomMBmI8gipbsgMxAs4wxsfHIsnPHDJfR%2FBdGANQKEblFV6MZHOpMpbovGZkRAxMP2nQ6WL6wG5F2bEmuFZi3esebow1vLp%2BRexOmWNX3SA%2BuWdUth2WW1qVxaY6OQsikPbsZtF3i1cl9bE%2B3WF0kcRrvnynOzHpCT8IHufl7c3v9wqZS7AzGr9LCFsjN%2B7sIRDXCK3hrZUQwr%2FX9AKRaBx8shJzC3rw%2FgW%2B%2BNFxFJFyS9s0O9%2BxZ0FByGfDU5xMS2eSae7SsqxbwUB%2F%2FBdF8Z3jmA%2Bn%2B864oY5u%2FoCrlkQRNflhXBme27ZttCF0IcfBc4nhv4TdsQMJCI38kGOqUB9YM7WnRzWSy7n4mAg5Q6dKbU6ZL1xiYNkJzMUFWgZytAzuGTOnQfb9a0Xec%2BLRnF6EAUVXtfHCwvCog6d97IDEtmZe2g05Vp1RIM9Tgh9TLSvyMIBGvZGFvNhwtQJvK0LKf01SKD4vN1enbdUcS2m3%2BscB5WJeorrH0NcKOqYYaWlyVNJohyxClL3guZe7vKygNli7lvsIM17erZbV1dNqt3O3uN&X-Amz-Signature=45eca6dcb461cc270d2b6770bdeeaf8d6ef72ba284dd500416a4843852b54084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

