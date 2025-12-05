---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSABVAI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUdvY1S7E4nHJyOc1szFmpyNu%2Bnxd6sWIjw45M3J8M2gIhAN6gOW60tWcF%2FhZkJu5KWNX5JflOJkDsrsW6JWfaW9ZhKv8DCFUQABoMNjM3NDIzMTgzODA1Igxu99AWXHilgkyrZUgq3AMTatRota8hFX7SlrE2FZbCTPhtIQ99UrvitpAVzKFLAk81wo0Y8U%2Bt1v%2BinmpjjKthUBAUypDiAFYE5mMbyIx1qjPMrXeulHYMrQ2LqkP%2B4POu6KrOUPiqTqXPYN%2B0szL2%2FbbvDhIY%2FiAMZXaEZyrJe1E1WRoJzuBmV5%2FsTbMC%2FaPFXwrM4Jt65e%2FSZEY35e%2FvPuQAvyAZeBpYSlM19%2Fnz2bQ6Tjl3bGmT%2FmgIAMcv6dszanG7Yv1iuFaaHCwOMXJvyjjGnhzPnTtkSA7Xv0XLJXb1e%2Fc35P%2BMiWSUDLvgAfurwOyQLbyAy%2FYJBaYhblH9COT14a3fRY6UVdklE%2BAhs0Is5W7OGjRioFlAuyoI256%2BuErtoM6mWkK%2FTiRIzn8TnWf%2Brrmm5GBqF93EIJxO34IfKbqpWN8FtJRjmGskRV4u6j5g38aWI2FOxrAdSWkxzwc8XC0Y0TlIVmgUKyoeAOXQdD9vbwDH4Gp%2BO%2F%2BP1pZpVro%2FPwI1YNFhDAyi%2BrqEQbg3gHiJ8HXgYYW2MPCiZN441Z4Il8LcuFArqvGz5FNscXKcVogH8dyLkT%2Bz45PQ1kvkW9LNjrzTQTK9sVJ6QY5BEATnY0tnchorhRVTKUOE4jRIrS%2Fyqf7hRDDipsnJBjqkAVCTSte7oUPm5e5SxlRJgNfWjYx50nrbXL%2FVvZ3KhyOnMvEWxryUW6iw95Da6rGD3NdwtAUdkk5qKjNjXI8xhuj7BztD%2FjA30XLvq0YsauqIJbyoNym2W%2BjVtzs9i9kyN%2BP7yuWpyPgb3%2B3svDp4iGMjsA3O%2Bm1ELUK4DPSrvJJMTNEWaEvGBGqNmZ1IS%2Blb1Te3QRnnFS6DwIWsTrowb80Ro3k5&X-Amz-Signature=11baf5f564bc73d7c6767ded45fbf16e1b6f564e34ef232abae61a113ce611fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSABVAI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUdvY1S7E4nHJyOc1szFmpyNu%2Bnxd6sWIjw45M3J8M2gIhAN6gOW60tWcF%2FhZkJu5KWNX5JflOJkDsrsW6JWfaW9ZhKv8DCFUQABoMNjM3NDIzMTgzODA1Igxu99AWXHilgkyrZUgq3AMTatRota8hFX7SlrE2FZbCTPhtIQ99UrvitpAVzKFLAk81wo0Y8U%2Bt1v%2BinmpjjKthUBAUypDiAFYE5mMbyIx1qjPMrXeulHYMrQ2LqkP%2B4POu6KrOUPiqTqXPYN%2B0szL2%2FbbvDhIY%2FiAMZXaEZyrJe1E1WRoJzuBmV5%2FsTbMC%2FaPFXwrM4Jt65e%2FSZEY35e%2FvPuQAvyAZeBpYSlM19%2Fnz2bQ6Tjl3bGmT%2FmgIAMcv6dszanG7Yv1iuFaaHCwOMXJvyjjGnhzPnTtkSA7Xv0XLJXb1e%2Fc35P%2BMiWSUDLvgAfurwOyQLbyAy%2FYJBaYhblH9COT14a3fRY6UVdklE%2BAhs0Is5W7OGjRioFlAuyoI256%2BuErtoM6mWkK%2FTiRIzn8TnWf%2Brrmm5GBqF93EIJxO34IfKbqpWN8FtJRjmGskRV4u6j5g38aWI2FOxrAdSWkxzwc8XC0Y0TlIVmgUKyoeAOXQdD9vbwDH4Gp%2BO%2F%2BP1pZpVro%2FPwI1YNFhDAyi%2BrqEQbg3gHiJ8HXgYYW2MPCiZN441Z4Il8LcuFArqvGz5FNscXKcVogH8dyLkT%2Bz45PQ1kvkW9LNjrzTQTK9sVJ6QY5BEATnY0tnchorhRVTKUOE4jRIrS%2Fyqf7hRDDipsnJBjqkAVCTSte7oUPm5e5SxlRJgNfWjYx50nrbXL%2FVvZ3KhyOnMvEWxryUW6iw95Da6rGD3NdwtAUdkk5qKjNjXI8xhuj7BztD%2FjA30XLvq0YsauqIJbyoNym2W%2BjVtzs9i9kyN%2BP7yuWpyPgb3%2B3svDp4iGMjsA3O%2Bm1ELUK4DPSrvJJMTNEWaEvGBGqNmZ1IS%2Blb1Te3QRnnFS6DwIWsTrowb80Ro3k5&X-Amz-Signature=22ad68f996cc0b7050b2b25fd9a41efc5a93d6da706d7531d3df7e385c9e369c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

