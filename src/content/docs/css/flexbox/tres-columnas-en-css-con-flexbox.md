---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNNBHKH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLTY7vj91QKcP%2FJoyLeJxXHT6sMCI54Y7w27Ui3kR8tAiEAi7mJmoU9BPvish13L9omNl1qsaFGPXAOhV0sipephF4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOErGdoUeJYA0GKMQSrcAzK%2Bxg8FuWNFnGIzPL6YVwSLzcG9mPYo2lXk6IRHp6nqE%2FhIJYJUv8VhP9GUkZilA9926ysZL6DWZDTeiM5LmaeJDQ6Wy0MVgFHkwJiHVPUfgl8Vuzz9t320TjmbGTe3xMGHmmPbkVYujDUJ7GS1%2BR30GhjgMm0wr4vsJW3cJnh%2F1q1oyT6aKaGmekklLOPyofL4QZRPD8R%2BciNnBDliLR%2B%2FvuiskzDpog9bL0YmZNQiKGY3nGkrGo%2BimHkhtC3XNzcShxp5Ftw4fCCXN%2Bc0nW0IisJGPcim2cHriNQ1AtxkOw%2FOmtU7DqLvRf8g%2FdffOBjCOdlKXizTKOx1IWqk8Cy%2BRkjwDpnqwqT86KQw4GuNI%2BrwVBIyPorwn8thfdiiT8UuispbETWpj%2BEHdRa2X5vdF9hIvunI3KI0nco8W34%2FtUXax4s%2FfoaU2dapJGWuAduiJP%2BK%2FfNANS%2BQUbr%2FJf8bOxjejQTQ3jBMyAD2Iw7X59vSV%2BECf6HQZjiQyY9nomlpD10IgaQZ6xbIdDBWCxr6QxzTNI8LSURroM5bdKjYTQKAXPBpjXCJ0%2FMfCKYsCVOCg1gZZQBp2qKT6Yb8vZ9J9EpjuwvXXOnPZeI%2FHg83HE%2FkLnwsO1Tv0y38MMOh2MkGOqUB7k7zxrGPyNvvLoZgxXPybKbHMJMiUcNQ0SBuoDZUDlAzAojsTy%2F0DHoOTeO5dGQvvguJeo4vh9l7bpn7EM1Hw6CXLoALcLduUKAEghdo9YaNjJCiAdUHgpnv%2B13hS6zXLLDPPaLk%2FhCcI1OGQY8YkNnRpDEd76WKujYLGQ4G4utd0m5qfGGiE6P5%2FpItTfo4zcgisxSFE9PQwEJy7N%2FrHe8tftwE&X-Amz-Signature=73d244c21eb90493a9c453957068e031380974618473a6f42d8992e286762154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHNNBHKH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLTY7vj91QKcP%2FJoyLeJxXHT6sMCI54Y7w27Ui3kR8tAiEAi7mJmoU9BPvish13L9omNl1qsaFGPXAOhV0sipephF4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOErGdoUeJYA0GKMQSrcAzK%2Bxg8FuWNFnGIzPL6YVwSLzcG9mPYo2lXk6IRHp6nqE%2FhIJYJUv8VhP9GUkZilA9926ysZL6DWZDTeiM5LmaeJDQ6Wy0MVgFHkwJiHVPUfgl8Vuzz9t320TjmbGTe3xMGHmmPbkVYujDUJ7GS1%2BR30GhjgMm0wr4vsJW3cJnh%2F1q1oyT6aKaGmekklLOPyofL4QZRPD8R%2BciNnBDliLR%2B%2FvuiskzDpog9bL0YmZNQiKGY3nGkrGo%2BimHkhtC3XNzcShxp5Ftw4fCCXN%2Bc0nW0IisJGPcim2cHriNQ1AtxkOw%2FOmtU7DqLvRf8g%2FdffOBjCOdlKXizTKOx1IWqk8Cy%2BRkjwDpnqwqT86KQw4GuNI%2BrwVBIyPorwn8thfdiiT8UuispbETWpj%2BEHdRa2X5vdF9hIvunI3KI0nco8W34%2FtUXax4s%2FfoaU2dapJGWuAduiJP%2BK%2FfNANS%2BQUbr%2FJf8bOxjejQTQ3jBMyAD2Iw7X59vSV%2BECf6HQZjiQyY9nomlpD10IgaQZ6xbIdDBWCxr6QxzTNI8LSURroM5bdKjYTQKAXPBpjXCJ0%2FMfCKYsCVOCg1gZZQBp2qKT6Yb8vZ9J9EpjuwvXXOnPZeI%2FHg83HE%2FkLnwsO1Tv0y38MMOh2MkGOqUB7k7zxrGPyNvvLoZgxXPybKbHMJMiUcNQ0SBuoDZUDlAzAojsTy%2F0DHoOTeO5dGQvvguJeo4vh9l7bpn7EM1Hw6CXLoALcLduUKAEghdo9YaNjJCiAdUHgpnv%2B13hS6zXLLDPPaLk%2FhCcI1OGQY8YkNnRpDEd76WKujYLGQ4G4utd0m5qfGGiE6P5%2FpItTfo4zcgisxSFE9PQwEJy7N%2FrHe8tftwE&X-Amz-Signature=6c745ba09e2e1031715eee66a24077c7fb211429577f9e80c2edd8ee4fc25af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

