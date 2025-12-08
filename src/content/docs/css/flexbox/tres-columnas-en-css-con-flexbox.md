---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOWM5IA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClzE6CTjlbcdZUwIWHuvg4Wvfb8xeQsVkDfEXrbEym%2FAiAibJgyEqkkey2Cc9F4K8eMBjj0b9fDnJ%2BQzh31XscjZSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2Bk1hzij1XXLdHPdKtwDHME0M0eQ87Tf25zLMuu0IAp6j7LrO1p3dgwn%2BUtrA01sj%2BA8iuVL%2F2FleAKIOujAUnDmTM96IhQzin2waFExryqXLZbYGpkaTB21pAWZ6e1Ghk3ql5P%2BZDn%2FuqX3z40zOXCWIC2ywXRiYTnHi%2FKYrDrXHz39bMV1F%2F07c8%2BJhfPg57bkXvpyF7kiP2jSc%2Bx6WATlHj%2BUfkmZJvMVPyZRUs0ji%2FTkvT3USD1ImIDvSQUx94agx%2FBfw2W0B5eDTF0c%2BS3l1p0qC5pEpMfAGp9BoQKnBxwS6mfzjimplxnaZQm0c2j%2FJOtCdr2sSttWjzmCtotxv7TVUEyDJVixBfjZril48ig2q87sDxvNHyb%2Fu2YBrIV0dJis5BWhP4AO2Hwpc8VPd%2Bn7P2H9x4wQtCnyqcAeLmiIyfYAtG9DhXCAr2BcJjdu1oZNCA%2FQHrGaSDe9F3xeUlLGQ8fPRpnxpWadYmZnaQLBK6R%2BEl3ay0nNjxPn%2FaP1n24SRA88S01Z6sgA0msjE3JToYGAOmo2hYj%2Fo3qpIm%2BQjT8BYjx%2BYE5W%2F%2FQCnr3T2yPK54heVnYPxA5eOTDEPe9fHnhycLV%2Fkvp0%2BdXgSnr7a4wrbAfhrR15ySkB5YDW9mdvB9o0B84w8tDZyQY6pgEOHEeWhldX9xVkL%2FJFI%2BOWuqdsAjP3MUxw3mC6PVTNrzjFnHSJ1OeUb1qmkBCe9nVE0mgwTB60jw8tpuRN37NBvlSdEGM3eW04G6tGRvDEddgSh8GzjVFi2Ojatpq2AuV63CJRnP31W%2FX4ure3xij2MMoIcT3DjLnwqru5QcJng9hywC9H87IlkY%2BW55RRmJySGlH%2F%2FJI6mucHZZsimglNQtjrErK%2B&X-Amz-Signature=abb13d0151c5d04fbc84e88979731a67fd30678db05ce628d4b169f68b6f3b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOWM5IA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClzE6CTjlbcdZUwIWHuvg4Wvfb8xeQsVkDfEXrbEym%2FAiAibJgyEqkkey2Cc9F4K8eMBjj0b9fDnJ%2BQzh31XscjZSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2Bk1hzij1XXLdHPdKtwDHME0M0eQ87Tf25zLMuu0IAp6j7LrO1p3dgwn%2BUtrA01sj%2BA8iuVL%2F2FleAKIOujAUnDmTM96IhQzin2waFExryqXLZbYGpkaTB21pAWZ6e1Ghk3ql5P%2BZDn%2FuqX3z40zOXCWIC2ywXRiYTnHi%2FKYrDrXHz39bMV1F%2F07c8%2BJhfPg57bkXvpyF7kiP2jSc%2Bx6WATlHj%2BUfkmZJvMVPyZRUs0ji%2FTkvT3USD1ImIDvSQUx94agx%2FBfw2W0B5eDTF0c%2BS3l1p0qC5pEpMfAGp9BoQKnBxwS6mfzjimplxnaZQm0c2j%2FJOtCdr2sSttWjzmCtotxv7TVUEyDJVixBfjZril48ig2q87sDxvNHyb%2Fu2YBrIV0dJis5BWhP4AO2Hwpc8VPd%2Bn7P2H9x4wQtCnyqcAeLmiIyfYAtG9DhXCAr2BcJjdu1oZNCA%2FQHrGaSDe9F3xeUlLGQ8fPRpnxpWadYmZnaQLBK6R%2BEl3ay0nNjxPn%2FaP1n24SRA88S01Z6sgA0msjE3JToYGAOmo2hYj%2Fo3qpIm%2BQjT8BYjx%2BYE5W%2F%2FQCnr3T2yPK54heVnYPxA5eOTDEPe9fHnhycLV%2Fkvp0%2BdXgSnr7a4wrbAfhrR15ySkB5YDW9mdvB9o0B84w8tDZyQY6pgEOHEeWhldX9xVkL%2FJFI%2BOWuqdsAjP3MUxw3mC6PVTNrzjFnHSJ1OeUb1qmkBCe9nVE0mgwTB60jw8tpuRN37NBvlSdEGM3eW04G6tGRvDEddgSh8GzjVFi2Ojatpq2AuV63CJRnP31W%2FX4ure3xij2MMoIcT3DjLnwqru5QcJng9hywC9H87IlkY%2BW55RRmJySGlH%2F%2FJI6mucHZZsimglNQtjrErK%2B&X-Amz-Signature=5cef943ac23e23656fce04f45a15e272874a1f7673904a7270a6dd4db4f2df1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

