---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5P7JQEY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiWsr9tfRBWXz1s%2FKozC1Iw343%2FAc7S85Vbi417IwEoAiBG2ul5wirnBmcBp9S0epKgKaX21Fe9FJ4F2vQ8KbETfyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMblT6%2Bn93Cfvui44VKtwDoZg1juK1RtLP8aHDAQEtf21qhVB4ivDd5UYlXonCLqT8Z8IIr%2F1i%2BjpFrs5uLGsgN3EUqnO752NLgN5T7IrdWRfgKpYnaFrpv9VR9q3OAb2Eh1%2FWz7lbkNOXns8CeSN6jV4t9fbmPXEjdr0MfrBK3dacXo1vwzm7jVhtELYL9vG4KNODV9mrVzwu2aVetW%2FebAaIloy5pR%2BqLBkZA27N9XeulnxDNgO%2BhQdN7KzPHFUxkcJyHfgXgduZqdepgCRua%2Bs0DJORkmj3IGjf0PBDNl5oH1O%2BehXfXuZYTFc62ZnuLnLx9yvOrSftVMaWczn7rrApzDo9H6H%2B4604kXa928Unk1SztP25LWSqC484SWtRwtBTpNUr3Kk2qdL87pWIwPg4dMoHnwE4qKpkWTcHGtcWxeLkZ955URBioWRM7WVudv8TgRBPk6dZq1WK6BWQ3e6OqDPvOwnPklx0YZ7A%2FbupDd65w%2BQC7p75Ru4jX%2FbO6%2FCovIngHXikGVDfCPvsBch1Yw%2BEaKAB1XgPdFGydfTlmLNFhVGUMjjTyOwvBhAZL1z8ayla8FWJZxS%2FP%2FrjJ%2BX3xOqg0POZWiix2ut%2BBv%2FqbHYMBD4XvV%2F1LmPvwIWRklssM3tI6eTwGIsw2cneyQY6pgG6cy8EoQoYj2q2N1OwDfRkHVLsz6L4f4Al6i%2FpM1cPsWDVExNmkvU6D8k7rDMC%2BCB0eiWY47nGV%2F2Ok7%2FbGC6HEdTn0pQ6tohx%2BvEpCKJC9x4vpZsTZAq01hu82MvGz3A9bsh5yFiJz1%2FhyiamhGvcO3DyFa5iVqdI5kodmqRQDSKuDsW%2BpCLOLYLgN%2B%2F%2B35qPtoqAjSQ8RSY0kqkAQUyHGH8alDUm&X-Amz-Signature=e6fddec03bf53e13e8a15b96d4f780573990404fbd170ae5a9ad1781accdd6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5P7JQEY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiWsr9tfRBWXz1s%2FKozC1Iw343%2FAc7S85Vbi417IwEoAiBG2ul5wirnBmcBp9S0epKgKaX21Fe9FJ4F2vQ8KbETfyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMblT6%2Bn93Cfvui44VKtwDoZg1juK1RtLP8aHDAQEtf21qhVB4ivDd5UYlXonCLqT8Z8IIr%2F1i%2BjpFrs5uLGsgN3EUqnO752NLgN5T7IrdWRfgKpYnaFrpv9VR9q3OAb2Eh1%2FWz7lbkNOXns8CeSN6jV4t9fbmPXEjdr0MfrBK3dacXo1vwzm7jVhtELYL9vG4KNODV9mrVzwu2aVetW%2FebAaIloy5pR%2BqLBkZA27N9XeulnxDNgO%2BhQdN7KzPHFUxkcJyHfgXgduZqdepgCRua%2Bs0DJORkmj3IGjf0PBDNl5oH1O%2BehXfXuZYTFc62ZnuLnLx9yvOrSftVMaWczn7rrApzDo9H6H%2B4604kXa928Unk1SztP25LWSqC484SWtRwtBTpNUr3Kk2qdL87pWIwPg4dMoHnwE4qKpkWTcHGtcWxeLkZ955URBioWRM7WVudv8TgRBPk6dZq1WK6BWQ3e6OqDPvOwnPklx0YZ7A%2FbupDd65w%2BQC7p75Ru4jX%2FbO6%2FCovIngHXikGVDfCPvsBch1Yw%2BEaKAB1XgPdFGydfTlmLNFhVGUMjjTyOwvBhAZL1z8ayla8FWJZxS%2FP%2FrjJ%2BX3xOqg0POZWiix2ut%2BBv%2FqbHYMBD4XvV%2F1LmPvwIWRklssM3tI6eTwGIsw2cneyQY6pgG6cy8EoQoYj2q2N1OwDfRkHVLsz6L4f4Al6i%2FpM1cPsWDVExNmkvU6D8k7rDMC%2BCB0eiWY47nGV%2F2Ok7%2FbGC6HEdTn0pQ6tohx%2BvEpCKJC9x4vpZsTZAq01hu82MvGz3A9bsh5yFiJz1%2FhyiamhGvcO3DyFa5iVqdI5kodmqRQDSKuDsW%2BpCLOLYLgN%2B%2F%2B35qPtoqAjSQ8RSY0kqkAQUyHGH8alDUm&X-Amz-Signature=90420d3c3729117b31e178bbd0d31c44b3f554e770f6e31c984a3865430b8c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

