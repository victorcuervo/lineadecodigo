---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5BVGW7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6jieoaM13kzT%2FeryG%2F%2FhMuJjfw9Sua1AyQCj0Emf3MwIgEH%2FUfImvr%2FoGwxjIEPPJPBFYPS1E%2B8tH5s11pXnNV7wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH%2Fh7SrbRSwTXWITyrcA%2F9HL1p%2BJbv%2FFrMz3IC%2F9x69QMQVtID%2F0L8Xvz4Ud2rdLumvHCoAa2PNrNA8MRsIG7%2B11jc%2F316rCG3tgIVMe5cq2sRTyMXKTOETFZ7WSPtolgyp7ad4zDwrKcmox7k2N3AsAOtjKdWB482UGeIZT84UaRctvnyBBvBcdBV51Y1oTSVzC%2B2B5xFn5BwWKNnfsvnheh8gE16yN2jZXEG%2BM%2BmNUJTeesHjUNJiPF20DHGUub6tf5uBU1BVjHmqvLYFx9pZIt4%2BiWGJLYgsMSEu9bWINmafqX31qws7E0%2FOfJzbX3VLtqbtrcbn7gJBtxXN5QuYrYkvXHP3GbNXFqUXVemK1TYl1CPqmt%2BmTFLVzU2cC5CT1rkTe%2B9cB6cx8dkma9l8K35y%2BBvN93bo1%2FjGAi%2Bv8JdMrmgIxiA11IJZTNZAGNtMHinyVVW6O7VBChe8Kdyujlz40HlDZ2luVXmILDPgRvhyX%2FpDHAsT3LNdFu9eG3yinHj7u8k8G9dlUTrvhEmweIZ5iQukOdgQvukWjicwc3wMEkeaRWB4gl%2B4Cz5MFypta5KYK%2Fo%2F%2F%2BgpORmoAzld8XVIb%2FjlL9ryYzpt7Iv83czY3x7QwuxDoyJIagcUg0X9AJN0NvCBqg4DMNWz3MkGOqUBW4PTckGNkZAE5Z0MgNd4ShnfkWMwcOs5hXnRq1dn5%2FY7Fs2FBKnpHz71OtmrcqqbIdks8JH%2FLtkozkCHyd4IOFRcP4HgehWAu9uYPP%2F8dA7CLhH9IMQxO35DslCUS5INEgJINm8hPWptNUIEQMwHOFqYjGBkeTenj5xswQ9ZOMgEurvZe1kq7eeDPTpaSaOaSHR4AlhQ8cWblkWwAtaWgfAIXoYl&X-Amz-Signature=9a05564118376b848434e79756124e80efa6501548c20e35654c9545430b335e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T5BVGW7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6jieoaM13kzT%2FeryG%2F%2FhMuJjfw9Sua1AyQCj0Emf3MwIgEH%2FUfImvr%2FoGwxjIEPPJPBFYPS1E%2B8tH5s11pXnNV7wqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH%2Fh7SrbRSwTXWITyrcA%2F9HL1p%2BJbv%2FFrMz3IC%2F9x69QMQVtID%2F0L8Xvz4Ud2rdLumvHCoAa2PNrNA8MRsIG7%2B11jc%2F316rCG3tgIVMe5cq2sRTyMXKTOETFZ7WSPtolgyp7ad4zDwrKcmox7k2N3AsAOtjKdWB482UGeIZT84UaRctvnyBBvBcdBV51Y1oTSVzC%2B2B5xFn5BwWKNnfsvnheh8gE16yN2jZXEG%2BM%2BmNUJTeesHjUNJiPF20DHGUub6tf5uBU1BVjHmqvLYFx9pZIt4%2BiWGJLYgsMSEu9bWINmafqX31qws7E0%2FOfJzbX3VLtqbtrcbn7gJBtxXN5QuYrYkvXHP3GbNXFqUXVemK1TYl1CPqmt%2BmTFLVzU2cC5CT1rkTe%2B9cB6cx8dkma9l8K35y%2BBvN93bo1%2FjGAi%2Bv8JdMrmgIxiA11IJZTNZAGNtMHinyVVW6O7VBChe8Kdyujlz40HlDZ2luVXmILDPgRvhyX%2FpDHAsT3LNdFu9eG3yinHj7u8k8G9dlUTrvhEmweIZ5iQukOdgQvukWjicwc3wMEkeaRWB4gl%2B4Cz5MFypta5KYK%2Fo%2F%2F%2BgpORmoAzld8XVIb%2FjlL9ryYzpt7Iv83czY3x7QwuxDoyJIagcUg0X9AJN0NvCBqg4DMNWz3MkGOqUBW4PTckGNkZAE5Z0MgNd4ShnfkWMwcOs5hXnRq1dn5%2FY7Fs2FBKnpHz71OtmrcqqbIdks8JH%2FLtkozkCHyd4IOFRcP4HgehWAu9uYPP%2F8dA7CLhH9IMQxO35DslCUS5INEgJINm8hPWptNUIEQMwHOFqYjGBkeTenj5xswQ9ZOMgEurvZe1kq7eeDPTpaSaOaSHR4AlhQ8cWblkWwAtaWgfAIXoYl&X-Amz-Signature=f59a01ecca6ee1a08a5d130bc990a343bbf6156e25f3d4d10f19fb92b8cdfb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

