---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC3SQ4O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXPTfjnOxggGCi5wfcaEmzCyd5B87kn8y9ixx7uLpjgIhAL%2Fvvt4JJXgWM8AmkiHtksfyvQojeIceUCrgrpCqO3Y7KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbtHaEb5DNuf26%2F%2FUq3ANLT4G14BvyLdXsJRU02eOIl4D8TgvjyNbpfAs5PSrcrp33rEhXhRz0CnLC%2B5qDNCiZYIyu%2Fh46chNLsbshs9gdAFR42qoGi9tGPeJFbj35T1S5MorSP2Xdc8pYNGQNDiT2PNq9dnH%2FNQa9Qo%2Be87S3WBWbqUxfOG5N41ykhBm4Fqe9dQ5KLROFKy9lYxzrmJgULjD4V2yMTi5bzbE1EilqTBjjdPF6gnEZ0pc5GzaUVIrX7EGj%2F2yYokJOteeqGSAx6854qr5jJKWgPsQvFygrVrYGmpJCCcc%2BckVWzNvG1PoQysuR4VcDKNVqcpiPVZ6HpyE%2B3L3xfq9Yjteh%2FAOq4jdRe%2Bk7Gzjm3empNr1woEPOIw4h6lLanund2tFeGmEuXja9%2Bj%2FKUVkGi6phMWU5uqSJ%2FgBJyv0WT9bePzjKPFDPA%2BmUcac%2Bl%2BY4BbLe%2F3MfuY7Ex7Iy%2F0WiYTESqUI3oVpXV30pVmzxaYsdM3mj3WDSJlUBEJByAFd8MvybImC28zyqBbwClwW6QdYxIzOAZ0x67cVqo6OwOeThjJJ23bPTtHLVeAKwDiyJODBYM6KzddDHprL2Z2d34yOGD8Jc4YiKJnLxvlTvk7qi80KeHEx5ATEmslgbzjKCFzDM5dvJBjqkAXgysbUZ1p3fHSC611SXMkd7rk9HFtFeQWiY%2F81go828DUiDScQE9Gmv2QY%2FlIxLz8tjyqctqMC%2Bf2K0lyo42m%2BeREywDVeEgBPA4tBo%2F6TG8yRktUrU5Zr5k%2FKGrml6%2BQ7Iz16HxVpinpGlpRYpVssvrcuwf8dzirqLG8hNbvaFox1O0ET8Ru7MEMiYFeNHVU%2F1EdVmK7iFvuiHev%2F%2FZW4601HN&X-Amz-Signature=cc99a403f9f26e2e80f0ec28e51f9d8b18c1e2614744a163c2693c6642989c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AC3SQ4O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgXPTfjnOxggGCi5wfcaEmzCyd5B87kn8y9ixx7uLpjgIhAL%2Fvvt4JJXgWM8AmkiHtksfyvQojeIceUCrgrpCqO3Y7KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbtHaEb5DNuf26%2F%2FUq3ANLT4G14BvyLdXsJRU02eOIl4D8TgvjyNbpfAs5PSrcrp33rEhXhRz0CnLC%2B5qDNCiZYIyu%2Fh46chNLsbshs9gdAFR42qoGi9tGPeJFbj35T1S5MorSP2Xdc8pYNGQNDiT2PNq9dnH%2FNQa9Qo%2Be87S3WBWbqUxfOG5N41ykhBm4Fqe9dQ5KLROFKy9lYxzrmJgULjD4V2yMTi5bzbE1EilqTBjjdPF6gnEZ0pc5GzaUVIrX7EGj%2F2yYokJOteeqGSAx6854qr5jJKWgPsQvFygrVrYGmpJCCcc%2BckVWzNvG1PoQysuR4VcDKNVqcpiPVZ6HpyE%2B3L3xfq9Yjteh%2FAOq4jdRe%2Bk7Gzjm3empNr1woEPOIw4h6lLanund2tFeGmEuXja9%2Bj%2FKUVkGi6phMWU5uqSJ%2FgBJyv0WT9bePzjKPFDPA%2BmUcac%2Bl%2BY4BbLe%2F3MfuY7Ex7Iy%2F0WiYTESqUI3oVpXV30pVmzxaYsdM3mj3WDSJlUBEJByAFd8MvybImC28zyqBbwClwW6QdYxIzOAZ0x67cVqo6OwOeThjJJ23bPTtHLVeAKwDiyJODBYM6KzddDHprL2Z2d34yOGD8Jc4YiKJnLxvlTvk7qi80KeHEx5ATEmslgbzjKCFzDM5dvJBjqkAXgysbUZ1p3fHSC611SXMkd7rk9HFtFeQWiY%2F81go828DUiDScQE9Gmv2QY%2FlIxLz8tjyqctqMC%2Bf2K0lyo42m%2BeREywDVeEgBPA4tBo%2F6TG8yRktUrU5Zr5k%2FKGrml6%2BQ7Iz16HxVpinpGlpRYpVssvrcuwf8dzirqLG8hNbvaFox1O0ET8Ru7MEMiYFeNHVU%2F1EdVmK7iFvuiHev%2F%2FZW4601HN&X-Amz-Signature=e60f13f741f87e39d645539319075cb81e7d44d055ba2fded057d61e74ce892f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

