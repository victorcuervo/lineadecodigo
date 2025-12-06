---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZVP5FP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZWSG089HqQIBlernNhvpXAkcF1CghHsGzt6enMtJNEAiA5w99BigktCLvKNFbv7wHdx%2BoxYKXxLPYic9hlxGbZYir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMnXDBTz6gkTWW%2FbapKtwDV1hr4RYIJ4NudGpqhFVEhT4%2FY2MnbhTwzNOe6xXCU0sgt7xxb%2BMeliMKftoWcrBUrg13v7K1fN8NQH0CUKva4%2BizncTH0obhA4ye1YPcCvI1SZ1GigQxQRwAy66YohcxI1hKqY7Jm4KfxAvXu4PD6GmSf03ZPQU8xsngYqpZ%2FZJMWzNa0HL0SXPQn5k5HKc4FSOC6WBxQ26sv9j9gsrHvmTqaxdCYSJd5JHD7Oy6ZjwVCVcHKwLdiyhTe%2BNVhS3t8iQIaoVN4Tis%2F8UJJb9DNCWS8xyY8%2Bzv%2FxukiNq8UoXex5u4ivfNZaVKtlbcJWmEA2EFiKLyVXO4SjTEvIMaXTnqIO2K%2BalJuZojeaCsUdJnS1ON4qrStdxssNxCUDWP%2B77QOCp70dgU8jLJvZYI1FuZf0WbFxE2X3zh%2F1L1X7Uh%2Bu8shuCZRNEjAneUqCYtyy5eDAZf162iNH7HatBWxqTP0pmvj1dLNVx1qv23p%2B7RHhjUcGaMSRpMQ0h9qNohF%2FAiPYGbNrB7XT1Erjsc7ufyS1IMog7LjY6Nmgy8tsmEMPCIqco%2FbNepUU4dja3J3TaxFk06ZmlZTpJtUcw9sSvpW4wR1PJaPiSkymuSSIEmVDMC3OULKm3zmdIwo8XRyQY6pgEzs4LVd6WVJhXnmIsTBt%2BL0u1952MVCB5Gaa75KVM79YIRhI2LsEKZPyfR%2Bk94bSPR%2FHbV2lOCh9k4N515nF8Sy5AlnPVE7j4e%2BfS68hW2scJAV%2FxMuD%2BPoV0SopNkukywn0gT6SZZzBu4lkAytlzu3rVAuB3RJf4EyFTX0fab%2BgwfENZAugVYl948dkwKNMuaC4THPeIAbIteYYHj7vHdfo044lKi&X-Amz-Signature=ad9305c0b5ecd7b06dbae830de2f0fb5e762d7f7b0887f4f0a292c260c27618c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGZVP5FP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T215120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZWSG089HqQIBlernNhvpXAkcF1CghHsGzt6enMtJNEAiA5w99BigktCLvKNFbv7wHdx%2BoxYKXxLPYic9hlxGbZYir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMnXDBTz6gkTWW%2FbapKtwDV1hr4RYIJ4NudGpqhFVEhT4%2FY2MnbhTwzNOe6xXCU0sgt7xxb%2BMeliMKftoWcrBUrg13v7K1fN8NQH0CUKva4%2BizncTH0obhA4ye1YPcCvI1SZ1GigQxQRwAy66YohcxI1hKqY7Jm4KfxAvXu4PD6GmSf03ZPQU8xsngYqpZ%2FZJMWzNa0HL0SXPQn5k5HKc4FSOC6WBxQ26sv9j9gsrHvmTqaxdCYSJd5JHD7Oy6ZjwVCVcHKwLdiyhTe%2BNVhS3t8iQIaoVN4Tis%2F8UJJb9DNCWS8xyY8%2Bzv%2FxukiNq8UoXex5u4ivfNZaVKtlbcJWmEA2EFiKLyVXO4SjTEvIMaXTnqIO2K%2BalJuZojeaCsUdJnS1ON4qrStdxssNxCUDWP%2B77QOCp70dgU8jLJvZYI1FuZf0WbFxE2X3zh%2F1L1X7Uh%2Bu8shuCZRNEjAneUqCYtyy5eDAZf162iNH7HatBWxqTP0pmvj1dLNVx1qv23p%2B7RHhjUcGaMSRpMQ0h9qNohF%2FAiPYGbNrB7XT1Erjsc7ufyS1IMog7LjY6Nmgy8tsmEMPCIqco%2FbNepUU4dja3J3TaxFk06ZmlZTpJtUcw9sSvpW4wR1PJaPiSkymuSSIEmVDMC3OULKm3zmdIwo8XRyQY6pgEzs4LVd6WVJhXnmIsTBt%2BL0u1952MVCB5Gaa75KVM79YIRhI2LsEKZPyfR%2Bk94bSPR%2FHbV2lOCh9k4N515nF8Sy5AlnPVE7j4e%2BfS68hW2scJAV%2FxMuD%2BPoV0SopNkukywn0gT6SZZzBu4lkAytlzu3rVAuB3RJf4EyFTX0fab%2BgwfENZAugVYl948dkwKNMuaC4THPeIAbIteYYHj7vHdfo044lKi&X-Amz-Signature=889fa1bb127fd370306f6960d449948af11c4ba4d965c10af19216e8eb6b0ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

