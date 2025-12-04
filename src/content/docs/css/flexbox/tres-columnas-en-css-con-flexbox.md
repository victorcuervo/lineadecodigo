---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG3MCGKC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCD3xg5zOgMmfRRcMH2h7vOPf2oj%2FfGEOvXKr%2BIxQx8UQIgEJbKUNxxMCfAav50zHwRuuY022qeYsTMwYsPoB856dkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCsCE4HVdFKXdoR05ircA7pDQklV4w96UFnGen%2F6NcPGdCpKelDgbCskIqq17krfvrDaUJOAWOcQIe5vK3lsUGIN1IRe1vqleIbQgWAq5xgAdo76%2FVVMlQZDSdydCGTDpaClkWuqpcoaH9LmygXlyu1KsZFW8Q6EFfZtKQ4O3eaFkCxXm9UAwJ2zGyfUxlsWFHaSAq62P0ISFz%2FqTNjy6eA%2BnbzemMHzT6vTlMxfz4UpGXXYxTMe%2BEzatP%2FWtmGVMqMd7atYa6zZu2%2F7h51L340%2FSTnOTpl5aaTgsJaMHTIf6PMGXsesxP2hyXwgRd3yqpdiOF8LuLqflGkFN%2BS476GmLWWbxFXHxWuMtoENeGeYmqRPy4tVjro71KbZzx7AA1qhhrnv%2FboZoMctOmHzhuemR7ZgZ1xVVRHc%2Fjj1Q9td01KQRPYE5z%2FZeVFdFU6trtCpnOwCY%2BFcQT3%2BJC3wNjZcuU853GtIMrd0x20kwg1Aa1xSgmGEYFX%2B0cxMl%2BHJp3G6c4n2yybAMwSbFCe70r1WBy6U%2FQYPqYCAN%2Fwo%2BxNAuHCEiCRQQgBw5SqwCTukpIQ4HZT0EEllM21AN1KwEZ93zIS1oZwvT8OdAZMM2YMijkLO6ELCLbrH6lFRQXU2qndanuda399ROd8cMOSuxMkGOqUBtNiXMDlXQAOiPfdEbaCjZuIUCNI6WX0t%2Bf0xxLZMDyqsILKxxwlLf1ZYpQaJdCXhFZPiPLNISP8OLjFr5U%2FNJuTyH%2F1KhyzARM%2BqEC7gOu7lDpK%2FL2wObCz7eHfAzpIIuL%2B%2BzgfLptDD28aDEEm1rJfY8Z1miswqA0cj7Ir%2FBk6qTiE0K%2FEHlik%2FQ0OMHYgNMexqzWj%2BkbUFK3%2FIVgtxBnMLcmfU&X-Amz-Signature=3238fdac8b733dab6e4cfc25e72c85ff4f30c5a3ed5090c56d2eb8b099503529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG3MCGKC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCD3xg5zOgMmfRRcMH2h7vOPf2oj%2FfGEOvXKr%2BIxQx8UQIgEJbKUNxxMCfAav50zHwRuuY022qeYsTMwYsPoB856dkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCsCE4HVdFKXdoR05ircA7pDQklV4w96UFnGen%2F6NcPGdCpKelDgbCskIqq17krfvrDaUJOAWOcQIe5vK3lsUGIN1IRe1vqleIbQgWAq5xgAdo76%2FVVMlQZDSdydCGTDpaClkWuqpcoaH9LmygXlyu1KsZFW8Q6EFfZtKQ4O3eaFkCxXm9UAwJ2zGyfUxlsWFHaSAq62P0ISFz%2FqTNjy6eA%2BnbzemMHzT6vTlMxfz4UpGXXYxTMe%2BEzatP%2FWtmGVMqMd7atYa6zZu2%2F7h51L340%2FSTnOTpl5aaTgsJaMHTIf6PMGXsesxP2hyXwgRd3yqpdiOF8LuLqflGkFN%2BS476GmLWWbxFXHxWuMtoENeGeYmqRPy4tVjro71KbZzx7AA1qhhrnv%2FboZoMctOmHzhuemR7ZgZ1xVVRHc%2Fjj1Q9td01KQRPYE5z%2FZeVFdFU6trtCpnOwCY%2BFcQT3%2BJC3wNjZcuU853GtIMrd0x20kwg1Aa1xSgmGEYFX%2B0cxMl%2BHJp3G6c4n2yybAMwSbFCe70r1WBy6U%2FQYPqYCAN%2Fwo%2BxNAuHCEiCRQQgBw5SqwCTukpIQ4HZT0EEllM21AN1KwEZ93zIS1oZwvT8OdAZMM2YMijkLO6ELCLbrH6lFRQXU2qndanuda399ROd8cMOSuxMkGOqUBtNiXMDlXQAOiPfdEbaCjZuIUCNI6WX0t%2Bf0xxLZMDyqsILKxxwlLf1ZYpQaJdCXhFZPiPLNISP8OLjFr5U%2FNJuTyH%2F1KhyzARM%2BqEC7gOu7lDpK%2FL2wObCz7eHfAzpIIuL%2B%2BzgfLptDD28aDEEm1rJfY8Z1miswqA0cj7Ir%2FBk6qTiE0K%2FEHlik%2FQ0OMHYgNMexqzWj%2BkbUFK3%2FIVgtxBnMLcmfU&X-Amz-Signature=d43314da5e29c3eeba7ca394395b75be02be37772005f00880a3e1b09b32575e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

