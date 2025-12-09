---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVKKL64%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpCY6m%2BU%2BdzfQubDA0qPseD%2FkBChFoSo0NtyAFvrq9lgIgUr8Jp9mAayn%2FctJxNRGCQe65DE0iRa73aMdBLP5Y334qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbikjODgn0MGLhTkircA2smAThkMJI%2BWdzQogwF%2B25fgq0AauYaZ5tmeVlF%2Fy0ESamlFKWPpyyUGQ4vS1n75v0j01Qed1LHl92sTTHPkifp1QwugPOSXvZ7V4vb3scF1d6pmAx9QLoquaNeCR6oIqh7wKdI4ztP8s1wZv1RD7aMKM%2F8UvhQOprRE9fq5xpRYYselhcKwJVO%2FOypW9qjTNXUOIlESh0zu0XmE8zjoNSKAsGBgHkh%2Fss677YIYcn5k10B7wfEXCcPmifJ%2BxgjjL%2FJBhU1o4%2BP1E0C9xdciSHhojYeYO%2BeTmRyknl227ptEbvlDiGuXvRmtN3JFwAKG1Xg9S9S%2BEPGvtT3ZpiyCXdK0m2ZVnp%2BkJiLZlfxA7X4jbJN%2F650DfXILSDfgJLEFEndRPdzZ4LQ0sfxWALs3cyQr0gO9zk6L%2Bhjpzo0vBNcix6UPR8XCZckgdqYER303x4eRYQzKEr5JT2z77E3YQDhgL2hWnsviyZr%2BdavRMBxtnOuMH2ed%2BL3OR%2Bdtm9aOV9uDNENlsvnlNrCpTYP0gwxd5d2PuAzMk5tE2f5UP7cyoWV3GO23is3%2FoCxap9Hq9IUiVDrYHGJaRPMDCZHhmRof7C%2F%2FGq6UrW292q6WPyOIo2zCPbeYNFsOagqMK%2FD38kGOqUBJH%2BXmE9%2FSCydMBGZd7Y%2F1Pj6hK6n5YFXo3Yu1PCr4V4ehblpaNvezh%2FtLgMpeQEpn3pAhArJ3vDbCv9921JjqfoipEbo%2F%2FNUA6YUkldVKJ5zHEEJn2JMD8d%2F9FRhDa6vd3nISNsMkAuMrA7dtj0WnBrwOZJYAuOe6TVeG%2Fkj64hFi%2F%2FIeiFHB2mqfuq6l2XwBxBh%2BTx9oNFB5K%2FNpxnWbOl7rwh3&X-Amz-Signature=22f1cd577a5177d03c958e48f0ecb8aaf888b72fee58c5dda452bbe81c4eb740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVKKL64%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpCY6m%2BU%2BdzfQubDA0qPseD%2FkBChFoSo0NtyAFvrq9lgIgUr8Jp9mAayn%2FctJxNRGCQe65DE0iRa73aMdBLP5Y334qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbikjODgn0MGLhTkircA2smAThkMJI%2BWdzQogwF%2B25fgq0AauYaZ5tmeVlF%2Fy0ESamlFKWPpyyUGQ4vS1n75v0j01Qed1LHl92sTTHPkifp1QwugPOSXvZ7V4vb3scF1d6pmAx9QLoquaNeCR6oIqh7wKdI4ztP8s1wZv1RD7aMKM%2F8UvhQOprRE9fq5xpRYYselhcKwJVO%2FOypW9qjTNXUOIlESh0zu0XmE8zjoNSKAsGBgHkh%2Fss677YIYcn5k10B7wfEXCcPmifJ%2BxgjjL%2FJBhU1o4%2BP1E0C9xdciSHhojYeYO%2BeTmRyknl227ptEbvlDiGuXvRmtN3JFwAKG1Xg9S9S%2BEPGvtT3ZpiyCXdK0m2ZVnp%2BkJiLZlfxA7X4jbJN%2F650DfXILSDfgJLEFEndRPdzZ4LQ0sfxWALs3cyQr0gO9zk6L%2Bhjpzo0vBNcix6UPR8XCZckgdqYER303x4eRYQzKEr5JT2z77E3YQDhgL2hWnsviyZr%2BdavRMBxtnOuMH2ed%2BL3OR%2Bdtm9aOV9uDNENlsvnlNrCpTYP0gwxd5d2PuAzMk5tE2f5UP7cyoWV3GO23is3%2FoCxap9Hq9IUiVDrYHGJaRPMDCZHhmRof7C%2F%2FGq6UrW292q6WPyOIo2zCPbeYNFsOagqMK%2FD38kGOqUBJH%2BXmE9%2FSCydMBGZd7Y%2F1Pj6hK6n5YFXo3Yu1PCr4V4ehblpaNvezh%2FtLgMpeQEpn3pAhArJ3vDbCv9921JjqfoipEbo%2F%2FNUA6YUkldVKJ5zHEEJn2JMD8d%2F9FRhDa6vd3nISNsMkAuMrA7dtj0WnBrwOZJYAuOe6TVeG%2Fkj64hFi%2F%2FIeiFHB2mqfuq6l2XwBxBh%2BTx9oNFB5K%2FNpxnWbOl7rwh3&X-Amz-Signature=94317aad7cd5572a90bb3430be4fa71fa65a3b1b325294af74808b5beed6eb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

