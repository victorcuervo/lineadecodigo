---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YAFI4BS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCquukVIBgGN7oTTIt0x%2FqlZkH9bcVvIYPGRzR%2B89%2BpDQIgUfsw9eELtqWKWbTIAqiNlNWFP0IV1e0JbWbovIt%2Ber8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHh0I9eh%2F%2FsACDD9nSrcA5hDmlcdH%2FIiP4OlhBlGZmOiHid%2BNLS9NXkKLuALh7aG4JliFr3TVp0hVo9pE5u5wHcevgg%2FDgQso8mBb07BmeND%2BH5RBW74lovCNEKK%2FYhVlGx50IpLM%2B1A9XUi9yS%2BbxZuu2MGQWL9gIgPSnSyBKSrsON2KfJy6EyvdllaqBta%2FRLubMOdksjs94%2BJZ5lLzRIzkRcrpUt8xPh4NzA3zqbMfP5chSNp1W69svqE1YSMRV7R50lHfcbjsSMlsiOtOp4SxN5o7vr8WDg8nGKurdFe6m7JxxelTZ4rU9aaxetfcMva5PXLWjZJ9vC15QTFByWmi%2FQWeTgazmhXFj4WG2arjg5yZZUdFLN9yPZ1ruAXvCf7JG9Ey%2FO3PEtHw%2FmfLciMxwvWBY%2FL2pWN%2Bg4kc1izNKHiv6cVt8U2m6xkam254KFt3P7Lft7uTTZ5rKLBUDpTyFQsSzWBoQsTArX6eeVoiAtHf6F%2FZvlq0pZxTTGZM9gnHunZiCATRfg2FZTmyQRISrKZXxhPJXmsYEyWDwZ4pVVgiDYxlUr3bTf0j7kA0LHR32NwDcXSoLm%2Bm8Bpcmx1eAMOEcq1bRtRh%2BWgqIHJh35vX4oQEZeIMUAtSkpeSqP%2FXxvtXo%2FMTG6CMOrGyskGOqUBO0NYYziKBSWoz2v%2FVZvn%2F0cdhjwqdVvTqlfx4iEVJAYSWAdbLfIBtAmEhLfrVYPG7rwWRDNvANR5sGFOPsIj7OqtBG%2Bc6lwqsaT1yOLF5r%2FdvmwQRbYxrXTiFYKBhBFDBl3dYNHsXU8RQ0GpSnUGz1FUmDGJad2RXYwQtqiuM5O9mHvax4FpERW9GNeI37q1YUD7w6i%2B9yCBZnUcNwY20MsQtjDV&X-Amz-Signature=79483b06c2dc333ed2de8a01278a411dfbfb85f1ef7a1981b00d365adfc3e609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YAFI4BS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCquukVIBgGN7oTTIt0x%2FqlZkH9bcVvIYPGRzR%2B89%2BpDQIgUfsw9eELtqWKWbTIAqiNlNWFP0IV1e0JbWbovIt%2Ber8q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHh0I9eh%2F%2FsACDD9nSrcA5hDmlcdH%2FIiP4OlhBlGZmOiHid%2BNLS9NXkKLuALh7aG4JliFr3TVp0hVo9pE5u5wHcevgg%2FDgQso8mBb07BmeND%2BH5RBW74lovCNEKK%2FYhVlGx50IpLM%2B1A9XUi9yS%2BbxZuu2MGQWL9gIgPSnSyBKSrsON2KfJy6EyvdllaqBta%2FRLubMOdksjs94%2BJZ5lLzRIzkRcrpUt8xPh4NzA3zqbMfP5chSNp1W69svqE1YSMRV7R50lHfcbjsSMlsiOtOp4SxN5o7vr8WDg8nGKurdFe6m7JxxelTZ4rU9aaxetfcMva5PXLWjZJ9vC15QTFByWmi%2FQWeTgazmhXFj4WG2arjg5yZZUdFLN9yPZ1ruAXvCf7JG9Ey%2FO3PEtHw%2FmfLciMxwvWBY%2FL2pWN%2Bg4kc1izNKHiv6cVt8U2m6xkam254KFt3P7Lft7uTTZ5rKLBUDpTyFQsSzWBoQsTArX6eeVoiAtHf6F%2FZvlq0pZxTTGZM9gnHunZiCATRfg2FZTmyQRISrKZXxhPJXmsYEyWDwZ4pVVgiDYxlUr3bTf0j7kA0LHR32NwDcXSoLm%2Bm8Bpcmx1eAMOEcq1bRtRh%2BWgqIHJh35vX4oQEZeIMUAtSkpeSqP%2FXxvtXo%2FMTG6CMOrGyskGOqUBO0NYYziKBSWoz2v%2FVZvn%2F0cdhjwqdVvTqlfx4iEVJAYSWAdbLfIBtAmEhLfrVYPG7rwWRDNvANR5sGFOPsIj7OqtBG%2Bc6lwqsaT1yOLF5r%2FdvmwQRbYxrXTiFYKBhBFDBl3dYNHsXU8RQ0GpSnUGz1FUmDGJad2RXYwQtqiuM5O9mHvax4FpERW9GNeI37q1YUD7w6i%2B9yCBZnUcNwY20MsQtjDV&X-Amz-Signature=883d63cfdbada060d1ec7bd25eddfc8df02c7105154fad58785dc1c38d15652b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

