---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV5PELX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA04DqNM8uV9yPf4gyVR9p%2F9FeByCATNIlfLgQaZB8XAiBjFvrAU02r2MSeonHVyHu5zWhZ282gq74ARxQH9ZOwnCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM5jdEQTa%2BslyVsak%2FKtwDqrrEbXpvMIwqmStckLbuQCneFp5XLARvF7WcFH1XVtpPzzTJB3LfhSxmb6lZkRVU4cnsQABijZSkRmf00Ihl8iUfE6rAwXk6ccRJudd21yrZNxhHnfFuKnPnIpxBl8hwWtR6D3xZXVEaPCO7RN0%2BqJwz4Nal6iSYat8moUvX2bGKnIWrsywuFjnIH8TLzFuvGOvSPpHUMoSWHrT4nRItAhkA18idEWJV2vuiBMx49MYEpT1%2FdD5Kd7ZBQ87kG5XWQ%2BbZH0GkSdV3az4jkGiezzIRRNIz2CnKXDrb1BIceoeetXaDNphyEb65pQO6tQd3htwQUBMLmAfR5XDs9B%2B%2FmUdUthT1CvQT2%2FgTCNt%2FR4ggxoVnykQ0OUbuImM4fpb5FRZgQkmyvxIShVn1H4vAIVJjiSb1b%2BE49CQ5MIw7A1emW%2Bk5vjuQ%2BaWsBXd3emi6muiX%2BqJ5N6XosDCD7dSq4z75kuUlVaMAdpquaLQ2gvVgSFNeu%2FjgFox8FWuZQ2bLvPvrUp0sSLEHNpCGHDJBKMmK9xAUgkkjUMCRX%2FxUnNszaHc6eIGE9sdXsOo4RlYQo6%2FPoQMwYcae3plhhE11diUFT6SA%2FJxEs4ye1uQNbBxUYbT9GJwsj9nJ3TUwldzGyQY6pgEQDQaBplPixd8ggWP7K0ps8yfGfSkUU5novqjUU48cSIuuFuea3xQHsasQYqDIqHtr48JkxWwqcTCGTNxD1GTApitOvLgox4fKjU5m2vPwwc4%2BlBwCR8nguieCY0iBzQCxYt1NwNGq8gVUFxfT34HGtGsOdDnVzcY8Kyo9vcjCXFf6ssGxJ4O2a4fhQfxOj53L8PY3fcR3eaKk5ZaTxR7m3XwUlnRY&X-Amz-Signature=d1e876adc142f8d3843ce62b2d90be2d052262fb59de097b3bcf752244d91637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WV5PELX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA04DqNM8uV9yPf4gyVR9p%2F9FeByCATNIlfLgQaZB8XAiBjFvrAU02r2MSeonHVyHu5zWhZ282gq74ARxQH9ZOwnCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIM5jdEQTa%2BslyVsak%2FKtwDqrrEbXpvMIwqmStckLbuQCneFp5XLARvF7WcFH1XVtpPzzTJB3LfhSxmb6lZkRVU4cnsQABijZSkRmf00Ihl8iUfE6rAwXk6ccRJudd21yrZNxhHnfFuKnPnIpxBl8hwWtR6D3xZXVEaPCO7RN0%2BqJwz4Nal6iSYat8moUvX2bGKnIWrsywuFjnIH8TLzFuvGOvSPpHUMoSWHrT4nRItAhkA18idEWJV2vuiBMx49MYEpT1%2FdD5Kd7ZBQ87kG5XWQ%2BbZH0GkSdV3az4jkGiezzIRRNIz2CnKXDrb1BIceoeetXaDNphyEb65pQO6tQd3htwQUBMLmAfR5XDs9B%2B%2FmUdUthT1CvQT2%2FgTCNt%2FR4ggxoVnykQ0OUbuImM4fpb5FRZgQkmyvxIShVn1H4vAIVJjiSb1b%2BE49CQ5MIw7A1emW%2Bk5vjuQ%2BaWsBXd3emi6muiX%2BqJ5N6XosDCD7dSq4z75kuUlVaMAdpquaLQ2gvVgSFNeu%2FjgFox8FWuZQ2bLvPvrUp0sSLEHNpCGHDJBKMmK9xAUgkkjUMCRX%2FxUnNszaHc6eIGE9sdXsOo4RlYQo6%2FPoQMwYcae3plhhE11diUFT6SA%2FJxEs4ye1uQNbBxUYbT9GJwsj9nJ3TUwldzGyQY6pgEQDQaBplPixd8ggWP7K0ps8yfGfSkUU5novqjUU48cSIuuFuea3xQHsasQYqDIqHtr48JkxWwqcTCGTNxD1GTApitOvLgox4fKjU5m2vPwwc4%2BlBwCR8nguieCY0iBzQCxYt1NwNGq8gVUFxfT34HGtGsOdDnVzcY8Kyo9vcjCXFf6ssGxJ4O2a4fhQfxOj53L8PY3fcR3eaKk5ZaTxR7m3XwUlnRY&X-Amz-Signature=a1e68a0ca46455a81c04d1898f645952fc4d5864dbcddf900fba9e526232960f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

