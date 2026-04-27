# WM Triad

This repository contains the code, materials, and data required to reproduce the analyses and figures reported in [paper/preprint title].

## Repository structure

### Analysis
- `analysis/imagery_questionnaire_preprocessing.ipynb` — preprocess imagery questionnaire responses
- `analysis/wm_task_qa_merging.ipynb` — preprocess WM task data and merge with questionnaire data
- `analysis/error_analysis.ipynb` — preprocess incorrect trials
- `analysis/regression_modeling.ipynb` — run regression models
- `analysis/plots.ipynb` — generate paper figures

### Data
- `data/wm_task_individual_participants/` — individual participant WM task data; used in `wm_task_qa_merging.ipynb`
- `data/individual_questionnaires/` — individual questionnaire data; used in `imagery_questionnaire_preprocessing.ipynb`
- `data/combined_questionnaires.csv` — combined questionnaire data
- `data/questionnaires_preprocessed.csv` — generated in `imagery_questionnaire_preprocessing.ipynb`; used in `wm_task_qa_merging.ipynb`
- `data/wm_task_questionnaires.csv` — generated in `wm_task_qa_merging.ipynb`; used in `regression_modeling.ipynb` and `plots.ipynb`

### Materials
- `imagery_online_study/` — questionnaire materials and scripts
- `wm_task/` — WM task materials and scripts in a zipped folder

### Figures
- `figures/` — PDF and PNG versions of the paper figures

## Reproducing the analysis
Run the notebooks in the following order:

1. `imagery_questionnaire_preprocessing.ipynb`
2. `wm_task_qa_merging.ipynb`
3. `error_analysis.ipynb`
4. `regression_modeling.ipynb`
6. `plots.ipynb`

## Requirements
Analyses were run in Jupyter notebooks using Python/R. Required packages are listed in the corresponding notebooks.

## Notes
The repository is intended to accompany the journal submission and provide all materials necessary to reproduce the reported results.