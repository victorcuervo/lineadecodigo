---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZPJOLT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHad6jv26F3NF6XEQ0d8GKnbm1IfwC1BNkof4JxxA2q%2FAiEAsqg2oLHpN8Ye%2Bw185GuABFBhrFvpgVQatqhV0RZgsPIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLpB6wfOOHo3paPQNircA9U19baU1jSBA1diW96%2FL2P1QGxIVgCLmhkvaKfXYBd2B9b5xG0sbrsVMBdP2Iz3PPEkshxrmRASDwMzlPHO7Owk%2B27v35wMI%2FlCx2Z4B9KufA38ntZho%2BilI3G%2F4%2BH2oLWwJ69p9a8%2BEFyJ4Ed74mXlDG0oGWrQQaN30fXEwCdh9l8YwNsLRrWr17jdHDEA2KCvIg4r01es2pBr3hoieoAzeH8H9oL3zvzESa7z%2BwvOMYefgzfRK7EG%2BScwPl5%2Bup%2FJQj6y6F61X8Cb068P1tx5PdQfBc7c0PeiMdvUePmq71Rvn0M2DIxBUHlV%2BgiGyicKwwZn9sZVzsnY9GIEhTbl5dkpEtQKrocK9kYT6LDDI0RrNFyN%2BCfjneEJ8ihbqrJ0RlR0hdTsti61Q1zzpG38cpBoOY%2F06YL6aZG5Qj7eQ2pusl7fjiieZ5Fb7ufEN%2Fu7wvMxs9AB%2F5m8USN1o3CIWpAZXg8QzzfumWEYTjW4XzT5OadeqGpaGd8VgHP%2BWWaU0HXh0fTWpNB%2BVAUVnfkuypn1hq3NXa%2BzBMGahDoYn7IXB%2FWoduLaDoA%2FW%2F%2FuKRWMHFAPThOfdVD19KKDVSqdR60kz948LtOBkkrzgOFetaqPPn9WjxiDSE1UMKnH0ckGOqUBgxzYQL0ROtwkeQZWwgQgd%2FT0V61VLg0Zd8RfSAzURs1f5DIQBbjKkuXGgru9hXZISUPEB7IZBq0XcDX%2FQcyJofVoW3GwQwo0d6DonpXATQc0hsPHGmOEkODjvglXtxdm0h15cvjsJEYKq9EvZ0glGME9Dt%2FPl1kQqSOUd97HAbOwlgfQiStWJ6BYV23tc8wluxAya6iMc8Xs%2B7BX44qQEqKXhw6f&X-Amz-Signature=8046e6a021c2329481dff69546610a32a4e0fa0877e128e6e56a9250868604bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ZPJOLT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHad6jv26F3NF6XEQ0d8GKnbm1IfwC1BNkof4JxxA2q%2FAiEAsqg2oLHpN8Ye%2Bw185GuABFBhrFvpgVQatqhV0RZgsPIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLpB6wfOOHo3paPQNircA9U19baU1jSBA1diW96%2FL2P1QGxIVgCLmhkvaKfXYBd2B9b5xG0sbrsVMBdP2Iz3PPEkshxrmRASDwMzlPHO7Owk%2B27v35wMI%2FlCx2Z4B9KufA38ntZho%2BilI3G%2F4%2BH2oLWwJ69p9a8%2BEFyJ4Ed74mXlDG0oGWrQQaN30fXEwCdh9l8YwNsLRrWr17jdHDEA2KCvIg4r01es2pBr3hoieoAzeH8H9oL3zvzESa7z%2BwvOMYefgzfRK7EG%2BScwPl5%2Bup%2FJQj6y6F61X8Cb068P1tx5PdQfBc7c0PeiMdvUePmq71Rvn0M2DIxBUHlV%2BgiGyicKwwZn9sZVzsnY9GIEhTbl5dkpEtQKrocK9kYT6LDDI0RrNFyN%2BCfjneEJ8ihbqrJ0RlR0hdTsti61Q1zzpG38cpBoOY%2F06YL6aZG5Qj7eQ2pusl7fjiieZ5Fb7ufEN%2Fu7wvMxs9AB%2F5m8USN1o3CIWpAZXg8QzzfumWEYTjW4XzT5OadeqGpaGd8VgHP%2BWWaU0HXh0fTWpNB%2BVAUVnfkuypn1hq3NXa%2BzBMGahDoYn7IXB%2FWoduLaDoA%2FW%2F%2FuKRWMHFAPThOfdVD19KKDVSqdR60kz948LtOBkkrzgOFetaqPPn9WjxiDSE1UMKnH0ckGOqUBgxzYQL0ROtwkeQZWwgQgd%2FT0V61VLg0Zd8RfSAzURs1f5DIQBbjKkuXGgru9hXZISUPEB7IZBq0XcDX%2FQcyJofVoW3GwQwo0d6DonpXATQc0hsPHGmOEkODjvglXtxdm0h15cvjsJEYKq9EvZ0glGME9Dt%2FPl1kQqSOUd97HAbOwlgfQiStWJ6BYV23tc8wluxAya6iMc8Xs%2B7BX44qQEqKXhw6f&X-Amz-Signature=598c01f2b206d5c23a6856bbbc1049709e4d378cf814518ed3050ee4d52e0625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

