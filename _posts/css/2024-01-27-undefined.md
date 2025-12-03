---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF75W6ZE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEwD7NsBW85l40DTFiXxo7kIQjHFZ8Ottsyb7I7OLtB7AiEAg49LWmRgRLYe1OKLBa1A88kw9%2BKyz%2FWqwxEpmy%2BW9Gwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEwBrKmYq1JFI1SKSCrcA8tmdnHWpOovfl8zPKXklTY00WrizN7AWAffmI0mPE08WARnOorxtnR71szrLFUOTwwLnpQvSg9UOOcl0mTafX055Gn%2B6ht%2BGEqAx01WSJC5zDbQC2Jjo%2Fj%2B0OI%2BEpvAjc2UhYExyF4sfaikEQZU%2FNMwbqKZ6Ufj3SiMIzH0MbboLGG0vaA0GWpf9y4nvgpv9jhd3Do5YCaonSp8jeFK4IkS%2B%2F5JwtCSLFRki24L4p8NEEEWEe%2FO%2Bpus%2BkJGMG6HEWyF4YTXynbPNe%2FwSRA4VuSrsJZSFoxnLMewfMQqoHTNmG1n86BInTEG3YS%2FxLVkH1nka2Ezg34zLalNcb7vbfJz197gxUg2y3JZgXIX5oADE3wdpCW0VFt%2BoF58ZJEFrIsKH4Bde0fdSv2GX%2BzYSfrMU0SVrGdsFk9Hc0IzWNtG44acaIJ0OdLvnQvzpxJeyUtwRKW8lg3IvlmDYMGXz87r58193ejskTeAP6Fu30mC3UoPtDTgu8C60ElFIbjSk1IS3yZXYfoZgXawPr7miZyib2NkPFOpei2X%2FpPYhMAaSExeq1z%2FayMgrzQQkhxC%2FHwm9K3nC6HQkfRxkCx8AC1qOy7F1D2b%2BAiXztUp9RSMRfSGt2KqaN52701HMLrNwMkGOqUBAa9qUE2xPTx3MxY838pvGVjbg%2FIzs9gC7a%2FLBkCu4KtlKZT2o0ArygBXgxCzr2ZvAK1Hjw%2BjqjNEAwOYgABkiuDCyJHe%2FBdkm1DQT4ZiqADa9XC%2FE4jId%2Byx0HyTzRNjWIWKIS%2FGMZbNmh41bDCJwUXMWrtnuK3C1RoXZpGyKnLMQUUaYm%2FzD4gKyw3PPEqEPT1NzEkHD58RfPhxF62vOaq%2F9Cib&X-Amz-Signature=99a1e2a4e9ca629c4dff12fc5bd48b6ca70caad2a701a2d3e950524f46d84c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF75W6ZE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T121104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEwD7NsBW85l40DTFiXxo7kIQjHFZ8Ottsyb7I7OLtB7AiEAg49LWmRgRLYe1OKLBa1A88kw9%2BKyz%2FWqwxEpmy%2BW9Gwq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEwBrKmYq1JFI1SKSCrcA8tmdnHWpOovfl8zPKXklTY00WrizN7AWAffmI0mPE08WARnOorxtnR71szrLFUOTwwLnpQvSg9UOOcl0mTafX055Gn%2B6ht%2BGEqAx01WSJC5zDbQC2Jjo%2Fj%2B0OI%2BEpvAjc2UhYExyF4sfaikEQZU%2FNMwbqKZ6Ufj3SiMIzH0MbboLGG0vaA0GWpf9y4nvgpv9jhd3Do5YCaonSp8jeFK4IkS%2B%2F5JwtCSLFRki24L4p8NEEEWEe%2FO%2Bpus%2BkJGMG6HEWyF4YTXynbPNe%2FwSRA4VuSrsJZSFoxnLMewfMQqoHTNmG1n86BInTEG3YS%2FxLVkH1nka2Ezg34zLalNcb7vbfJz197gxUg2y3JZgXIX5oADE3wdpCW0VFt%2BoF58ZJEFrIsKH4Bde0fdSv2GX%2BzYSfrMU0SVrGdsFk9Hc0IzWNtG44acaIJ0OdLvnQvzpxJeyUtwRKW8lg3IvlmDYMGXz87r58193ejskTeAP6Fu30mC3UoPtDTgu8C60ElFIbjSk1IS3yZXYfoZgXawPr7miZyib2NkPFOpei2X%2FpPYhMAaSExeq1z%2FayMgrzQQkhxC%2FHwm9K3nC6HQkfRxkCx8AC1qOy7F1D2b%2BAiXztUp9RSMRfSGt2KqaN52701HMLrNwMkGOqUBAa9qUE2xPTx3MxY838pvGVjbg%2FIzs9gC7a%2FLBkCu4KtlKZT2o0ArygBXgxCzr2ZvAK1Hjw%2BjqjNEAwOYgABkiuDCyJHe%2FBdkm1DQT4ZiqADa9XC%2FE4jId%2Byx0HyTzRNjWIWKIS%2FGMZbNmh41bDCJwUXMWrtnuK3C1RoXZpGyKnLMQUUaYm%2FzD4gKyw3PPEqEPT1NzEkHD58RfPhxF62vOaq%2F9Cib&X-Amz-Signature=ea4fce2f425201f08d56cefc1c9ca85e56b0f466ee5c7027955f306746f48579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

