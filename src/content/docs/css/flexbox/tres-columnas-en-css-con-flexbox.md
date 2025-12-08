---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZPC64Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwXOmKtcgIyvYq3Tj4cI0AMpiifIhl6dm86xsYX6ezxAiBtd7AWX0B7fNld%2BRw6mtK5jKQbZbjioqOSlchXZKyEOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4fvytR6o2vE5MlfKtwDPwmyzXFnNbhGjFWKBwtnXiHBtHR%2BJ4aFB93ddEZwebc0I8B2olppwcPnH%2F9mC0o%2FngwDiNGGrIX%2F7ghuUSn00RVboYpJnxQ2Co7cajtiRHJuUR0L%2Bk8UAp%2FsjBVUtXwVqtcdAOUvkA2iZ9oKNkO8JExzpO5Alg9caFf8Lq0HnJKdV48l3lZjBjXtVOnPTAnTxbu28qcP%2Bj5t3SabRWYGcqcBvPw7NMYaMII4RpIzKh0i5eHQgLPOSoUTDymeubq%2BUtHToVnLUDb9EUQ9zUF%2BPJbZxYzvm1dRK1ZpcCBBa%2FXIafD8iQ788mQhuYLOeFzBaAk6LSAb2zgEDqRyHNFqtthmJCpSM5QydaoN2oCaLjplvWStA%2FPfb5lTfWZTUOdbKyQny3HJM6JZ87GSztJn9t55g8k6O06IOoOwGisKvBrNHUdPnnV6WVLWKyACyeOa%2FEa3Co%2F6UifSVxSsUCd1tO0pKuLFy5Bj0ufDN%2FrYjWdK4jQue7hPFLABDRzX%2B5ovQeWjYVmYyMqB2uaD5lmr9PvMJQa6yKoOweAIy7%2FS%2Fp3%2BsQ6wD0dwFsjh88EssObv3GrXrpjGLi41HjAZEmIjLGcUiErNll2FFLunK3Lq0WP7Nx8%2BCkFJQ3fNiv0wuLTcyQY6pgEdDWyRUlLzqC%2FFIlW3Twjfo675hn3y%2FekWzKW9uqx3wepG8qACIv0fpHHyGBwtk4XW4uwybp10E%2FbxPFpGOZGr8i9D8039vBs%2Fxex20Gm%2FmyEG2TfiJrfj9v6CXMJSp%2FDkVFGFYbO8N9GWpUjjHKAeh5%2F0LDMg7Q6quV19rmOagOKRP6eNhcTY81SI61EXX4DUPpb3FZkpDqf9kloOjNx%2FfXJF%2FR3F&X-Amz-Signature=43887ee2eeb9199fdfb2dc42257d753a0f74f07d54073b5ef83c450879a6b0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZPC64Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwXOmKtcgIyvYq3Tj4cI0AMpiifIhl6dm86xsYX6ezxAiBtd7AWX0B7fNld%2BRw6mtK5jKQbZbjioqOSlchXZKyEOyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4fvytR6o2vE5MlfKtwDPwmyzXFnNbhGjFWKBwtnXiHBtHR%2BJ4aFB93ddEZwebc0I8B2olppwcPnH%2F9mC0o%2FngwDiNGGrIX%2F7ghuUSn00RVboYpJnxQ2Co7cajtiRHJuUR0L%2Bk8UAp%2FsjBVUtXwVqtcdAOUvkA2iZ9oKNkO8JExzpO5Alg9caFf8Lq0HnJKdV48l3lZjBjXtVOnPTAnTxbu28qcP%2Bj5t3SabRWYGcqcBvPw7NMYaMII4RpIzKh0i5eHQgLPOSoUTDymeubq%2BUtHToVnLUDb9EUQ9zUF%2BPJbZxYzvm1dRK1ZpcCBBa%2FXIafD8iQ788mQhuYLOeFzBaAk6LSAb2zgEDqRyHNFqtthmJCpSM5QydaoN2oCaLjplvWStA%2FPfb5lTfWZTUOdbKyQny3HJM6JZ87GSztJn9t55g8k6O06IOoOwGisKvBrNHUdPnnV6WVLWKyACyeOa%2FEa3Co%2F6UifSVxSsUCd1tO0pKuLFy5Bj0ufDN%2FrYjWdK4jQue7hPFLABDRzX%2B5ovQeWjYVmYyMqB2uaD5lmr9PvMJQa6yKoOweAIy7%2FS%2Fp3%2BsQ6wD0dwFsjh88EssObv3GrXrpjGLi41HjAZEmIjLGcUiErNll2FFLunK3Lq0WP7Nx8%2BCkFJQ3fNiv0wuLTcyQY6pgEdDWyRUlLzqC%2FFIlW3Twjfo675hn3y%2FekWzKW9uqx3wepG8qACIv0fpHHyGBwtk4XW4uwybp10E%2FbxPFpGOZGr8i9D8039vBs%2Fxex20Gm%2FmyEG2TfiJrfj9v6CXMJSp%2FDkVFGFYbO8N9GWpUjjHKAeh5%2F0LDMg7Q6quV19rmOagOKRP6eNhcTY81SI61EXX4DUPpb3FZkpDqf9kloOjNx%2FfXJF%2FR3F&X-Amz-Signature=33f24a7b75193f07c50a3e95598c54bbf541cd2128a437f6b1c7d7a6db3f3e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

