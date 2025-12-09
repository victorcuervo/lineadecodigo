---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3JWT7E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJT68prHFMc2gd9XO%2FQW%2FE4aUZqEqObhzH0oMfbmWlMAiAq2xGEOSHXu500W1TkjRlrU8OIU7OpdD%2F3BdU8M8obsSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiE6yKXKu1PeClAgnKtwD0yrAIuHbs9Eq5Siic1H6sVhwBbyTXcVozDqu2lzm4qmcGoMSt96PlQjrzpuW%2BGRy2I3iPmOkSvs4vnTZwRHSH%2B5txtEHVqGbYdURkPuiW61z3beNUQPMZeHfEs96fQHMFRGEgmyao3vcOQ%2FEGEHVzDlPmzfCxJYfKYWss%2FH%2BWSVNBsrBaSGQ7W%2FY%2Bkj7BS2LEA%2B5i0o%2FcZocAZz3yxV7lfScr4iiB6I2wRzKqNkocUmMStOg3HXu0wrI3XLF0A5bwOCFCIEf5iljf%2B3Y5E%2FnnpkQeTTv10ssEkbm94TJpGP0cXSAV8AtBM%2B0bu%2BCh5XsiyObA3CSJFXyhJ2DoFMIrtSO4duD%2BwVQTNh1Wrvk4jgMhK%2BDZ3VsGZ4z%2B5EAeaxa8g8I5F52gbxlbXukwaAfLmra2F2Rp5bLPrFBAWQlqa9dK3ezT7hTagQ4hs%2FHvRLCaejadY9E5SdF0CpYpe%2BVp2EB8nqtagTmsMi6SU61RdILXly%2F1Uq3vz4I5G1jkQa8eQGUE%2FAyNpbdg%2F%2FB%2BK%2B%2BhYFfGTiy5Q5%2B2lRVYjjROggCwomCZ4GFirzFQcw7OcogUMyrGthyzdwjpyiSDdsUBDwzIymIUlKDfGy%2BdK%2FwamHPbGWTFuyGGVfsI8AwxMneyQY6pgFXBIoIu48BW9B2P0I%2BRbYggXGsGUFWD7gJz7hCl%2FViqPRNIS9Hwt%2F%2FdRyFtQCA%2Bw%2FpN%2FsqI3r8WnTI2funEzm3dLmn7yvHcalC0XBOnOn3WtMFwYFdBu%2FvYIBku77i5EX5FwDiG3q7GowrmMFgBFc400ldVgCULgoC8uA3Hqwz6M108AhO4Rt4qt%2FTGeTlxnPtER9L70PZN%2FTQZrOvK5rZ7icBfowF&X-Amz-Signature=6be3a2f08900faff0bcf138dd956a112bc16b65f46db2f2f5e9c90e4c4634b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3JWT7E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJT68prHFMc2gd9XO%2FQW%2FE4aUZqEqObhzH0oMfbmWlMAiAq2xGEOSHXu500W1TkjRlrU8OIU7OpdD%2F3BdU8M8obsSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiE6yKXKu1PeClAgnKtwD0yrAIuHbs9Eq5Siic1H6sVhwBbyTXcVozDqu2lzm4qmcGoMSt96PlQjrzpuW%2BGRy2I3iPmOkSvs4vnTZwRHSH%2B5txtEHVqGbYdURkPuiW61z3beNUQPMZeHfEs96fQHMFRGEgmyao3vcOQ%2FEGEHVzDlPmzfCxJYfKYWss%2FH%2BWSVNBsrBaSGQ7W%2FY%2Bkj7BS2LEA%2B5i0o%2FcZocAZz3yxV7lfScr4iiB6I2wRzKqNkocUmMStOg3HXu0wrI3XLF0A5bwOCFCIEf5iljf%2B3Y5E%2FnnpkQeTTv10ssEkbm94TJpGP0cXSAV8AtBM%2B0bu%2BCh5XsiyObA3CSJFXyhJ2DoFMIrtSO4duD%2BwVQTNh1Wrvk4jgMhK%2BDZ3VsGZ4z%2B5EAeaxa8g8I5F52gbxlbXukwaAfLmra2F2Rp5bLPrFBAWQlqa9dK3ezT7hTagQ4hs%2FHvRLCaejadY9E5SdF0CpYpe%2BVp2EB8nqtagTmsMi6SU61RdILXly%2F1Uq3vz4I5G1jkQa8eQGUE%2FAyNpbdg%2F%2FB%2BK%2B%2BhYFfGTiy5Q5%2B2lRVYjjROggCwomCZ4GFirzFQcw7OcogUMyrGthyzdwjpyiSDdsUBDwzIymIUlKDfGy%2BdK%2FwamHPbGWTFuyGGVfsI8AwxMneyQY6pgFXBIoIu48BW9B2P0I%2BRbYggXGsGUFWD7gJz7hCl%2FViqPRNIS9Hwt%2F%2FdRyFtQCA%2Bw%2FpN%2FsqI3r8WnTI2funEzm3dLmn7yvHcalC0XBOnOn3WtMFwYFdBu%2FvYIBku77i5EX5FwDiG3q7GowrmMFgBFc400ldVgCULgoC8uA3Hqwz6M108AhO4Rt4qt%2FTGeTlxnPtER9L70PZN%2FTQZrOvK5rZ7icBfowF&X-Amz-Signature=845bc76d2adee7e488f114713ac64581c068e31a383f956d58859403bda39fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

