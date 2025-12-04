---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P563YYZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDFImaUURec71nkzqYxqyL4xPBPJSPIylSBGG6GjjoVjAIhAK%2FQicow6hLuAJEXrX4YxE1Y7EHbc9jkjmrUZDz5XFf8Kv8DCEYQABoMNjM3NDIzMTgzODA1IgxSR8dyzhTqCw%2B0yUoq3AM66bc31NQT6fyQ3i0KVXC4nPsQD2YyWyY%2BKO9zMtOtLWpagzje4yRxQBnQBagUE7PsfCrCdXe2cl3OWRuw1zDu%2FhzWtgpfY96XDiKhLFPda36aV6MCLsNUOP7%2FIdzTPFIvN1C4clfKfUb1xn5QC40LEsNwaAkKCbYbAQxzsvLBxtW7Hc2KUCyuOMF2fjjR%2BJwCYc6nqyA2w25p7chPU%2FIdKpQFRNdq11tiGlz3uHoAA%2FMxjXTfASHzMDGRLDSdhWRnELt4ItcjyFZhkmH5Ed99bq2dICnRR6svV3r%2BxaS%2BSZMfwOvIkxeOSF0GO7F5DjRvI5y6Ae75hHHiLaudgL049TWCkDxJt4ZmDpa%2FhEd9zUhZW5dIoQkSYZWOhflSn6cadlA9AtjzEoCdSvWM0NHvf1vJmFN9LY58PmNkwcEj9WJeo5Kvto6objO3E%2BG73BLmrjmbSaGdc7bkF8wmh%2Bi8bNusDYeSqbw0j5H%2BSn7z7q1ICkH6oJdReyElKxNJ3Fiy1jjyZfrDdxXceEdGaW0i83dAsqJxK%2FwX48M8fpf%2FA7hoAto%2Fo4JVROkaeBeoKJHqDuzgdvms2d%2BbxMING4p7EXHuEw7alW02A5D22I0IfXZaupKzPJJONfCXdzD2g8bJBjqkAbwvtgcoqDqudbba%2BTAM5zAmB0AnL1EJPbm5E064n2zoCHm%2BSvfc7SwOz6KPmZ4ZzCa%2BDnL8NPCbO13tBxGpD%2B00pr9jTRgquAeGVAfoMfzdOANxrEVV%2Fc9fvW59VEPEFp7TK6wM2henDrjveKV4cDryMWl%2Byt8JKFpF0Fjvh3VmO1a9QvhhZ0wAM1lxZ3xs99fTJ%2F6eoHuz34xg9ujRLouqANHt&X-Amz-Signature=bf8eb34749f538534ba8b57dfbb76415aac460a08c3beefaea1f897a0fea27e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P563YYZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDFImaUURec71nkzqYxqyL4xPBPJSPIylSBGG6GjjoVjAIhAK%2FQicow6hLuAJEXrX4YxE1Y7EHbc9jkjmrUZDz5XFf8Kv8DCEYQABoMNjM3NDIzMTgzODA1IgxSR8dyzhTqCw%2B0yUoq3AM66bc31NQT6fyQ3i0KVXC4nPsQD2YyWyY%2BKO9zMtOtLWpagzje4yRxQBnQBagUE7PsfCrCdXe2cl3OWRuw1zDu%2FhzWtgpfY96XDiKhLFPda36aV6MCLsNUOP7%2FIdzTPFIvN1C4clfKfUb1xn5QC40LEsNwaAkKCbYbAQxzsvLBxtW7Hc2KUCyuOMF2fjjR%2BJwCYc6nqyA2w25p7chPU%2FIdKpQFRNdq11tiGlz3uHoAA%2FMxjXTfASHzMDGRLDSdhWRnELt4ItcjyFZhkmH5Ed99bq2dICnRR6svV3r%2BxaS%2BSZMfwOvIkxeOSF0GO7F5DjRvI5y6Ae75hHHiLaudgL049TWCkDxJt4ZmDpa%2FhEd9zUhZW5dIoQkSYZWOhflSn6cadlA9AtjzEoCdSvWM0NHvf1vJmFN9LY58PmNkwcEj9WJeo5Kvto6objO3E%2BG73BLmrjmbSaGdc7bkF8wmh%2Bi8bNusDYeSqbw0j5H%2BSn7z7q1ICkH6oJdReyElKxNJ3Fiy1jjyZfrDdxXceEdGaW0i83dAsqJxK%2FwX48M8fpf%2FA7hoAto%2Fo4JVROkaeBeoKJHqDuzgdvms2d%2BbxMING4p7EXHuEw7alW02A5D22I0IfXZaupKzPJJONfCXdzD2g8bJBjqkAbwvtgcoqDqudbba%2BTAM5zAmB0AnL1EJPbm5E064n2zoCHm%2BSvfc7SwOz6KPmZ4ZzCa%2BDnL8NPCbO13tBxGpD%2B00pr9jTRgquAeGVAfoMfzdOANxrEVV%2Fc9fvW59VEPEFp7TK6wM2henDrjveKV4cDryMWl%2Byt8JKFpF0Fjvh3VmO1a9QvhhZ0wAM1lxZ3xs99fTJ%2F6eoHuz34xg9ujRLouqANHt&X-Amz-Signature=564093bc641242fd5995893acb4ceb44a6b30cb246a22557c0ae200e993e21ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

